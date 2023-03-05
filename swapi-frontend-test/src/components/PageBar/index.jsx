import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSwapi } from "../../providers/Swapi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { StyledContainer } from "./styled";
import { CharacterList } from "../CharacterList";

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
    <StyledContainer>
      <nav className="pb-nav">
        <button
          className="pb-nav__btn"
          onClick={() => {
            handleClick("prev");
          }}
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>
        <button
          className="pb-nav__btn"
          onClick={() => {
            handleClick("next");
          }}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
      </nav>
    </StyledContainer>
  );
};
