export const getServers = (server) => (
  $.ajax({
    url: "api/servers",
    method: "GET",
  })
);