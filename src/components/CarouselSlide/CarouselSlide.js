import './CarouselSlide.scss';
import Button from '../Button/Button';
import styled from 'styled-components';

const SlideImage = styled.img`
   margin-bottom: 36px;
   width: auto;
   height: 220px;
   object-fit: contain;
   -webkit-animation: appear 500ms;
   -moz-animation: appear 500ms;
   -o-animation: appear 500ms;
   animation: appear 500ms;
`;

const SlideTitle = styled.h2`
   font-size: 3.2rem;
   line-height: 4.8rem;
   font-weight: 800;
   margin-top: 0;
   margin-bottom: 20px;
   white-space: pre-line;
`;

const SlideList = styled.ul`
   padding-bottom: 10px;
   li {
      font-size: 1.8rem;
      line-height: 2.8rem;
      font-weight: 400;
      margin-bottom: 14px;
   }
`;

export default function CarouselSlide({
   content,
   animate,
   setAnimate,
   setArrowDisabled,
}) {
   return (
      <div
         onAnimationEnd={() => {
            setAnimate('0');
            setArrowDisabled(false);
         }}
         animate={animate}
         className={`carousel-slide`}
      >
         <SlideImage src={content.image} alt={content.title} />
         <SlideTitle>{content.title}</SlideTitle>
         <SlideList>
            {content.text.map((headline, index) => (
               <li className='slide-headline' key={index}>
                  {headline}
               </li>
            ))}
         </SlideList>
         <Button text={content.button} />
      </div>
   );
}
