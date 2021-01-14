const arr = [
  { name: "Tom", birthDate: "04/18/2017" },
  { name: "Jake", birthDate: "02/12/2017" },
  { name: "Ann", birthDate: "02/03/2017" },
  { name: "Ashley", birthDate: "05/03/2000" },
];

const monthsArr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// input: array of obj
// output: obj of arrays
const studentsBirthDays = (students) => {
  let result = {};

  students.forEach((el, i) => {
    const monthAfter = parseInt(students[i].birthDate.substring(0, 2));
    const month = monthsArr[monthAfter - 1];

    if (!result[month]) {
      result[month] = [students[i].name];
    } else {
      result[month].push(students[i].name);
    }
  });

  return result;
};

console.log(studentsBirthDays(arr));

// при создании дат,не мутировать её, а создавать на её основе новую
