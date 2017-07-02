const { fetch, Headers, FormData } = window

function headers (accessToken) {
  const headers = new Headers()
  headers.append('Authorization', `Bearer ${accessToken}`)
  return headers
}

function request (url, option) {
  return new Promise((resolve, reject) => {
    option.mode = 'cors'
    fetch(url, option)
    .then(response => response.json())
    .then(object => resolve(object))
    .catch(error => reject(error))
  })
}

export function instance ({ hostname }) {
  return new Promise((resolve, reject) => {
    request(`https://${hostname}/api/v1/instance`, {
      method: 'GET'
    })
    .then(object => resolve(object))
    .catch(error => reject(error))
  })
}

export function apps ({ hostname }) {
  return new Promise((resolve, reject) => {
    const body = new FormData()
    body.append('client_name', document.title)
    body.append('redirect_uris', 'urn:ietf:wg:oauth:2.0:oob')
    body.append('scopes', 'read write follow')

    request(`https://${hostname}/api/v1/apps`, {
      method: 'POST',
      body: body
    })
    .then(object => resolve(object))
    .catch(error => reject(error))
  })
}

export function accountsVerifyCredentials ({ hostname }, oauthToken) {
  return new Promise((resolve, reject) => {
    request(`https://${hostname}/api/v1/accounts/verify_credentials`, {
      method: 'GET',
      headers: headers(oauthToken.access_token)
    })
    .then(object => resolve(object))
    .catch(error => reject(error))
  })
}

// no api
export function oauthToken ({ hostname, user, password }, apps) {
  return new Promise((resolve, reject) => {
    const body = new FormData()
    body.append('client_id', apps.client_id)
    body.append('client_secret', apps.client_secret)
    body.append('grant_type', 'password')
    body.append('username', user)
    body.append('password', password)
    body.append('scope', 'read write follow')

    request(`https://${hostname}/oauth/token`, {
      method: 'POST',
      body: body
    })
    .then(object => resolve(object))
    .catch(error => reject(error))
  })
}
