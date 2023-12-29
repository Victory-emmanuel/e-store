import { Box, Typography } from "@mui/material";
import Btn from "./btn";

const recommended = ({ handleBtnClick }) => {
  return (
    <>
      <Box mt={4} id="recmd">
        <Typography variant="h5" component="h5">
          Recommended
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Btn clickHandler={handleBtnClick} value="All" title="All Products" />
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
