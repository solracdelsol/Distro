json.set! @subscription.id do
  json.id @subscription.id
  json.userId @subscription.user_id
  json.serverId @subscription.server_id
  json.serverTitle @subscription.server.server_title
end

#honestly might not even need this