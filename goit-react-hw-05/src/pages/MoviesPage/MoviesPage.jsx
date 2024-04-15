import { NavLink, Outlet } from "react-router-dom";

function MoviesPage() {
  return (
    <div>
      <div>Movies</div>
      <nav>
        <NavLink to={"/movies/cast"}>Cast</NavLink>
        <NavLink to={"/movies/reviews"}>Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default MoviesPage;
