export const postChannel = (formData) =>( //take server_id straight from formData instead of adding a serverId as a second argument 
  $.ajax({
    url: `/api/servers/${formData.server_id}/channels`,
    method: "POST",
    data: formData
  })
)

export const getChannel = (serverId, channelId) => (
  $.ajax({
    url: `api/servers/${serverId}/channels/${channelId}`,
    method: "GET",
  })
);

export const getChannels = (serverId) => (
  $.ajax({
    url: `api/servers/${serverId}/channels`,
    method: "GET",
  })
);

export const editChannel = (serverId, channelId, editForm) => (
  $.ajax({
    url: `/api/servers/${serverId}/channels/${channelId}`,
    method: "PATCH",
    data: editForm, // not sure if it needs the {editForm} or maybe just make the argument an object
  })
)
//note: package data like this data = {channel:{ch_title:"test", server_id: 7}}
//editChannel(7,10, data);

export const deleteChannel = (serverId, channelId) => (
  $.ajax({
    url: `/api/servers/${serverId}/channels/${channelId}`,
    method: "DELETE"
  })
)