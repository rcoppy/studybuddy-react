import { Typography } from "@mui/material";
import { GlobalContext } from "../lib/GlobalContext";
import ThreadSummary from "../widgets/messaging/ThreadPreview";
import { getHashFromUserIds } from "../utils/hashing";
import InviteCard from "../widgets/InviteCard";

function getMessageThreadsMap(myProfile, messages) {

    const myId = myProfile.uuid;

    const filteredMessages = new Map(Array.from(messages).filter(
        ([id, msg]) => msg.sender === myId || msg.recipient === myId
    ));

    // need to filter by timestamp, finding most recent message
    // map: message thread ids => most recent message from that thread

    const messageThreadsMap = new Map();

    for (const msg of filteredMessages.values()) {
        const threadId = getHashFromUserIds(msg.sender, msg.recipient);

        if (messageThreadsMap.has(threadId) &&
            messageThreadsMap.get(threadId).timestamp > msg.timestamp) {
            continue;
        }

        messageThreadsMap.set(threadId, msg);
    }

    return messageThreadsMap;
}

function MessageThreads({ myProfile, messages, profiles, openMessage = () => {} }) {

    const threadsMap = getMessageThreadsMap(myProfile, messages);

    return <>
        {threadsMap.size < 1 && <Typography variant="p" fontSize='1.2rem'><em>Your conversations and group invites will appear here.</em></Typography>}
        {threadsMap.size > 0 && Array.from(threadsMap.entries()).map(([key, msg]) => {
            const displayedUser = msg.recipient === myProfile.uuid 
                ? profiles.get(msg.sender) : profiles.get(msg.recipient); 

            const fullName = `${displayedUser.firstName} ${displayedUser.lastName}`; 
            const senderName = msg.sender === myProfile.uuid 
                ? "You" : profiles.get(msg.sender).firstName; 

            const isUnopened = !msg.wasOpened; 

            return <ThreadSummary avatarImagePath={displayedUser.avatarImagePath} index={key} name={fullName} lastSender={senderName} message={msg} isUnopened={isUnopened} openMessage={openMessage} threadId={key} />
        })}
    </>;
}

function Invites({ myProfile, invites, profiles, groups, removeInvite, addGroup }) {
    const myId = myProfile.uuid;

    const receivedInvites = new Map(Array.from(invites).filter(
        ([id, invite]) => invite.recipient === myId && invite.status === 'PENDING'
    ));
    
    return <>
        {receivedInvites.size > 0 && <Typography variant="h3">Pending invites</Typography>}
        {Array.from(receivedInvites.entries()).map(([key, invite]) => {
            const sender = profiles.get(invite.sender);
            const group = groups.get(invite.group); 

            const senderName = sender.firstName;
            const groupName = group.title; 
            const avatar = sender.avatarImagePath; 
            const members = group.students.length; 
            
            const accept = () => {
                addGroup(group); 
                removeInvite(invite); 
            };

            const reject = () => removeInvite(invite); 

            return <InviteCard handleAccept={accept} handleReject={reject} index={key} groupId={group.uuid} avatarImagePath={avatar} memberCount={members} senderName={senderName} groupName={groupName} />
}       )}
    </>;
}

function Messages() {

    return (
        <>
            <GlobalContext.Consumer>
                {({ myProfile, store }) => {

                    return (<>
                        <Typography variant="h3">Conversations</Typography>
                        <MessageThreads myProfile={myProfile} messages={store.messages} profiles={store.profiles} openMessage={msg => store.setMessagesAsOpened([msg])} />
                        
                        <Invites myProfile={myProfile} invites={store.invites} groups={store.groups} profiles={store.profiles} addGroup={group => store.addToMyGroups([group])} removeInvite={invite => store.removeInvites([invite])} />
                    </>);
                }}
            </GlobalContext.Consumer>
        </>
    );
}

export default Messages; 