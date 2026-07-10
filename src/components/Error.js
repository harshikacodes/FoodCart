import {Link, useRouteError} from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    return (
        <div className="error-page">
            <div className="error-details">
                <h1>Oops! Something Went Wrong!</h1>

                <h3>{err.data}</h3>
                <Link to="/" className="link-name">Back Home</Link>
            </div>
        </div>
    );
}

export default Error;