import { v4 as uuidv4 } from 'uuid';

export default class ClassModel {
    constructor({title="UI Design", code="COMS 4170"} = {}) {
        this.title = title;
        this.code = code;  
        this.uuid = uuidv4(); 
    }
}

export const DefaultClasses = [
    new ClassModel({ title: "Intro Python", code: "COMS 1006" }),
    new ClassModel({ title: "Physics II", code: "PHYS 1402" }),
    new ClassModel({ title: "CS Theory", code: "COMS 3261" }),
    new ClassModel({ title: "Security I", code: "COMS 4181" }),
]