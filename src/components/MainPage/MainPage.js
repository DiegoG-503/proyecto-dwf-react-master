import React from "react";

import gameImage from "../../img/game.jpg";
import bookImage from "../../img/book.png";

const MainPage = (props) => {

  const tiendaGamesHandler = () => {
    props.onStoreGamesClick({storeGames:true, storeBooks:false});
  };

  const tiendaBooksHandler = () => {
    props.onStoreBooksClick({storeGames:false, storeBooks:true});
  };

  return (
    <div className="text-center text-bg-dark" id="tienda">
      <section className='pb-5'>
          <h1 className="bg-secondary">Tienda Kodigo</h1>
          <h5>Selecciona la tienda de tu preferencia</h5>
        </section>
      <div className="h-100 w-100 p-3 mx-auto flex-column">
          <div className="row px-auto d-flex justify-content-center" >
            <div className="col-12 col-md-6 px-3 mb-3" data-aos="fade-up">
              <h1>Videojuegos</h1>
              <img
                src={gameImage}
                onClick={tiendaGamesHandler}
                alt="Game"
                className="image rounded"
              />
            </div>
            <div className="col-12 col-md-6 px-3 mb-3" data-aos="fade-up">
              <h1>Libros</h1>
              <img
                src={bookImage}
                onClick={tiendaBooksHandler}
                alt="Book"
                className="image rounded"
              ></img>
            </div>
          </div>
        </div>

        <footer>
          <p>Hecho por ..................</p>
        </footer>
      </div>

  );
};

export default MainPage;
