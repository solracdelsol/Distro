class Api::ChannelsController < ApplicationController

    def create
    @channel = Channel.new(channel_params)

    if @channel.save
      render "api/users/show"
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
    @channels = Channel.all
    render "api/channels/index"
  end

  def update
    @channel = Channel.find(params[:id])
    @channel.update(channel_params)
    render "api/channels/update"
  end

  private
  def channel_params
    params.require(:channel).permit(:ch_title, :server_id) #this specifies what the params are allowed on a form
  end
end
