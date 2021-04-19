class Api::MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)

    if @message.save!
      # channel = Channel.find(params[:channel_id])
      # MessagesChannel.broadcast_to(channel,
      #   {@message.id => {
      #     id: @message.id,
      #     body: @message.body,
      #     userId: @message.user_id,
      #     channelId: @message.channel_id,
      #     timestamp: @message.created_at,
      #     userName: @message.author.username,
      #     }
      #   }
      # )
      render "api/messages/show"
    else
      format.json { render json: @message.errors, status: :unprocessable_entity }
    end

  end

  def index
    # debugger
    @messages = Channel.find_by( id: params[:channel_id]).messages.last(50) #capping at 50 messages to not brick my project frontend

    render "api/messages/index"
  end

  def show
    @message = Message.find_by( id: params[:id])

    render "api/messages/show"
  end

  

  # PATCH/PUT /messages/1
  # PATCH/PUT /messages/1.json
  # def update
  #   respond_to do |format|
  #     if @message.update(message_params)
  #       format.html { redirect_to @message, notice: 'Message was successfully updated.' }
  #       format.json { render :show, status: :ok, location: @message }
  #     else
  #       format.html { render :edit }
  #       format.json { render json: @message.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # DELETE /messages/1
  # DELETE /messages/1.json
  # def destroy
  #   @message.destroy
  #   respond_to do |format|
  #     format.html { redirect_to messages_url, notice: 'Message was successfully destroyed.' }
  #     format.json { head :no_content }
  #   end
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_message
    #   @message = Message.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def message_params
      params.require(:message).permit(:body, :user_id,:channel_id)
    end
end
