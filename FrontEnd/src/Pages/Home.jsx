import React, { useState } from 'react';
import Footer from '../Components/Footer.jsx';
import Navbar from '../WIdgets/Navbar.jsx';
import {Box,Grid} from '@mui/material';
import { Typography, Button, Pagination, Card, CardActionArea, CardMedia, CardContent, Paper} from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const products = [
    {
      id: 1,
      name: 'Jacket',
      imageUrl: "../src/assets/Products/jacket.jpg",
      description: 'Description of product 1',
    },
    {
      id: 2,
      name: 'Product 2',
      imageUrl: '/path/to/product2.jpg',
      description: 'Description of product 2',
    },
    {
      id: 3,
      name: 'Product 3',
      imageUrl: '/path/to/product3.jpg',
      description: 'Description of product 3',
    },
    {
      id: 4,
      name: 'Product 4',
      imageUrl: '/path/to/product3.jpg',
      description: 'Description of product 3',
    },
    {
      id: 5,
      name: 'Product 5',
      imageUrl: '/path/to/product3.jpg',
      description: 'Description of product 3',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1600, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 4, // Number of slides to show on screens up to 1600px wide
        },
      },
      {
        breakpoint: 1200, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2, // Number of slides to show on screens up to 1200px wide
        },
      },
      {
        breakpoint: 900, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2, // Number of slides to show on screens up to 900px wide
        },
      },
      {
        breakpoint: 600, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1, // Number of slides to show on screens up to 600px wide
        },
      },
    ],
  };

  const renderProductSlides = () => {
    return products.map(product => (
      <div key={product.id}>
        <Card sx =  {{m: 3}}>
          <CardActionArea>
            <CardMedia component="img" height="250" width = "50"image={product.imageUrl} alt={product.name} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" sx = {{fontFamily: "Inter", fontWeight: "bold", textAlign: "left", color: "black", fontSize: 25}}>
                {product.name}</Typography>

                <Typography gutterBottom variant="body" component="div" sx = {{fontFamily: "Inter", fontWeight: "medium", textAlign: "left", color: "black"}}>
                {product.description}
                </Typography>

            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    ));
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const renderAnnouncementContent = () => {
    switch (currentPage) {
      case 1:
      return (
        <Box sx={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
        <img src="../src/assets/Announcement/Events.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
      );
    case 2:
      return (
        <Box sx={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
        <video autoPlay loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="../src/assets/nigg/Ads.mp4" type="video/mp4" />
        </video>
      </Box>

      );
      default:
        return null;
    }
  };

  return (
    <div>

        {renderAnnouncementContent()}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#dbdbdb"}}>
        <Pagination count={2} page={currentPage} onChange={handlePageChange} sx = {{mt: 2, mb: 2}}/>
      </Box>

      <Box sx = {{backgroundColor: "#353535"}}>
      <Typography sx = {{fontFamily: "Kanit", fontSize: 30, fontWeight: "bold", textAlign: "center", color: "white", pt: "2vh"}}>FEATURED PRODUCTS</Typography>
    
      <Slider {...settings}>
          {renderProductSlides()}
        </Slider>
    </Box>

    <Typography sx = {{fontFamily: "Kanit", fontSize: 30, fontWeight: "bold", textAlign: "center", color: "white", pt: 4}}>CATEGORIES</Typography>
      <Footer />
    </div>
  );
}

export default Home;

