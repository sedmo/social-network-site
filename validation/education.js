const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  const requiredFields = [
    "school",
    "degree",
    "fieldofstudy", 
    "from",
  ];

  requiredFields.forEach(field => {
      data[field] = !isEmpty(data[field]) ? data[field]: "";
  })

  requiredFields.forEach(field => {
    if(Validator.isEmpty(data[field])){
        errors[field] = `${field} field is required`;
    }
})

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
