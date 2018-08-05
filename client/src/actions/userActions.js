export function createUser() {
  return (dispatch) => {
      dispatch({ type: 'SIGNING_UP' })
      return fetch('/api/users', {
        method: 'POST',
        body: new FormData(document.getElementById("user-form")),
        credentials: 'same-origin'
      })
      .then(resp => signupOptions(resp, dispatch))
  }
}

function signupOptions(resp, dispatch) {
  if (resp.status === 201) {
    const user = resp.json()
    .then(user => dispatch({
      type: 'LOGIN_USER',
      payload: user
    }))
  } else {
    console.log('error')
  }
}

export function loginUser() {
  return (dispatch) => {
    dispatch({ type: 'LOGGING_IN' })
    return fetch('/api/sessions', {
      method: 'POST',
      body: new FormData(document.getElementById("login-form")),
      credentials: 'same-origin'
    })
    .then(resp => signupOptions(resp, dispatch))
  }
}
