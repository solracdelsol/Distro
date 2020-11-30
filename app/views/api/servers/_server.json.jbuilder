  json.set! server.id do
    json.id server.id
    json.serverTitle server.server_title
    json.hostId server.host_id
  end

#send back channel info as well for ajax request
#channels associated with that server along with this server request
#server key channels key users key
#user: { servers: channels}

#create a joins table of server_id and user_id
