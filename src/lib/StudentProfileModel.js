export default class StudentProfileModel {
    constructor({firstName="Dave", lastName="Danielson", classYear=2023, program="SEAS"} = {}) {
        this.amLookingForGroups = true;
        this.firstName = firstName;
        this.lastName = lastName;
        this.classYear = classYear;
        this.program = program;

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