export const formValidation = (name, email) => {
  const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name);
  const isEmailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);

  if (!isNameValid) return "Please enter a valid name";
  if (!isEmailValid) return "Please enter a valid email";

  return null;
};
