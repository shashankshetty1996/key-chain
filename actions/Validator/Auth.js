const validateUser = response => {
  const { username, password } = response;
  if (username !== 'shashank') {
    return { isValid: false, message: 'Invalid username' };
  }
  if (password !== '1234') {
    return { isValid: false, message: 'Invalid password' };
  }
  return { isValid: true, message: 'Login in successfully' };
};

const isTerminated = response => {
  if (Object.keys(response).length === 2) {
    return false;
  }
  return true;
};

module.exports = {
  validateUser,
  isTerminated
};
