import { Typography } from "@mui/material";
import { GlobalContext } from "../lib/GlobalContext";
import ThreadSummary from "../widgets/messaging/ThreadPreview";

function Messages() {
    return (
        <>
            <GlobalContext.Consumer>
                {({ store }) => {

                    console.log("store should be complete");
                    console.log(store);

                    const profiles = store.profiles;

                    console.log("but profiles isn't?");
                    console.log(profiles);

                    console.log("assinging messages");
                    const messages = Array.from(store.messages.values());
                    
                    console.log("destroys profiles");
                    console.log(profiles);

                    return (<>
                        <Typography variant="h3">Conversations</Typography>

                        <ThreadSummary />
                        <ThreadSummary />
                        <ThreadSummary />
                        <ThreadSummary />


                        <ul>

                            { messages.map((msg, index) => {

                                    console.log("message sender:");
                                    console.log(msg.sender); 

                                    return <li>{msg.message}, from {profiles.get(msg.sender)?.firstName}</li>;
                                }) }
                        </ul>
                    </>);
                }}
            </GlobalContext.Consumer>
        </>
    );
}

export default Messages; 