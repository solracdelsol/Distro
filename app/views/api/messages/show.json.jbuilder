json.set! @message.id do
  json.id @message.id
  json.channelId @message.channel_id
  json.userId @message.user_id
  json.timestamp @message.created_at
  json.body @message.body
end