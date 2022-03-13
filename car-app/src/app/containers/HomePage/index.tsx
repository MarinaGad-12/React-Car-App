// import React from 'react';
// import styled from "styled-components";
// import tw from 'twin.macro';
// import { NavBar } from '../../components/navbar';
// import { TopSection } from './topSection';


// const PageContainer =styled.div`
// ${tw`
//    flex
//    flex-col
//    w-full
//    h-full
//    items-center
//    overflow-x-hidden
// `}
// `;

// export function HomePage(){
//     return (
//     <PageContainer>
//    <NavBar/>
//    <TopSection/>
//     </PageContainer>
//     )
// }

import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { NavBar } from "../../components/navbar";

import { TopSection } from "./topSection";
import { BookCard } from '../../components/bookCard';
import { Marginer } from "../../components/marginer";
import { BookingSteps } from "./bookingSteps";
import { AboutUs } from "./aboutUs";
import { TopCars } from './topCars';
import { Footer } from './../../components/footer/index';

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
     <BookCard/>
     <Marginer direction="vertical" margin="8em" />
     <BookingSteps/>
     <Marginer direction="vertical" margin="8em" />
<AboutUs/>
<Marginer direction="vertical" margin="8em" />
<TopCars/>
<Footer/>
    </PageContainer>
  );
}