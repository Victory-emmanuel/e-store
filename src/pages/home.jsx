import { Box } from "@mui/material";
import { Products, Recommended } from "../components/components";

const Home = ({ handleBtnClick, result }) => {
  return (
    <>
      <Box
        sx={{
          dispaly: "grid",
        }}
      >
        <Recommended handleBtnClick={handleBtnClick} />
        <Products result={result} />
      </Box>
    </>
  );
};

export default Home;
