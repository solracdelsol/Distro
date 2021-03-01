json.set! @server.id do
  json.id @server.id
  json.serverTitle @server.server_title
  json.hostId @server.host_id
  json.subscriptions @server.subscriptions.map{ |sub|  {sub.id => {userName: sub.user.username, userID: sub.user.id}}  }
end