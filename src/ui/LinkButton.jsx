import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = "text-blue-500 hover:text-blue-600 hover:underline";

  if (to === "-1") return <button onClick={() => navigate(-1)}></button>;

  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
