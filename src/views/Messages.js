import { Typography } from "@mui/material";
import { GlobalContext } from "../lib/GlobalContext";
import ThreadSummary from "../widgets/messaging/ThreadPreview";
import { getHashFromUserIds } from "../utils/hashing";

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
        {Array.from(threadsMap.entries()).map(([key, msg]) => {
            const displayedUser = msg.recipient === myProfile.uuid 
                ? profiles.get(msg.sender) : profiles.get(msg.recipient); 

            const fullName = `${displayedUser.firstName} ${displayedUser.lastName}`; 
            const senderName = msg.sender === myProfile.uuid 
                ? "You" : profiles.get(msg.sender).firstName; 

            const isUnopened = !msg.wasOpened; 

            return <ThreadSummary index={key} name={fullName} lastSender={senderName} message={msg} isUnopened={isUnopened} openMessage={openMessage} threadId={key} />
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
                        <MessageThreads myProfile={myProfile} messages={store.messages} profiles={store.profiles} openMessage={msg => store.setMessagesAsOpened([msg])} />
                    </>);
                }}
            </GlobalContext.Consumer>
        </>
    );
}

export default Messages; 