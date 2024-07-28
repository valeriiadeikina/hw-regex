class Validator {
  validateUsername(userName) {
    const validChars = /^[a-zA-Z0-9-_]+$/;

    if (!validChars.test(userName)) {
      return false;
    }

    const moreThanTreeDigit = /\d{4,}/;
    if (moreThanTreeDigit.test(userName)) {
      return false;
    }

    const invalidStartEnd = /^[0-9-_]|[0-9-_]$/;
    if (invalidStartEnd.test(userName)) {
      return false;
    }

    return true;
  }
}

export default Validator
