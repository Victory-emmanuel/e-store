import { Box, Typography } from "@mui/material";
import { ShoppingBag } from "@mui/icons-material";

const Card = ({
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
  company,
  color,
  category,
}) => {
  return (
    <>
      <Box>
        <Box
          sx={{
            border: "1px solid #ccc",
            padding: "1rem",
            borderRadius: "10px",
            alignItems: "center",
            display: "grid",
          }}
        >
          <img
            src={img}
            alt={title}
            style={{ width: "13rem", marginBottom: "2rem" }}
          />
          <Typography mb={"1rem"} variant="h5" component="h5">
            {title}
          </Typography>
          <Box
            className="reviews"
            mb={"1rem"}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box>
              {star}
              {star}
              {star}
              {star}
            </Box>
            <Typography pl={"1rem"} variant="span" component="span">
              {reviews}
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", position: "relative" }}
          >
            <Typography
              variant="span"
              component="span"
              sx={{ fontWeight: "500", paddingRight: "0.5rem" }}
            >
              Cost:
            </Typography>
            <Typography variant="span" component="del">
              {prevPrice}
            </Typography>
            <Typography variant="span" component="span">
              {newPrice}
            </Typography>
            <ShoppingBag sx={{ position: "absolute", right: "0" }} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Card;
