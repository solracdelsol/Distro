class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "messages_channel#{params["room"]}"
    # stream_for messageChannel
  end
  
  def messageChannel
    Channel.find_by(params[:id])
  end

  def speak(data)
    socket = data["message"]["channel_id"]
    message = Message.create(data["message"])
    # socket = { message:{ body: message , user_id: this.props.currentUser.id , channel_id: chURL } }
    ActionCable.server.broadcast("messages_channel#{params["room"]}", socket )
   
  end

  # def receive(data)
  #   ActionCable.server.broadcast "messages_channel#{params[:channel_id]}", data
  # end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

end
