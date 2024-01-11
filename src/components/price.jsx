import { Box, Typography } from "@mui/material";

import { Input, InputAll } from "./components";

const Price = ({ handleRadioClick }) => {
  return (
    <>
      <Box sx={{}} id="price-and-category-and-color">
        <Typography
          mb={"1.5rem"}
          variant="h6"
          component="h6"
          sx={{ fontWeight: 500 }}
        >
          Price
        </Typography>
        <InputAll
          handleRadioClick={handleRadioClick}
          value="All"
          type="All"
          name="test2 "
        />
        <Input
          handleRadioClick={handleRadioClick}
          value={50}
          title="$0 - $50"
          name="test2 "
        />
        <Input
          handleRadioClick={handleRadioClick}
          value={100}
          title="$50 - $100"
          name="test2 "
        />
        <Input
          handleRadioClick={handleRadioClick}
          value={150}
          title="$100 - $150"
          name="test2 "
        />
        <Input
          handleRadioClick={handleRadioClick}
          value={200}
          title="Over $150"
          name="test2 "
        />
      </Box>
    </>
  );
};

export default Price;
