import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: 'auto',
  marginTop :'2rem'
}));

const StyledCardMedia = styled(CardMedia)({
  height: 200,
});

const FavoriteButton = styled(IconButton)({
  marginLeft: 'auto',
});

const Herosection = ({ product }) => {
  return (
    <StyledCard >
      <StyledCardMedia
        image={product.images}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <Typography variant="h6" color="textPrimary">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <FavoriteButton aria-label="add to favorites">
          <FavoriteIcon />
        </FavoriteButton>
        <Button variant="contained" color="primary" startIcon={<ShoppingCartIcon />}>
          Add to Cart
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default Herosection;
