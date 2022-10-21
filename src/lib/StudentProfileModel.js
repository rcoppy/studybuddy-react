import { v4 as uuidv4 } from 'uuid';

export default class StudentProfileModel {
    constructor({firstName="Dave", lastName="Danielson", classYear=2023, program="SEAS"} = {}) {
        this.amLookingForGroups = true;
        this.firstName = firstName;
        this.lastName = lastName;
        this.classYear = classYear;
        this.program = program;
        this.uuid = uuidv4();

        this.contactInfo = {
            email: "dave@gmail.com",
            phone: "(203) 755-4321",
        };

        this.classes = new Map();

        this.interests = [
            "Biking",
            "Pokemon",
            "Baking",
        ]
    }
}

export function truncateClassYear(year) {
    const str = year.toString();
    return "'" + str.substring(str.length - 2, str.length);
}

export const DefaultStudents = [
    new StudentProfileModel({ firstName: "Jane" }),
    new StudentProfileModel({ firstName: "Akash" }),
    new StudentProfileModel({ firstName: "Henderson" }),
    new StudentProfileModel({ firstName: "Jacob" }),
    new StudentProfileModel({ firstName: "Jeffrey" }),
    new StudentProfileModel({ firstName: "Palmer" }),
    new StudentProfileModel({ firstName: "Genevieve" }),
]