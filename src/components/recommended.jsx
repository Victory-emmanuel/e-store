import { Box, Typography } from "@mui/material";
import Btn from "./btn";

const recommended = ({ handleBtnClick }) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: { xs: "1rem", sm: "2rem" },
          borderRadius: { xs: "5px", sm: "10px" },
        }}
        mt={4}
        id="recmd"
      >
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.35rem", md: "1.5rem" },
            fontWeight: 500,
            color: " #252525",
            marginBottom: { xs: "1rem", sm: "2rem", md: "2rem", lg: "2rem" },
            marginTop: { xs: "1rem", sm: "2rem", md: "2rem", lg: "2rem" },
          }}
          variant="h5"
          component="h5"
        >
          Recommended
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap" },
            gap: "10px",
          }}
        >
          <Btn clickHandler={handleBtnClick} value="All" title="All" />
          <Btn clickHandler={handleBtnClick} value="Nike" title="Nike" />
          <Btn clickHandler={handleBtnClick} value="Adidas" title="Adidas" />
          <Btn clickHandler={handleBtnClick} value="Puma" title="Puma" />
          <Btn clickHandler={handleBtnClick} value="Vans" title="Vans" />
        </Box>
      </Box>
    </>
  );
};

export default recommended;
