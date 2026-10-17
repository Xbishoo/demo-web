var user = null;

export function loadUser() {
  try {
    var raw = sessionStorage.getItem('dd-user');
    if (raw) user = JSON.parse(raw);
  } catch (e) {
    user = null;
  }
  return user;
}

export function getUser() {
  return user;
}

export function signedIn() {
  return user != null;
}

export function signIn(name) {
  user = { username: name.trim(), since: Date.now() };
  sessionStorage.setItem('dd-user', JSON.stringify(user));
  return user;
}

export function signOut() {
  user = null;
  sessionStorage.removeItem('dd-user');
}

export function check(username, password) {
  var errs = {};
  if (!username.trim()) {
    errs.username = 'errRequired';
  } else if (username.trim().length < 3) {
    errs.username = 'errUsername';
  }

  if (!password) {
    errs.password = 'errRequired';
  } else if (password.length < 4) {
    errs.password = 'errPassword';
  }

  return errs;
}
