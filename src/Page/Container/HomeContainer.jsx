import Home from "../UIContainer/Home";
import { useLocation } from 'react-router-dom';

const HomeContainer = () => {
    const location = useLocation();
    const role = location.state?.role;

    return(
        <Home role={role}/>
    )
}

export default HomeContainer;