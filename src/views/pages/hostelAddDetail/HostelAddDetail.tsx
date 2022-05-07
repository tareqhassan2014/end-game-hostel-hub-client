import { useParams } from 'react-router-dom';

const HostelAddDetail = () => {
    const { id } = useParams();
    return (
        <div>
            <p>Hostel Add Details</p>
            <p>Hostel Add Details</p>
            <p>Hostel Add Details</p>
            <p>Hostel Add Details id : {id}</p>
        </div>
    );
};

export default HostelAddDetail;
