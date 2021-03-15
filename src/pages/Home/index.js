import React from 'react'
import { Container } from './style.js'

import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Promo from '../../components/Promo'
import ContCard from '../../components/ContCard'
import Footer from '../../components/Footer'
import Notification from '../../components/Notificacao'
function HomeScreen() {
    return (
        <>
            <header>
                <Navbar/>
                <Banner/>
            </header> 
                <Promo/>
            <Container>
                <div className="container flex">
                    <ContCard/>
                    <Notification/>
                </div>
            </Container>
            <Footer/>
        </>
      );
  }
  
export default HomeScreen;