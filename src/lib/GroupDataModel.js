export default class GroupDataModel {
    constructor({title="UI Design study buddies", subject="COMS 4170", section=1, adminId=1, students=[]} = {}) {
        this.isLookingForMembers = true;
        this.title = title;
        this.subject = subject;
        this.section = section;
        this.adminId = adminId;
        this.students = students; 
    }
}

export const DefaultGroups = [
    new GroupDataModel({ title: "Python funtimes", subject: "Intro python", students: [1, 2, 3, 4, 5] }),
    new GroupDataModel({ title: "Mathnerds", subject: "Calculus I", students: [1, 4, 5] }),
    new GroupDataModel({ title: "Physics buddies", subject: "Physics 1402", students: [1, 5] }),
    new GroupDataModel({ title: "Design savants", subject: "UI Design", students: [1] }),
    new GroupDataModel({ title: "Bookworms", subject: "Literature Humanities", students: [4, 5] }),
    new GroupDataModel({ title: "Theorists", subject: "CS Theory", students: [1, 2, 3, 4, 5] }),
]