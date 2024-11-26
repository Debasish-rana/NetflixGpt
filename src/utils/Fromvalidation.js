export const checkValidation = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(
    //     "example@gmail.com"
    email
  );

  const isPasswordValid = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(password);

  const isNameValid = /^[A-Za-z]+([ -][A-Za-z]+)*$/.test(name);

  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";

  if (!isNameValid) return "Name is not valid";

  return null; // Return null if all validations pass
};
