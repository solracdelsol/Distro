@servers.each do |server|
  json.set! server.id do
    json.id server.id
    json.serverTitle server.server_title
    json.hostId server.host_id
  end
end
