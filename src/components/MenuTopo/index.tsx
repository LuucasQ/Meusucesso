import { Container, ContentTopoOne, ContentTopoTwo, ContentTopoThree } from './style';

import LogoSucesso from '../../assets/images/logo-sucesso.png';
import { IoSearch } from 'react-icons/io5';


function MenuTopo() {
   return (
      <Container>
         <ContentTopoOne>
            <a href="">
               <img src={LogoSucesso} alt="meuSucesso.com" />
               <p>ESCOLA DE EMPREENDEDORES</p>
            </a>
         </ContentTopoOne>

         <ContentTopoTwo>
            <a href="">Estudos de caso</a>
            <a href="">Séries</a>
            <a href="">Biblioteca</a>
         </ContentTopoTwo>

         <ContentTopoThree>
            
            <a 
               href="" 
               style={{
                  margin: "auto 2rem" 
               }}>
               <IoSearch
                  size="1.8rem"
                  color="#fff"
               
                  />
            </a>
         </ContentTopoThree>
         
      </Container>
   );
}

export default MenuTopo;