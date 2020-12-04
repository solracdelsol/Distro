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

export const getServers = () => (
  $.ajax({
    url: "api/servers",
    method: "GET",
  })
);

export const editServer = (editForm) => (
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