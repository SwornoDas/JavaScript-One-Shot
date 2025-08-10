const course = {
    coursename: "JavaScript Basics",
    price: "999",
    courseInstructor: "John Doe"
}

// course.courseInstructor
// const {courseInstructor} = course;
const {courseInstructor: ins} = course;


console.log(ins); // John Doe



const navbar = ({Company}) => {
    console.log(Company);
}
navbar({Company: "Tech Corp"})


//***************** APIs *****************/

// {
//     "name": "Sworno Das",
//     "courseName": "JavaScript Basics",
//     "price": "free"
// }

// Demo APIs api.github.com/users/SwornoDas


[
    {
        "name": "Sworno Das",
        "courseName": "JavaScript Basics",
        "price": "free"
    },
    {},
    {}
]