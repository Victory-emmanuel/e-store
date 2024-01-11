import { Box, Typography } from "@mui/material";
import { Input, InputAll } from "./components";

const Category = ({ handleRadioClick }) => {
  return (
    <>
      <Box id="price-and-category-and-color">
        <Typography
          mb={"1.5rem"}
          variant="h6"
          component="h6"
          sx={{ fontWeight: 500 }}
        >
          Category
        </Typography>
        <InputAll
          handleRadioClick={handleRadioClick}
          value="All"
          type="All"
          name="test "
        />

        <Input
          handleRadioClick={handleRadioClick}
          value="sneakers"
          title="Sneakers"
          name="test "
        />
        <Input
          handleRadioClick={handleRadioClick}
          value="flats"
          title="Flats"
          name="test "
        />
        <Input
          handleRadioClick={handleRadioClick}
          value="sandals"
          title="Sandals"
          name="test "
        />
        <Input
          handleRadioClick={handleRadioClick}
          value="heels"
          title="Heels"
          name="test "
        />
      </Box>
    </>
  );
};

export default Category;
