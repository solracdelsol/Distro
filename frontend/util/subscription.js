//Create Subscription === Join Server, subscribeObj ***format is {subscription: {server_id: blah, user_id: blah} }***
export const createSubscription = (subscribeObj) => (
  $.ajax({
    method: "POST",
    url: "/api/subscriptions",
    data: subscribeObj
  })
)

export const getServerSubs = (subscribeObj) => (
  $.ajax({
    method: "GET",
    url: `api/servers/${subscribeObj.serverId}/subscriptions`
  })
)


// query for servers in db by title of server
export const queryServers = (serverTitleQuery) => (
  $.ajax({
    method: "GET",
    url: `/api/subscriptions?[:server][:server_title]=${serverTitleQuery}`
  })
)