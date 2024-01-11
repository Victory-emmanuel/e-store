import { Box, Typography } from "@mui/material";
import { Category, Colors, Price } from "./components";
import { ShoppingCartOutlined } from "@mui/icons-material";

const SideBar = ({ handleRadioClick }) => {
  return (
    <>
      <Box
        sx={{
          borderRight: "1px solid #ddd",
          display: {
            xs: "none",
            sm: "none",
            md: "grid",
          },
          justifySelf: "left",
          height: "100vh",
          backgroundColor: "#fff",
          width: "100%",
          position: "sticky",
          left: 0,
          top: 0,
          padding: {
            md: "2rem 0.5rem",
            lg: "2rem",
          },
        }}
      >
        <Box
          sx={{
            display: {
              md: "none",
              lg: "block",
            },
            marginBottom: "3.5rem",
          }}
        >
          <Typography variant="h4" component="span" sx={{ fontWeight: "300" }}>
            E-Store
          </Typography>
        </Box>
        <Box
          sx={{
            display: {
              md: "block",
              lg: "none",
            },
            marginBottom: "3.5rem",
          }}
        >
          <ShoppingCartOutlined sx={{ fontSize: "4rem" }} />
        </Box>
        <Category handleRadioClick={handleRadioClick} />
        <Price handleRadioClick={handleRadioClick} />
        <Colors handleRadioClick={handleRadioClick} />
      </Box>
    </>
  );
};

export default SideBar;
