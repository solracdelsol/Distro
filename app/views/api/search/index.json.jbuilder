@servers.each do |server|
  json.set! server.id do
    json.id server.id
    json.serverTitle server.server_title
    json.hostId server.host_id
    json.subscribers server.users.map{|user| {user.id => user.username}}
  end
end