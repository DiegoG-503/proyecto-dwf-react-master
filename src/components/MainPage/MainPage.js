import React from "react";

import gameImage from "../../img/game.jpg";
import bookImage from "../../img/book.png";
import NavPrincipal from "../Menu/NavPrincipal";

const MainPage = (props) => {

  const tiendaGamesHandler = () => {
    props.onStoreGamesClick({storeGames:true, storeBooks:false});
  };

  const tiendaBooksHandler = () => {
    props.onStoreBooksClick({storeGames:false, storeBooks:true});
  };

  return (
    <div className="text-bg-dark">
      <section id="seccion">
          <NavPrincipal />
        </section>
      <div className=" text-center h-100 w-100 p-3 mx-auto flex-column">
          <div className="row px-auto d-flex justify-content-center" id="tienda">
            <div className="col-12 col-md-6 px-3 mb-3" >
              <h2>Videojuegos</h2>
              <img
                src={gameImage}
                onClick={tiendaGamesHandler}
                alt="Game"
                className="image rounded"
              />
            </div>
            <div className="col-12 col-md-6 px-3 mb-3">
              <h2>Libros</h2>
              <img
                src={bookImage}
                onClick={tiendaBooksHandler}
                alt="Book"
                className="image rounded"
              ></img>
            </div>
          </div>
          
        </div><footer>
          <p>Hecho por ..................</p>
        </footer>
      </div>

  );
};

export default MainPage;
