import { CatchingPokemonOutlined, Search } from '@mui/icons-material';
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Autocomplete,
  TextField,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React, { useState } from 'react';
import Herosection from './Herosection';

const Navigation = ({ categories, products }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchText, setSearchText] = useState('');

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchTerm(''); // Clear search term when category changes
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchTerm(searchText);
  };

  const handleSuggestionSelect = (event, value) => {
    setSearchText(value);
    setSearchTerm(value);
  };

  const filteredProducts = products.filter((product) => {
    const isInCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    return isInCategory && matchesSearchTerm;
  });

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
            <CatchingPokemonOutlined />
          </IconButton>

          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Search-Item
          </Typography>

          <Stack direction='row' spacing={2} sx={{ display: isSmallScreen ? 'none' : 'flex' }}>
            <Button color='inherit' onClick={() => handleCategoryClick('All')}>
              All
            </Button>
            {categories.map((category, index) => (
              <Button key={index} color='inherit' onClick={() => handleCategoryClick(category)}>
                {category}
              </Button>
            ))}
          </Stack>

          <div style={{ display: 'flex', alignItems: 'center', marginLeft: isSmallScreen ? 'auto' : 0 }}>
            <Autocomplete
              freeSolo
              options={products.map((product) => product.title)}
              onInputChange={handleSearchChange}
              onChange={handleSuggestionSelect}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder='Search....'
                  variant='outlined'
                  sx={{ backgroundColor: 'white', borderRadius: 1, width: '15rem', height: '3rem' }}
                />
              )}
            />
            <IconButton color='inherit' onClick={handleSearchClick}>
              <Search />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Grid container spacing={4} sx={{ padding: 4 }}>
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Herosection product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Navigation;
