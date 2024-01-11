import { Box } from "@mui/material";
import { Home } from "./pages/pages";
import { Card, NavBar, SideBar } from "./components/components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

//Database
import products from "./db/data";

function App() {
  //.......input filter..........//
  const [query, setQuery] = useState("");
  const searchHandler = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  //..............................//
  const [seletedCategory, setseletedCategory] = useState(null);
  //.......Radio filter..........//

  const handleRadioClick = (e) => {
    setseletedCategory(e.target.value);
  };
  //..............................//
  //.......Button filter..........//

  const handleBtnClick = (e) => {
    setseletedCategory(e.target.value);
  };
  //..............................//
  const filteredData = (products, selected, query) => {
    let filteredProducts = products;
    //filtering input queries
    if (query) {
      filteredProducts = filteredItems;
    }
    //selected filtering
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title, type }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected ||
          type === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  };
  const result = filteredData(products, seletedCategory, query);
  return (
    <BrowserRouter>
      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "100%",
            sm: "100%",
            md: "18% 78%",
            lg: "18% 78%",
          },
          gridGap: "2%",
          margin: {
            xs: "0 1.5rem",
            sm: "0 1rem",
          },
        }}
        className="App"
      >
        <SideBar handleRadioClick={handleRadioClick} />
        <Box>
          <NavBar query={query} searchHandler={searchHandler} />
          <Routes>
            <Route
              path="/"
              exact
              element={<Home handleBtnClick={handleBtnClick} result={result} />}
            />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
