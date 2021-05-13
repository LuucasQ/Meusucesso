import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 90%;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`;

export const Card = styled.div`
   margin: 3rem;
   img {
      overflow: hidden;
      -moz-transition: all 0.3s;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
   }

   img:hover {
      -moz-transform: scale(1.3);
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
   }

`;