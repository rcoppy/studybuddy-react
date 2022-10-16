import { useParams } from 'react-router-dom';

function GroupAdminView() {
    let { id } = useParams(); 
    return (
        <>
            <h1>Admin page for group {id}</h1>
        </>
    );
}

export default GroupAdminView; 