import { useState, useEffect } from 'react';
import CarouselSlide from '../CarouselSlide/CarouselSlide';
import { ArrowLeft, ArrowRight } from '../Arrow/Arrow';
import content from '../../data/content.json';
import styled from 'styled-components';

const CarouselContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   column-gap: 24px;
   overflow: hidden;
   margin-bottom: 40px;
   width: 100%;
   @media (max-width: 1342) {
      grid-template-columns: repeat(2, 1fr);
   }
   @media (max-width: 982) {
      grid-template-columns: 1fr;
   }
`;

const ArrowContainer = styled.div`
   display: flex;
   cursor: pointer;
`;

export default function Carousel() {
   const [slides, setSlides] = useState(content);
   const [touchStart, setTouchStart] = useState(0);
   const [touchEnd, setTouchEnd] = useState(0);
   const [animate, setAnimate] = useState('0');
   const [arrowDisabled, setArrowDisabled] = useState(false);
   const [width, setWindowWidth] = useState(0);
   const updateDimensions = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
   };

   useEffect(() => {
      updateDimensions();
      window.addEventListener('resize', updateDimensions);
      return () => window.removeEventListener('resize', updateDimensions);
   }, []);

   const calcVisibleSlides = () => {
      switch (true) {
         case width <= 982:
            return 1;
         case width <= 1342:
            return 2;
         default:
            return 3.5;
      }
   };

   const [visibleSlides, setVisibleSlides] = useState(calcVisibleSlides());

   useEffect(() => {
      setVisibleSlides(calcVisibleSlides());
      //eslint-disable-next-line
   }, [width]);

   const slideLeft = () => {
      if (!arrowDisabled) {
         setSlides([...slides.slice(1), slides[0]]);
         setAnimate('right');
         setArrowDisabled(true);
      }
   };

   const slideRight = () => {
      if (!arrowDisabled) {
         setSlides([slides[slides.length - 1], ...slides.slice(0, -1)]);
         setAnimate('left');
         setArrowDisabled(true);
      }
   };

   const handleTouchStart = (e) => {
      setTouchStart(e.targetTouches[0].clientX);
   };

   const handleTouchMove = (e) => {
      setTouchEnd(e.targetTouches[0].clientX);
   };

   const handleTouchEnd = () => {
      if (touchStart - touchEnd > 150) {
         slideRight();
      }

      if (touchStart - touchEnd < -150) {
         slideLeft();
      }
   };

   return (
      <>
         <CarouselContainer
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
         >
            {slides.slice(0, visibleSlides).map((slide, index) => (
               <CarouselSlide
                  content={slide}
                  key={index}
                  handleTouchStart={handleTouchStart}
                  animate={animate}
                  setAnimate={setAnimate}
                  setArrowDisabled={setArrowDisabled}
               />
            ))}
         </CarouselContainer>
         <ArrowContainer>
            <ArrowLeft slideLeft={slideLeft} />
            <ArrowRight slideRight={slideRight} />
         </ArrowContainer>
      </>
   );
}
