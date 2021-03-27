//You can either code these with implicit() or explicit{return()}, just dont forget which format you're using!
export const searchServers = (serverTitleQuery) => (
  $.ajax({
    method: "GET",
    url: `/api/search?[:server][:server_title]=${serverTitleQuery}`
  })
)

export const searchUsers = (userNameQuery) => {
  return $.ajax({
    method: "GET",
    url: `/api/search/users?[:user][:username]=${userNameQuery}`
  })
}