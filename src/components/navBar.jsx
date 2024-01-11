import styled from "styled-components";
import {
  Favorite,
  PersonAddOutlined,
  ShoppingBagOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = ({ query, searchHandler }) => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          alignItems: "center",
          borderBottom: "1px solid #ddd",
          padding: "2rem 2rem 2rem 0",
          position: "sticky",
          right: 0,
          top: 0,
          backgroundColor: "white",
          zIndex: 1,
          gridGap: "2rem",
        }}
        id="nav-bar"
      >
        <Box
          sx={{
            display: {
              sm: "grid",
              md: "none",
              lg: "none",
            },
          }}
        >
          <ShoppingCartOutlined sx={{ fontSize: "2.5rem" }} />
        </Box>
        <Box
          variant="form"
          sx={{
            display: "grid",
            justifyContent: "left",
            justifySelf: "left",
            width: {
              xs: "60%",
              sm: "80%",
              md: "100%",
            },
          }}
        >
          <SearchInput
            onChange={searchHandler}
            value={query}
            type="text"
            placeholder="Search..."
          />
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
            },
            textAlign: "right",
            paddingRight: "1rem",
          }}
        >
          <Link style={{ marginRight: "1rem" }}>
            <Favorite />
          </Link>
          <Link style={{ marginRight: "1rem" }}>
            <ShoppingBagOutlined />
          </Link>
          <Link style={{ marginRight: "1rem" }}>
            <PersonAddOutlined />
          </Link>
        </Box>
      </Box>
    </>
  );
};
const SearchInput = styled.input`
  padding: 0.5rem;
  height: 2.5rem;
  border: none;
  background-color: #eee;
  border-radius: 5px;
  color: #252525;
  width: 30rem;

  @media (max-width: 400px) {
    width: 10rem;
    // Adjust styles for smaller screens (xs)
  }
  @media (min-width: 401px) and (max-width: 600px) {
    width: 15rem; // Adjust styles for smaller screens (sm)
  }
  @media (min-width: 601px) and (max-width: 900px) {
    width: 25rem;
    // Adjust styles for medium screens (md)
  }
  @media (min-width: 1200px) {
    width: 30rem;
    // Adjust styles for larger screens (lg)
  }
`;

// const SearchInput = styled("input")({
//   padding: "0.5rem",
//   height: "2.5rem",
//   border: "none",
//   backgroundColor: "#eee",
//   borderRadius: "5px",
//   color: "#252525",
//   "@media  (max-width: 400px)": {
//     maxWidth: "15rem", // Adjust styles for smaller screens (xs)
//   },
//   "@media (min-width: 401px) and (max-width: 600px)": {
//     maxWidth: "20rem", // Adjust styles for smaller screens (sm)
//   },
//   "@media (min-width: 601px) and (max-width: 900px)": {
//     maxWidth: "25rem", // Adjust styles for medium-sized screens ( md)
//   },
//   "@media (min-width:901px) and (max-width: 1200px)": {
//     width: "35rem", // Adjust styles for larger screens (lg)
//   },
// });
export default NavBar;
