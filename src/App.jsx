import React from 'react';
import { Box, Grid, Item, styled } from '@mui/material';
import Header from './components/Templates/Header'
import Footer from './components/Templates/Footer'
import NavBar from './components/Templates/Navbar'
import Trains from './pages/Trainings'
import './App.css';
import { padding } from '@mui/system';

const HeaderWrapper = styled(Box)(() => ({
  height: '15vh',
  backgroundColor: 'black',
  opacity: '0.6',
  borderRadius: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const NavBarWrapper = styled(Box)(() => ({
  backgroundColor: 'black',
  opacity: '0.6',
  borderRadius: '20px',
  height: '62.5vh',
}));

const BodyWrapper = styled(Box)(() => ({
  backgroundColor: 'black',
  opacity: '1',
  borderRadius: '20px',
  height: '62.5vh',
  overflow: 'auto',
}));

const FooterWrapper = styled(Box)(() => ({
  height: '15vh',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'black',
  opacity: '0.6',
  borderRadius: '20px',
}));


function App() {
  return (
    <div className='App'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
        </Grid>
        <Grid item sm={2} md={2} lg={2} display={{ xs: "none", sm: "block" }}>
          <NavBarWrapper>
            <NavBar />
          </NavBarWrapper>
        </Grid>
        <Grid item xs={12} sm={10} md={10} lg={10}>
          <BodyWrapper>
            <Trains />
          </BodyWrapper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
