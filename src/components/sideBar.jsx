import { Box, Typography } from "@mui/material";
import { Category, Colors, Price } from "./components";

const SideBar = ({ handleRadioClick }) => {
  return (
    <>
      <Box
        p={4}
        sx={{
          borderRight: "1px solid #ddd",
          display: "grid",
          justifySelf: "left",
          height: "100vh",
          backgroundColor: "#fff",
          width: "100%",
          position: "sticky",
          left: 0,
          top: 0,
        }}
      >
        <Box sx={{ marginBottom: "3.5rem" }}>
          <Typography variant="h3" component="span" sx={{ fontWeight: "600" }}>
            E-
          </Typography>
          <Typography variant="h3" component="span" sx={{ fontWeight: "100" }}>
            Store
          </Typography>
        </Box>
        <Category handleRadioClick={handleRadioClick} />
        <Price handleRadioClick={handleRadioClick} />
        <Colors handleRadioClick={handleRadioClick} />
      </Box>
    </>
  );
};

export default SideBar;
