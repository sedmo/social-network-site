const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  const requiredFields = [
    "title",
    "company",
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
