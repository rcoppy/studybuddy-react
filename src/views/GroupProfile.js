import { useParams } from 'react-router-dom';

function GroupProfile() {
    
    let { id } = useParams();
    
    return (
        <>
            <h1>Group {id}</h1>
        </>
    );
}

export default GroupProfile; 