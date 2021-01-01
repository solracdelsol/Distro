export const createMessage = (formData) =>( //take channelId straight from formData instead of adding a serverId as a second argument 
  $.ajax({
    url: `/api/channels/${formData.message.channel_id}/messages`,
    method: "POST",
    data: formData
  })
)

export const getMessage = (messageObj) => (
  $.ajax({
    url: `api/channels/${messageObj.channelId}/messages/${messageObj.id}`,
    method: "GET",
  })
);

export const getMessages = (messageObj) => ( //gets all messages of a given channel
  $.ajax({
    url: `api/channels/${messageObj.channelId}/messages`,
    method: "GET",
  })
);