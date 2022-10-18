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