// query for servers in db by title of server
export const searchServers = (serverTitleQuery) => {
  $.ajax({
    method: "GET",
    url: `/api/search?[:server][:server_title]=${serverTitleQuery}`
  })
}