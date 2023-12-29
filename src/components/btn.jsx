import { Box, Button } from "@mui/material";

const Btn = ({ clickHandler, value, title }) => {
  return (
    <>
      <Box>
        <Box>
          <Button onClick={clickHandler} value={value} className="btn">
            {title}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Btn;
