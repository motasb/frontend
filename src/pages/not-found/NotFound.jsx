import { Link } from "react-router-dom";
import "./not-found.css";

const NotFound = () => {
    return ( 
        <section className="not-found">
            <div className="not-found-title">404</div>
            <i className="fa-regular fa-face-frown-open not-found-icon"></i>
            <h1 className="not-found-text">Page Not found</h1>
            <Link to={"/"} className="not-found-link" >
                Go To Home Page
            </Link>
        </section>
     );
}
 
export default NotFound;