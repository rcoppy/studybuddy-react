import { v4 as uuidv4 } from 'uuid';

// invites are for accepting an offer; to ask for an invite, use a 'message'. 
export default class MessageModel {
    constructor({sender="a uuid", recipient="a uuid", message="Hello!"} = {}) {
        this.sender = sender; 
        this.recipient = recipient;  
        this.message = message; 
        this.uuid = uuidv4();
        this.timestamp = Date.now(); 
    }
}

export const DefaultMessages = [
    new MessageModel({ sender: "Dave", recipient: "Alice", message: "Hello, Alice!" }),
    new MessageModel({ sender: "Akash", recipient: "Dave", message: "Hi, Dave!" }),
]