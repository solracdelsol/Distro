class Api::ServersController < ApplicationController
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
      render :show
    else
      render json: ["Server not found"], status: 404
    end
    
  end

  def index
    @servers = current_user.hosted_servers

    if @servers
      render "api/servers/index"
    else
      render json: ["No servers found"]
    end
  end

  def destroy
    # @server = Server.find_by_credentials(
    #   params[:server][:server_title],
    #   params[:server][:host_id]
    # ) # This is potentially another option

    @server = current_user.hosted_servers.find_by_credentials(
      params[:server][:id]
    )

    if @server
      @server.destroy
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
