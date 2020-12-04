export const getChannels = (serverId) => (
  $.ajax({
    url: `api/servers/${serverId}/channels`,
    method: "GET",
  })
);

// export const destroyChannels = (channelId) => (
//   $.ajax({
//     url:
//   })
// )