class Api::ChannelsController < ApplicationController

  skip_before_action :verify_authenticity_token #use this to not get error'd out when doing non-GET requests

  def create
    @channel = Channel.new(channel_params)

    if @channel.save!
      @channels = Server.find_by(params[:id]).channels #add this line because the index jbuilder has the same variable
      render "api/channels/index"
    else
      render json: ["Unable to process your request"], status: 404
    end
  end

  def show
    @channel = Channel.find(params[:id])
    
    if @channel
      render "api/channels/show"
    else
      flash[:notice] = "Channel not found"
    end
  end

  def index
    @server = Server.find_by(params[:id])
    
    @channels = @server.channels
    if @channels
      render "api/channels/index"
    else
      flash[:notice] = "No channels found"
    end

  end

  def update
    @channel = Channel.find(params[:id])
    @channel.update(channel_params)
    render "api/channels/show"
  end

  def destroy
    @channel = Channel.find(params[:id])

    if @channel.destroy!
      @channels = Server.find_by(params[:id]).channels #add this line because the index jbuilder has the same variable
      render "api/channels/index"
    end

  end

  private
  def channel_params
    params.require(:channel).permit(:ch_title, :server_id) #this specifies what the params are allowed on a form
  end

end
