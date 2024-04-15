import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h3>Error</h3>
      <Link to="/">Go back</Link>
    </div>
  );
};
export default NotFoundPage;
