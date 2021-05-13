import { Container, ContentLateralOne, ContentLateralTwo } from './style';

import { HiHome } from 'react-icons/hi';
import { BiPlusCircle } from 'react-icons/bi';
import { BsFillPlayFill } from 'react-icons/bs';
import { GiBackwardTime } from 'react-icons/gi';
import { FiHelpCircle } from 'react-icons/fi';
import { BsBoxArrowRight } from 'react-icons/bs';

function MenuLateral() {
   return (
      <Container>
         <ContentLateralOne>
            <a href="#">
               <HiHome 
                  size="1.8rem"
               />
            </a>

            <a href="#">
               <BiPlusCircle 
                  size="1.8rem"
               />
            </a>

            <a href="#">
               <BsFillPlayFill 
                  size="2.5rem"
               />
            </a>

            <a href="#">
               <GiBackwardTime 
                  size="1.8rem"
               />
            </a>
         </ContentLateralOne>


         <div 
            className="menu_linha"
            style={{
               width: "50%",
               height: "0.01rem",
               background: "#8B8989"
            }}
         />


         <ContentLateralTwo>
            <a href="#" style={{color: "#fff", fontWeight: 400, borderRadius: "50%", background: "#F16725"}}>
                  GS
            </a>
            <a href="#">
               <FiHelpCircle style={{}}
                  size="1.5rem"
               />
            </a>
            <a href="#">
               <BsBoxArrowRight 
                  size="1.8rem"
               />
            </a>
         </ContentLateralTwo>
      </Container>
   );
}

export default MenuLateral;