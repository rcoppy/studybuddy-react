import { v4 as uuidv4 } from 'uuid';

export default class GroupDataModel {
    constructor({title="UI Design study buddies", subject="COMS 4170", section=1, adminId=1, students=[]} = {}) {
        this.isLookingForMembers = true;
        this.title = title;
        this.subject = subject;
        this.section = section;
        this.adminId = adminId;
        this.students = students; 
        this.uuid = uuidv4(); 
    }
}

export const DefaultGroups = [
    new GroupDataModel({ title: "Python funtimes", subject: "COMS 1006", students: [1, 2, 3, 4, 5] }),
    new GroupDataModel({ title: "The Backup", subject: "COMS 4181", students: [1, 4, 5] }),
    new GroupDataModel({ title: "Physics buddies", subject: "Physics 1402", students: [1, 5] }),
    new GroupDataModel({ title: "Design savants", subject: "COMS 4170", students: [1] }),
    new GroupDataModel({ title: "Theorists", subject: "COMS 3261", students: [4, 5] }),
    new GroupDataModel({ title: "Databasers", subject: "COMS 4111", students: [1, 2, 3, 4, 5] }),
]

export const UserGroups = [
    new GroupDataModel({ title: "Physics buddies", subject: "Physics 1402", students: [1, 5] }),
    new GroupDataModel({ title: "Design savants", subject: "COMS 4170", students: [1] }),
    new GroupDataModel({ title: "Databasers", subject: "COMS 4111", students: [1, 2, 3, 4, 5] }),
]