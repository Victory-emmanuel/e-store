import {
  Favorite,
  PersonAddOutlined,
  ShoppingBagOutlined,
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
        }}
        id="nav-bar"
      >
        <Box
          variant="form"
          sx={{ display: "grid", justifyContent: "left", width: "100%" }}
        >
          <input
            onChange={searchHandler}
            value={query}
            type="text"
            placeholder="Search..."
            style={{
              width: "35rem",
              padding: "0.5rem",
              height: "2.5rem",
              border: "none",
              backgroundColor: "#eee",
              borderRadius: "5px",
              color: "#252525",
            }}
          />
        </Box>
        <Box sx={{ textAlign: "right", paddingRight: "1rem" }}>
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

export default NavBar;
