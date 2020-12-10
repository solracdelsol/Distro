export const postChannel = (formData) =>( //take serverId straight from formData instead of adding a serverId as a second argument 
  $.ajax({
    url: `/api/servers/${formData.serverId}/channels`,
    method: "POST",
    data: formData
  })
)

export const getChannel = (channelObj) => (
  $.ajax({
    url: `api/servers/${channelObj.serverId}/channels/${channelObj.id}`,
    method: "GET",
  })
);

export const getChannels = (channelObj) => ( //gets all channels of a given server
  $.ajax({
    url: `api/servers/${channelObj.serverId}/channels`,
    method: "GET",
  })
);

export const editChannel = (editForm) => (
  $.ajax({
    url: `/api/servers/${editForm.serverId}/channels/${editForm.id}`,
    method: "PATCH",
    data: {channel:{server_id: editForm.serverId, ch_title: editForm.channelTitle}
    },
  })
)
//note: package data like this data = {channel:{ch_title:"test", server_id: 7}}
//editChannel(7,10, data);

export const deleteChannel = (channelObj) => (
  $.ajax({
    url: `/api/servers/${channelObj.serverId}/channels/${channelObj.id}`,
    method: "DELETE"
  })
)

//--REFACTORED ALREADY--- IMPORTANT, MAY HAVE TO REFACTOR ACTION FILE AND THE CHANNEL UTIL FILE
//IDEA -> FOR CHANNEL UTIL, i can have it accept a frontend state object of a channel instead, so that it only needs one argument to get all the API routing info from
//^ confirm with coach