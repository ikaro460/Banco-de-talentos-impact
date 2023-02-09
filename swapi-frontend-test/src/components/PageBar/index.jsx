import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSwapi } from "../../providers/Swapi";

export const PageBar = ({ howManyPages }) => {
  const { people, setLoading, setPeople } = useSwapi();
  const { pathname } = useLocation();
  const pageNumber = pathname.split("/")[2];
  const navigate = useNavigate();

  const handleClick = (nextOrPrev) => {
    //CHECK BUTTON AND IF PAGE IS NOT THE LAST
    if (nextOrPrev === "next" && pageNumber < howManyPages) {
      navigate(`/${pathname.split("/")[1]}/${Number(pageNumber) + 1}`);

      //CHECK BUTTON AND IF PAGE IS NOT THE FIRST
    } else if (nextOrPrev === "prev" && pageNumber > 1) {
      navigate(`/${pathname.split("/")[1]}/${Number(pageNumber) - 1}`);
    }
  };

  return (
    <nav className="pb-nav">
      <button
        className="pb-nav__prev"
        onClick={() => {
          handleClick("prev");
        }}
      >
        Previous
      </button>
      <button
        className="pb-nav__next"
        onClick={() => {
          handleClick("next");
        }}
      >
        Next
      </button>
    </nav>
  );
};
