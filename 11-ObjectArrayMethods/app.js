const users = [
  {
    name: "Alex",
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  {
    name: "Asab",
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
      "C#",
      "Java",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  {
    name: "Daniel",
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Brook",
    email: "brook@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "Lond",
    email: "lond@lond.com",
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "John",
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Raul",
    email: "raul@raul.com",
    skills: ["C#", "Java", "SQL"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  {
    name: "Thomas",
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "Jack",
    email: "jack@jack.com",
    skills: [],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "Paul",
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  ,
  {
    name: "Logan",
    email: "logan@logan.com",
    skills: ["C#", "Java", "SQL"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
];

function Sort(users) {
  users.forEach((user) => {
    user.skills ? (skills = user.skills) : "";
    skills.forEach((skill) => {
      if (skill.includes("HTML", "CSS", "JavaScript")) {
        console.log("FrontEnd Developer:" + user.name);
      }
    });
  });
}
Sort(users);
