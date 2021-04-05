class Api::ServersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @server = Server.new(server_params) #IMPORTANT: Upon server creation, we want to also create a default channel for this server called General, and this user-server link to our Subscription table
    
    if @server.save!
      subscribe = Subscription.new(server_id:Server.last.id, user_id:Server.last.host_id) #subscribe the user to this server
      subscribe.save!

      channel = Channel.new(ch_title: "General", server_id: Server.last.id) #create the default General channel for the server
      channel.save!

      @servers = current_user.servers #we create an @servers variable available because that's the variable we want to access for the jbuilder api views
      render "api/servers/show"
    else
      render json: ["Unable to process your request"], status: 404
    end
  end

  def show
    @server = Server.find_by( id:params[:id])
    #debugger #uncomment the debugger to see what params are for this specific route
    if @server
      render "api/servers/show"
    else
      flash[:notice] = "No servers found"
    end
    
  end

  def index
    #@current_user = User.find_by(session_token: session[:session_token])
    @servers = current_user.servers #needs a current_user for this to work
  
    if @servers
      render "api/servers/index"
    else
      flash[:notice] = "No servers found"
    end
  end

  def update
    @server = current_user.hosted_servers.find(params[:id])
    if @server.update!(server_params)
      render "api/servers/show"
    else
      flash[:notice] = "Unable to update."
    end
  end

  def destroy
    # @server = current_user.hosted_servers.find_by(
    #   params[:server][:id]
    # )
    @server = Server.find(params[:id]) #would also probably work
    subscriptions = @server.subscriptions
    channels = @server.channels

    if subscriptions.each { |sub| sub.destroy!} && channels.each { |channel| channel.destroy!} && @server.destroy!
      @servers = current_user.hosted_servers
      render flash.now[:notice] = "Server successfully deleted."
    else
      render flash.now[:notice] = "Something went wrong. Please try again later."
    end

  end

  private

  def server_params
    params.require(:server).permit(:server_title, :host_id) 
    #host_id can be the currentUser session id from frontend
  end
end
