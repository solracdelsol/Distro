export const postServer = (formData) =>( 
  $.ajax({
    url: `/api/servers`,
    method: "POST",
    data: formData
  })
)

export const getServer = (serverObj) => (
  $.ajax({
    url: `api/servers/${serverObj.serverId}`,
    method: "GET",
  })
);

export const getServers = () => ( //gets all of currentUser's servers
  $.ajax({
    url: "api/servers",
    method: "GET",
  })
);

export const editServer = (editForm) => ( //NOTE: alternate option is to add second argument denoting serverId, might come in handy
  $.ajax({
    url: `api/servers/${editForm.id}`,
    method: "PATCH",
    data: {server: {server_title: editForm.serverTitle, host_id: editForm.hostId } }
  })
)

export const deleteServer = (serverObj) => (
  $.ajax({
    url: `api/servers/${serverObj.serverId}`,
    method: "DELETE"
  })
)