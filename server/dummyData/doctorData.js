const {faker} = require('@faker-js/faker');
const { categoryList } = require('./categoryData.js');

const generateDummyDoctors = (categoryName, count) => {
    const dummyDoctors = [];
    for (let i = 1; i <= count; i++) {
      const doctor = {
        id: dummyDoctors.length + 1,
        name: `Dr. ${faker.person.firstName()} ${faker.person.lastName()}`,
        doctorType: categoryName,
        experience: faker.number.int({ min: 1, max: 20 }),
        location: faker.location.city(),
        clinicName: `Clinic ${i}`,
        consultationFees: faker.number.int({ min: 50, max: 150 }),
        rating: faker.number.int({ min: 60, max: 99 }),
        reviews: faker.number.int({ min: 10, max: 50 }),
        available: faker.datatype.boolean(),
        profilePicture: faker.image.avatar(),
      };
      dummyDoctors.push(doctor);
    }
    return dummyDoctors;
  };
  

  const doctorList = categoryList.reduce((acc, categoryItem) => {
    const dummyDoctors = generateDummyDoctors(categoryItem.category, 5);
    return acc.concat(dummyDoctors);
  }, []);



  module.exports = { doctorList }