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

        this.classes = [
            "COMS 4111",
            "COMS 4170",
            "COMS 3261",
        ];

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