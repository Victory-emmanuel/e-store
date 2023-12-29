import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Input = ({ handleRadioClick, value, title, name, color, type }) => {
  return (
    <>
      <Box id="price-and-category-and-color">
        <MyBox className="label" variant="label">
          <input
            onChange={handleRadioClick}
            type="radio"
            value={value}
            name={name}
          />
          <span
            style={{
              backgroundColor: color,
              height: "15px",
              width: "15px",
              borderRadius: "50%",
              position: "absolute",
              top: "0",
              left: "0",
            }}
            className="checkmark"
          ></span>
          <Typography sx={{ marginLeft: "3rem" }} variant="span">
            {title}
          </Typography>
        </MyBox>
      </Box>
    </>
  );
};
//custom styling
const MyBox = styled(Box)({
  display: "block",

  paddingBottom: "0.5rem",
  position: "relative",
  cursor: "pointer",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none",
});

export default Input;
