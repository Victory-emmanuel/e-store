import { Box, Button } from "@mui/material";

const Btn = ({ clickHandler, value, title }) => {
  return (
    <>
      <Box>
        <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <Button onClick={clickHandler} value={value} className="btn">
            {title}
          </Button>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
          <Button
            sx={{ border: "1px solid #fff" }}
            onClick={clickHandler}
            value={value}
            className="btn"
          >
            {title}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Btn;
