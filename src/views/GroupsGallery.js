import {
    useParams
} from "react-router-dom";
import CreateGroupFab from '../widgets/CreateGroupFab';

function GroupsGallery() {
    return (
        <>
            <h1>Groups gallery</h1>
            <CreateGroupFab /> 
        </>
    );
}

export default GroupsGallery; 