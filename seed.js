const { db } = require("./server/db");
const { green, red } = require("chalk");
const {Campuses, Students}= require("./server/db");
// require your models here

// DUMMY CAMPUS DATA

const campuses = [
  {
    name: "Hogwarts School of Witchcraft and Wizardry",
    imageUrl: "https://i.ibb.co/30JYJkB/hogwarts.webp",
    address: "Hogwarts Castle, Highlands, Scotland, Great Britain",
    description:
      "Hogwarts School of Witchcraft and Wizardry, often shortened to Hogwarts, is the British wizarding school located in the Scottish Highlands. It accepts magical students from Great Britain and Ireland for enrollment. It is a state-owned school, funded by the Ministry of Magic.",
  },
  {
    name: "Beauxbatons Academy of Magic",
    imageUrl: "https://i.ibb.co/Xts8Jnw/beauxbatons.webp",
    address: "French Pyrenees, France",
    description:
      "Beauxbatons Academy of Magic (French: Académie de Magie Beauxbâtons) is the French wizarding school located in the Pyrenees mountains of southern France. It is one of the three largest wizarding schools in Europe (the other two being Hogwarts School of Witchcraft and Wizardry and the Durmstrang Institute).",
  },
  {
    name: "Castelobruxo",
    imageUrl: "https://i.ibb.co/nrMpMZt/castelobruxo.webp",
    address: "Amazon Rainforest, Brazil, South America",
    description:
      "Castelobruxo is the Brazilian wizarding school. Located amid the Amazon rainforest in northern Brazil, it accepts students from all over South America. It has produced a number of famous ex-students, including one of the world’s most famous potioneers, Libatius Borage.",
  },
  {
    name: "Durmstrang Institute",
    imageUrl: "https://i.ibb.co/K66wVWf/durmstrang.webp",
    address: "The far north of Europe",
    description:
      "Durmstrang Institute (Cyrillic: Дурмстранг) is one of the three largest wizarding schools in Europe (the other two being Hogwarts School of Witchcraft and Wizardry and Beauxbatons Academy of Magic). Located in the far north of the continent, the school is willing to accept international students from as far afield as Bulgaria.",
  },
  {
    name: "Ilvermorny School of Witchcraft and Wizardry",
    imageUrl: "https://i.ibb.co/7pdhd9S/ilver.webp",
    address:
      "Mount Greylock, Adams, Massachusetts, United States of America, North America[1]",
    description:
      "Ilvermorny School of Witchcraft and Wizardry is the American wizarding school, located on Mount Greylock in Massachusetts. It accepts students from all over North America. Students of this school, as at Hogwarts in Scotland, are sorted into four houses.",
  },
  {
    name: "Mahoutokoro School of Magic",
    imageUrl: "https://i.ibb.co/wQ3PyHQ/Mahoutokoro.webp",
    address: "Minami Iwo Jima, Japan",
    description:
      "Mahoutokoro (Japanese: 魔法処マホウトコロ, Mahōtokoro) is the Japanese wizarding school, located on the topmost point of the volcanic island of Minami Iwo Jima. It has the smallest student body of the eleven major wizarding schools.",
  },
  {
    name: "Uagadou School of Magic",
    imageUrl: "https://i.ibb.co/xM2vCw4/uao.jpg",
    address: "Mountains of the Moon, Uganda, East Africa",
    description:
      "Uagadou is the Ugandan wizarding school, located in the Mountains of the Moon in western Uganda. It is the largest of the eleven wizarding schools, accepting students from all over Africa.",
  },
  {
    name: "Koldovstoretz",
    imageUrl: "https://i.ibb.co/mX0VQ7v/Koldovstoretz.webp",
    address: "Russia",
    description:
      "Koldovstoretz (Russian: колдовсторец) is the Russian wizarding school. It is one of the eleven schools registered with the International Confederation of Wizards. Students from Koldovstoretz play a version of Quidditch where they fly on entire, uprooted trees instead of broomsticks.",
  },
];

// DUMMY STUDENT DATA

const students = [
  {
    firstName: "Harry",
    lastName: "Potter",
    email: "hpotter@hogwarts.co.uk",
    imageUrl: "https://i.ibb.co/tPqV51G/harry.webp",
    magicalAbilityScore:2.4,
    gpa: 3.5,
    campusId: 1,
  },
  {
    firstName: "Ronald",
    lastName: "Weasley",
    email: "rweasley@hogwarts.co.uk",
    imageUrl: "https://i.ibb.co/QmnT5fv/ron.jpg",
    magicalAbilityScore: 3.1,
    gpa: 2.7,
    campusId: 1,
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    email: "hgranger@hogwarts.co.uk",
    imageUrl: "https://i.ibb.co/QdVQvYF/hermione-jpg.webp",
    magicalAbilityScore:3.5,
    gpa: 4.3,
    campusId: 1,
  },
  {
    firstName: "Dean",
    lastName: "Thomas",
    email: "dthomas@hogwarts.co.uk",
    imageUrl: "https://i.ibb.co/Z8wnwds/dean.jpg",
    magicalAbilityScore:2.2,
    gpa: 3.8,
    campusId: 1,
  },
  {
    firstName: "Padma",
    lastName: "Patil",
    email: "papatil@hogwarts.co.uk",
    imageUrl: "https://i.ibb.co/5BvhztF/padma.jpg",
    magicalAbilityScore: 1.4,
    gpa: 3.0,
    campusId: 1,
  },
  {
    firstName: "Ginny",
    lastName: "Weasley",
    email: "gweasley@hogwarts.co.uk",
    imageUrl: "https://i.ibb.co/yf6nwqj/ginny.jpg",
    magicalAbilityScore: 3.2,
    gpa: 3.9,
    campusId: 1,
  },
  {
    firstName: "Luna",
    lastName: "Lovegood",
    email: "llovegood@hogwarts.co.uk",
    imageUrl: "https://i.ibb.co/mTsjh1W/Luna.webp",
    magicalAbilityScore: 2.5,
    gpa: 3.9,
    campusId: 1,
  },
  {
    firstName: "Viktor",
    lastName: "Krum",
    email: "vkrum@durmstrang.eu",
    imageUrl: "https://i.ibb.co/c2WNq2D/krum.webp",
    magicalAbilityScore:3.8,
    gpa: 2.4,
    campusId: 3,
  },
  {
    firstName: "Fluer",
    lastName: "Delacour",
    email: "fleur@beauxbatons.fr",
    imageUrl: "https://i.ibb.co/c2WNq2D/krum.webp",
    magicalAbilityScore:1.5,
    gpa: 3.4,
    campusId: 2,
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      campuses.map((campus) => {
        return Campuses.create(campus);
      })
    );

    await Promise.all(
      students.map((student) => {
        return Students.create(student);
      })
    );

    console.log(green("WINGARDIUM LEVIOSA! Seeding successful!"));
    db.close();
  } catch (err) {
    console.error(red("Bloody Hell! Something went wrong!"));
    console.error(err);
    db.close();
  }
};
const campuslist= () =>{
  return [...campuses];
};
const studentlist= () =>{
  return [...student];
};

seed();
