import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { Products } from "../../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = Products.find((item) => item.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <Typography variant="h5">Product not found.</Typography>;
  }

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        {/* Product Image */}
        <Box
          component="img"
          src={product.images}
          alt={product.name}
          sx={{
            width: { xs: "100%", md: "50%" },
            borderRadius: 2,
          }}
        />

        {/* Product Details */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Product ID: {product.id}
          </Typography>
          <Typography variant="h6" color="primary" gutterBottom>
            ${product.price}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {product.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Sold by: <strong>{product.seller}</strong>
          </Typography>
          <Typography
            variant="body1"
            color={product.stock > 0 ? "green" : "red"}
            gutterBottom
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </Typography>

          {/* Quantity Controls */}
          <Box sx={{ display: "flex", alignItems: "center", marginY: 2 }}>
            <IconButton
              onClick={decreaseQuantity}
              disabled={quantity === 1}
              color="primary"
            >
              <Remove />
            </IconButton>
            <TextField
              value={quantity}
              size="small"
              inputProps={{ readOnly: true, style: { textAlign: "center" } }}
              sx={{ width: 60, marginX: 1 }}
            />
            <IconButton
              onClick={increaseQuantity}
              disabled={quantity >= product.stock}
              color="primary"
            >
              <Add />
            </IconButton>
          </Box>

          {/* Add to Cart Button */}
          <Button
            variant="contained"
            color="primary"
            disabled={product.stock === 0}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
