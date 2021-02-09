@servers.each do |server|
  # json.set! sub.id do
  #   json.id sub.id
  #   json.serverId sub.server_id
  #   json.userId sub.user_id
  #   json.serverTitle sub.server.server_title
  # end
  json.set! server.id do
    json.id server.id
    json.serverTitle server.server_title
    json.hostId server.host_id
    json.subscribers server.users.map{|user| {user.id => user.username}}
  end
end