import { v4 as uuidv4 } from 'uuid';

// invites are for accepting an offer; to ask for an invite, use a 'message'. 
export default class InviteModel {
    constructor({status=InviteStatus.PENDING, group="UI Design study buddies", sender="Dave", recipient="Alice"} = {}) {
        this.status = status;
        this.group = group;
        this.sender = sender; 
        this.recipient = recipient;  
        this.uuid = uuidv4();
    }
}

export const InviteStatus = Object.freeze({
    PENDING: 'PENDING', 
    ACCEPTED: 'ACCEPTED', 
    DENIED: 'DENIED',
}); 

export const DefaultInvites = [
    new InviteModel({ status: InviteStatus.PENDING, group: "who knows", sender: "Dave", recipient: "Alice" }),
    new InviteModel({ status: InviteStatus.PENDING, group: "another group", sender: "Dave", recipient: "Akash" }),
]