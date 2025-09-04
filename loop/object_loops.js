const myObject = {
  js: "JavaScript",
  cpp: "c++",
  rb: "Ruby",
  py: "Python",
  swift: "Swift",
};
for (const key in myObject) {
  console.log(`${key}, short cut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "cpp", "swift"];
for (const key in programming) {
  console.log(programming[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set('FR', "France");
map.set("US", "United States");

for (const key in map){
    console.log(key);
}