import styled from 'styled-components';

export const Container = styled.div`
   width: 5%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;

   a:hover {
         color: #F16725;
      }

   .menu_linha {
      margin: 4rem 0 2rem 0;
   }
`;

export const ContentLateralOne = styled.div`
   width: 100%;
   height: 40%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   margin-top: 10rem;

   a {
      padding: 2rem 0;
   }
`;

export const ContentLateralTwo = styled.div`
   width: 100%;
   height: 20%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   
   margin: 2rem 0 0 0;

   a + a {
      padding: 1rem 0 0.5rem 0;
   }

   a:nth-child(1){
      width: 2.8rem;
      height: 2.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
   }
`;