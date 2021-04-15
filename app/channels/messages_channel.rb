class MessagesChannel < ApplicationCable::Channel
  def subscribed
    # stream_for "messages_channel#{params[:channelId]}"
    # byebug
    stream_for messageChannel
  end
  
  def messageChannel
    Channel.find_by(params[:id])
  end

  def speak(data)
    socket = { body: data['body'], user_id: data["userId"], channel_id: data["channelId"] }
    MessagesChannel.broadcast_to(messageChannel, socket)
  end

  def appear(data)
    print data
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
