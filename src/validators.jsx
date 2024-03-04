export const validateFullName = (fullName) => {
  if (fullName.length < 1) {
    return 'Full name is required';
  }
  if (!/^[a-zA-Z\s]*$/.test(fullName)) {
    return 'Full name must contain only letters and spaces';
  }
  return undefined;
}

export const validateContactNumber = (contactNumber) => {
  if (contactNumber.length < 1) {
    return 'Contact number is required';
  }
  if (!/^\d{10}$/.test(contactNumber)) {
    return 'Contact number must be in the format 1234567890'
  }
  return undefined;
}

export const validateDay = (day) => {
  if (day.length < 1) {
    return 'Day is required';
  }
  if (!/^\d{1,2}$/.test(day)) {
    return 'Day must be a number';
  }
  if (parseInt(day) < 1 || parseInt(day) > 31) {
    return 'Day must be between 1 and 31';
  }
  return undefined;
}

export const validateMonth = (month) => {
  if (month.length < 1) {
    return 'Month is required';
  }
  if (!/^\d{1,2}$/.test(month)) {
    return 'Month must be a number';
  }
  if (parseInt(month) < 1 || parseInt(month) > 12) {
    return 'Month must be between 1 and 12';
  }
  return undefined;
}

export const validateYear = (year) => {
  if (year.length < 1) {
    return 'Year is required';
  }
  if (!/^\d{4}$/.test(year)) {
    return 'Year must be a number';
  }
  const lastYear = new Date().getFullYear() - 1;
  if (parseInt(year) < lastYear - 63 || parseInt(year) > lastYear) {
    return `Year must be between ${lastYear - 63} and ${lastYear}`;
  }
  return undefined;
}

export const validateEmail = (email) => {
  if (email.length < 1) {
    return 'Email is required';
  }
  if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(email)) {
    return 'Email is invalid';
  }
  return undefined;
}

export const validatePassword = (password) => {
  if (password.length < 1) {
    return 'Password is required';
  }
  if (password.length < 8) {
    return 'Password must be at least 8 characters';
  }
  if (!/^[a-zA-Z0-9]*$/.test(password)) {
    return 'Password must contain only letters and numbers'
  }
  return undefined;
}

export const validateConfirmPassword = (password, confirmPassword) => {
  if (confirmPassword.length < 1) {
    return 'Confirm password is required';
  }
  if (confirmPassword !== password) {
    return 'Passwords do not match';
  }
  return undefined;
}
