import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 10%;
   background: #212121;
   display: flex;
   align-items: center;
`;

export const ContentTopoOne = styled.div`
   width: 15%;
   margin: 1.3rem 0 2rem 1rem;

   a {
      display: flex;
      flex-direction: column;
      align-items: center;


      img {
         width: 85%;
      }

      p {
         font-size: 0.88rem;
         color: #8B8989;
         font-style: italic;
      }

   }
   
`;

export const ContentTopoTwo = styled.div`
   width: 25%;
   display: flex;
   flex-direction: row;

   a {
      font-size: 1.2rem;
      color: #696969;
      margin: 0 0 1rem 2rem;
   }
`;

export const ContentTopoThree  = styled.div`
   margin-left: 50rem;
`;