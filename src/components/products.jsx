import { Box } from "@mui/material";

const Products = ({ result }) => {
  return (
    <>
      <Box>
        <Box
          m={(8, 4)}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gridGap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
          id="card"
        >
          {result}
        </Box>
      </Box>
    </>
  );
};

export default Products;
