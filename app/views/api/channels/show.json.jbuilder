json.set! @channel.id do
  json.channelId @channel.id
  json.channelTitle @channel.ch_title
  json.serverId @channel.server_id
end