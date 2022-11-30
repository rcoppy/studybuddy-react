import { Typography } from "@mui/material";
import { GlobalContext } from "../lib/GlobalContext";
import ThreadSummary from "../widgets/messaging/ThreadPreview";
import hash from "../utils/cyrb53";

function getHashFromUserIds(id1, id2) {
    const h1 = hash(id1);
    const h2 = hash(id2);
    const xor = h1 ^ h2; // equivalent to h2 ^ h1
    return hash(xor.toString());
}

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

function MessageThreads({ myProfile, messages, profiles }) {

    const threadsMap = getMessageThreadsMap(myProfile, messages);

    return <>
        {Array.from(threadsMap.entries()).map((index, msg) => {
            const displayedUser = msg.recipient === myProfile.uuid 
                ? profiles.get(msg.sender) : profiles.get(msg.recipient); 

            const fullName = `${displayedUser.firstName} ${displayedUser.lastName}`; 
            const senderName = profiles.get(msg.sender).firstName; 

            return <ThreadSummary index={index} name={fullName} lastSender={senderName} message={msg} />
            
            // <li>{msg.message}, from {profiles.get(msg.sender)?.firstName}; to {profiles.get(msg.recipient)?.firstName}</li>;
        })}
    </>;
}

function Messages() {

    return (
        <>
            <GlobalContext.Consumer>
                {({ myProfile, store }) => {

                    return (<>
                        <Typography variant="h3">Conversations</Typography>

                        <MessageThreads myProfile={myProfile} messages={store.messages} profiles={store.profiles} />


                        {/* <ul>

                            {messages.map((msg, index) => {

                                console.log("message sender:");
                                console.log(msg.sender);

                                return <li>{msg.message}, from {profiles.get(msg.sender)?.firstName}; to {profiles.get(msg.recipient)?.firstName}</li>;
                            })}
                        </ul> */}
                    </>);
                }}
            </GlobalContext.Consumer>
        </>
    );
}

export default Messages; 