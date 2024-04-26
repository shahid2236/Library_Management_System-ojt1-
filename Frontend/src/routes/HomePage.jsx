import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div className="homePageContainer">
        <div className="homePageContainer__animationScreen1">
          <Player
            src="https://lottie.host/bed17136-b252-4c90-a2d8-9d95d817224d/D4njyLNVgK.json"
            background="transparent"
            speed="1"
            style={{ "width": "600px", "height": "600px" }}
            loop
            autoplay
          ></Player>
        </div>

        <main className="content">
          <div className="content_company">
            <Player
              className="content__logo"
              src="https://lottie.host/8f17b8aa-db4f-445e-8894-82988086dc6b/z4KZXzzqUt.json"
              background="transparent"
              speed="1"
              style={{ "width": "300px", "height": "300px" }}
              loop
              autoplay
            ></Player>
            <h1 className="content__heading">
              <span className="content__heading--primary">
              BookNest
              </span>
              <span className="content__heading--secondary">
                Library Ropar
              </span>
            </h1>
          </div>
          <div className="content__btnsContainer">
            <Link to="/Students" className="content__btn content__btn--students">
              Manage <span className="content__buttonText">Students</span>
            </Link>
            <Link to="/Books" className="content__btn content__btn--books">
              Manage <span className="content__buttonText">Books</span>
            </Link>
          </div>

          <p className="content__copyright">&copy; All rights reserved to CodeCraft</p>
        </main>
      </div>
    </>
  );
};

export default HomePage;
