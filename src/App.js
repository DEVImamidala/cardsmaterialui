import React from 'react';
import { Box, Card, Button, CardContent, CardMedia, Typography } from '@mui/material';
import dataengineer from './Assests/data engineer.jpg';
import datascientist from './Assests/Data-Science.jpg';
import dataanalyst from './Assests/dataanalyst.jpg';
import datavisualize from './Assests/datavisualization.jpg';
import python from './Assests/python.jpeg';
import arrow from './Assests/arrow1.png';
import time from './Assests/time.png';
import './App.css';

const cardsData = [
  {
    title: "Become a successful data engineer",
    image: dataengineer,
    link: "#",
  },
  {
    title: "Become a successful Data Scientist",
    image: datascientist,
    link: "https://coursevita.com/courses/dataScience",
  },
  {
    title: "Become a successful data analyst",
    image: dataanalyst,
    link: "https://coursevita.com/courses/dataAnalytics",
  },
  {
    title: "Become a successful data visualization expert",
    image: datavisualize,
    link: "https://coursevita.com/courses/dataVisualization",
  },
  {
    title: "Python for Data Analytics",
    image: python,
    link: "https://upskill.coursevita.com/python-data-analytics",
    date: "24th july, 2024", 
  },
];

const CardComponent = ({ title, image, link ,date}) => {
  return (
    <Card className="card">
      <CardMedia
        component="img"
        height="140"
        width="1200"
        image={image}
        alt={title}
        className="card-image"
      />
      <CardContent className="card-content">
        <Typography className="card-title" gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        {date && (
          <Box display="flex" alignItems="center" marginBottom="8px">
            <img src={time} alt="time icon" height="20px" style={{ marginRight: '8px' }} />
            <Typography variant="body2" color="text.secondary">
              {date}
            </Typography>
          </Box>
        )}
        <Button
          size="small"
          sx={{
            border: '3px solid #050C9C',  
            color: 'black',  
            '&:hover': {
               borderRadius:'5%', 
               backgroundColor:'navy',
               color:'white'
            },
          }}
          href={link}
          target="_blank"
        >
          Learn More
        </Button>
        <img src={arrow} height={'25px'} style={{backgroundColor:'#3ABEF9',borderRadius:'15px',marginLeft:'120px'}}/>

      </CardContent>
    </Card>
  );
};

const App = () => {
  return (
    <Box className="scroll-container">
      {cardsData.map((card, index) => (
        <CardComponent key={index} title={card.title} image={card.image} link={card.link}date={card.date} />
      ))}
    </Box>
  );
};

export default App;
