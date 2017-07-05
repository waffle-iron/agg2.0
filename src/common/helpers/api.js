export const apiUrl = `http://${process.env.BACKEND_ADRESS || 'localhost:3000'}`

export const resolveStatic = (path) => {
  return 'http://185.189.13.148:4000' + path
}

export const credOptions = 'include'

export function resolveApi (path, query) {
  const haveQuery = (query && query !== {})
  if (haveQuery) {
    var queryArr = []
    for (let key in query) {
      queryArr.push(key + '=' + query[key])
    }
  }
  return apiUrl + `/${path.join('/')}${haveQuery ? ('?' + queryArr.join('&')) : ''}`
}
