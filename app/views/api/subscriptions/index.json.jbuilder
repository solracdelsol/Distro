json.set! @server.id do
  json.serverTitle @server.server_title
  json.hostId @server.host_id
  json.members @server.subscriptions.map{ |sub|  {sub.id => {userName: sub.user.username, userID: sub.user.id}}  }
end