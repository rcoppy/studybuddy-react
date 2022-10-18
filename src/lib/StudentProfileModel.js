export default class StudentProfileModel {
    constructor() {
        this.amLookingForGroups = true;
        this.firstName = "Dave";
        this.lastName = "Danielson";
        this.classYear = 2023;
        this.program = "SEAS";

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