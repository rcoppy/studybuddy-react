import { useParams } from 'react-router-dom';

function MessageThread() {
    let { id } = useParams(); 
    return (
        <>
            <h1>Messages for thread {id}</h1>
        </>
    );
}

export default MessageThread; 