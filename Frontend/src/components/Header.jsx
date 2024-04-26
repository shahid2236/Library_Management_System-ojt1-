import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import Book from "../public/Book.json";
import { StudentContext } from "../routes/StudentsPage";
import { BookContext } from "../routes/BooksPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddStudentModal from "../components/AddStudentModal";
import AddBookModal from "../components/AddBookModal";
import { Player } from "@lottiefiles/react-lottie-player";

const Header = ({setUpdate}) => {

  const [showModal, setShowModal] = useState(false);
 
  const location = useLocation();
  const studentSearch = useContext(StudentContext);
  const bookSearch = useContext(BookContext);

  const handleSearch = (event) => {
    switch (location.pathname.slice(1)) {
      case "Students":
        studentSearch(event.target.value);
        break;
      case "Books":
        bookSearch(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleStudentAdd = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleBookAdd = () => {
    setShowModal(true);
  };

  const renderAddButton = () => {
    if (location.pathname === "/Students") {
      return (
        <>
          <abbr title="Add Student">
            <button
              className="btn_add"
              onClick={handleStudentAdd}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </abbr>

          {showModal && <AddStudentModal props={{closeModal,setUpdate}} />}
        </>
      );
    } else if (location.pathname === "/Books") {
      return (
        <>
          <abbr title="Add Book">
            <button className="btn_add" onClick={handleBookAdd}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </abbr>

          {showModal && <AddBookModal props={{closeModal,setUpdate}} />}
        </>
      );
    }
  };

  return (
    <>
      {" "}
      <header className="headerContainer">
        <div className="headerContainer__logo">
          <Link to="/">
            <Lottie animationData={Book} />
          </Link>
            {/* <Player
              className="content__logo"
              src="https://lottie.host/8f17b8aa-db4f-445e-8894-82988086dc6b/z4KZXzzqUt.json"
              background="transparent"
              speed="1"
              style={{ "width": "300px", "height": "300px" }}
              loop
              autoplay
            ></Player> */}
        </div>
        <h1 className="headerContainer__tag">BookNest Library Ropar
</h1>
        <div className="headerContainer__operations">
          <input
            type="text"
            className="searchBar"
            placeholder="Search..."
            onChange={handleSearch}
          />
          {renderAddButton()}
        </div>
      </header>
    </>
  );
};

export default Header;
