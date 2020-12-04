class Api::ServersController < ApplicationController
  #skip_before_action :verify_authenticity_token

  def create
    @server = Server.new(server_params)

    if @server.save
      render "api/servers/show"
    else
      render json: ["Unable to process your request"], status: 404
    end
  end

  def show
    @server = Server.find_by(id: params[:server][:id])

    if @server
      render "api/servers/show"
    else
      render json: ["Server not found"], status: 404
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
    @server = current_user.hosted_servers.find_by(
      params[:server][:id]
    )
    # @server = Server.find(params[:id]) would also probably work

    if @server
      @server.destroy!
    else
      render json: ["Server not found"], status: 404
    end

  end

  private

  def server_params
    params.require(:server).permit(:server_title, :host_id) 
    #host_id can be the currentUser session id from frontend
  end
end
