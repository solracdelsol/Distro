export const postServer = (formData) =>( 
  $.ajax({
    url: `/api/servers`,
    method: "POST",
    data: formData
  })
)

export const getServer = (serverId) => (
  $.ajax({
    url: `api/servers/${serverId}`,
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
    data: editForm,
  })
)

export const deleteServer = (serverId) => (
  $.ajax({
    url: `api/servers/${serverId}`,
    method: "DELETE"
  })
)