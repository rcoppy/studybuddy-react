import {
  useParams
} from "react-router-dom";

function StudentProfile() {
    let { id } = useParams();
    
    return (<>
        <h1>Student id {id}</h1></>
    ); 
}

export default StudentProfile; 