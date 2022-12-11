const Validation = (values) => {
  let errors = {};
  //check age is between in 18 and 65
  if (values.age < 18 || values.age > 65) {
    errors.age = "YOU ARE NOT ELIGIBLE";
  }
  //check invalid input or not
  if (values.timing === "--SELECT TIMING--") {
    errors.timing = "PLEASE SELECT TIMING";
  } else if (!values.timing) {
    errors.timing = "PLEASE SELECT TIMING";
  }
  if (values.month === "--SELECT MONTH--") {
    errors.month = "PLEASE SELECT MONTH";
  } else if (!values.month) {
    errors.month = "PLEASE SELECT MONTH";
  }

  if (!values.email) {
    errors.email = "EMAIL IS REQUIRED";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "EMAIL IS INVALID";
  }
  if (!values.name) {
    errors.name = "Name IS REQUIRED";
  }
  if (!values.address) {
    errors.address = "ADDRESS IS REQUIRED";
  }
  return errors;
};
export default Validation;
