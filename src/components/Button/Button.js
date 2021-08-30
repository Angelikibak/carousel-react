import styled from 'styled-components';

const CardButton = styled.button`
   border: 1px solid #31135e;
   border-radius: 4px;
   background: #ffffff;
   color: #31135e;
   font-size: 1.6rem;
   font-weight: 800;
   padding: 16px 24px 16px 24px;
   transition: all 0.15s ease;
   margin: 1px;
   cursor: pointer;
   outline: none;
   &:hover {
      box-shadow: 0 0 0 1px #31135e;
   }
`;

export default function Button({ text }) {
   return <CardButton>{text}</CardButton>;
}
