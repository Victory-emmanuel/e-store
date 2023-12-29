import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Input, InputAll } from "./components";

const Colors = ({ handleRadioClick }) => {
  return (
    <>
      <Box id="price-and-category-and-color">
        <Typography
          mb={"1.5rem"}
          variant="h6"
          component="h6"
          sx={{ fontWeight: 500 }}
        >
          Colors
        </Typography>
        <InputAll
          handleRadioClick={handleRadioClick}
          value="All"
          type="All"
          name="test2"
        />
        <Input
          handleRadioClick={handleRadioClick}
          value="black"
          title="Black"
          name="test2"
          color="black"
        ></Input>
        <Input
          handleRadioClick={handleRadioClick}
          value="blue"
          title="Blue"
          name="test2"
          color="blue"
        />
        <Input
          handleRadioClick={handleRadioClick}
          value="red"
          title="Red"
          name="test2"
          color="red"
        />
        <Input
          handleRadioClick={handleRadioClick}
          value="green"
          title="Green"
          name="test2"
          color="green"
        />
        <MyBox className="label" variant="label">
          <input
            onChange={handleRadioClick}
            value="white"
            type="radio"
            name="test2"
          />
          <Checkmark
            className="checkmark"
            sx={{ background: "white", border: "2px solid black" }}
            variant="span"
          ></Checkmark>
          <Typography
            sx={{
              marginLeft: "3rem",
            }}
            variant="span"
          >
            White
          </Typography>
        </MyBox>
      </Box>
    </>
  );
};
//custom styling
const MyBox = styled(Box)({
  display: "block",
  // gridTemplateColumns: "1fr 1fr",
  // gridGap: "2rem",
  paddingBottom: "0.5rem",
  position: "relative",
  cursor: "pointer",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none",
});
const Checkmark = styled(Typography)({
  height: "15px",
  width: "15px",
  borderRadius: "50%",
  position: "absolute",
  top: "0",
  left: "0",
});
export default Colors;
