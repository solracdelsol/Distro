json.set! @message.id do
  json.id @message.id
  json.channelId @message.channel_id
  json.userId @message.user_id
  json.userName @message.author.username
  json.timestamp @message.created_at
  json.body @message.body
end