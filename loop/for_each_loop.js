const coding = ["JS", "C++", "Ruby", "Python", "Swift"];
coding.forEach(function (techitem) {
  console.log(techitem);
});
coding.forEach((item) => {
  console.log(item);
});

console.log();

function printMe(item) {
  console.log(item);
}
coding.forEach(printMe);
console.log();

coding.forEach((item, index, arr) => {
  console.log(index, item, arr);
});

console.log();
const myCoding = [
  {
    LangName: "JavaScript",
    LangFileName: "JS"
  },
  {
    LangName: "C++",
    LangFileName: "C++"
  },
  {
    LangName: "Ruby",
    LangFileName: "Ruby"
  },
  {
    LangName: "Python",
    LangFileName: "Python"
  },
  {
    LangName: "Swift",
    LangFileName: "Swift"
  },
];


myCoding.forEach((item) => {
  console.log(item.LangName, item.LangFileName);
});

