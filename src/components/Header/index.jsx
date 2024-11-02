import { Container, Profile, Logout } from './style';
import { RiShutDownLine } from '@react-icons/all-files/ri/RiShutDownLine'


export function Header(){
     return(
          <Container>
               <Profile>                    
                    <img src='https://github.com/marluswm.png' alt='Foto usuário'/>

                    <div>
                         <span>Bem vindo</span>
                         <strong>Marlus Weber</strong>
                    </div>
               </Profile>

               <Logout>
               <RiShutDownLine/>
               </Logout>

          </Container>
     )
}