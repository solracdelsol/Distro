export const getServers = () => (
  $.ajax({
    url: "api/servers",
    method: "GET",
  })
);

// will also need methods for editing servers and 

// export const editServer = (data) => ( // DOUBLE CHECK WITH COACH
//   $.ajax({
//     url: `api/servers/${id}`,
//     method: "PATCH",
//     data: data
//   })
// )