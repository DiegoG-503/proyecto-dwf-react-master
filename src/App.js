import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import StoreBooks from "./components/StoreBooks/StoreBooks";
import StoreGames from "./components/StoreGames/StoreGames";

const App = () => {
  
  const [selectedStore, setSelectedStore] = useState({
    storeGames: false,
    storeBooks: false,
  });

  const saveStoreClickHandler = (chosenStore) => {
    setSelectedStore(chosenStore);
  };

  console.log(selectedStore);

  return (
    
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={MainPage} />
          <Route path="/storeGames" element={StoreGames} />
          <Route path="/storeBooks" element={StoreBooks} />
        </Routes>
      </Router>
      {selectedStore.storeGames && <StoreGames></StoreGames>}
      {selectedStore.storeBooks && <StoreBooks></StoreBooks>}
      {(selectedStore.storeBooks === false) &
        (selectedStore.storeGames === false) && (
        <MainPage
          onStoreGamesClick={saveStoreClickHandler}
          onStoreBooksClick={saveStoreClickHandler}
        ></MainPage>
      )}
    </Fragment>
  );
};

export default App;
