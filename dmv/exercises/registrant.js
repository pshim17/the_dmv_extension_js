
function createRegistrant(name, age, permit = false) {
  return {
    name: name,
    age: age,
    permit: permit,
    licenseData: {written: false, license: false, renewed: false}
  }
}

function earnPermit(registrant){
  if (registrant.age >= 16) {
    return 'You have successfully earned a permit!'
  } 
}

module.exports = {
  createRegistrant,
  earnPermit
  // takeLicenseExam
}