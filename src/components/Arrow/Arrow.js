import './Arrow.scss';
import { useState } from 'react';

export function ArrowLeft({ slideLeft }) {
   const [focus, setFocus] = useState(false);

   return (
      <div
         onClick={slideLeft}
         onMouseEnter={() => setFocus(!focus)}
         onMouseLeave={() => setFocus(!focus)}
         className='arrow left'
      >
         <img
            src={`/icons/arrow_left${focus ? '_hover' : ''}.svg`}
            alt='&larr;'
         />
      </div>
   );
}

export function ArrowRight({ slideRight }) {
   const [focus, setFocus] = useState(false);

   return (
      <div
         onClick={slideRight}
         onMouseEnter={() => setFocus(!focus)}
         onMouseLeave={() => setFocus(!focus)}
         className='arrow right'
      >
         <img
            src={`/icons/arrow_right${focus ? '_hover' : ''}.svg`}
            alt='&rarr;'
         />
      </div>
   );
}
