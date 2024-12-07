import { Container, Profile, Logout } from './style';
import { RiShutDownLine } from '@react-icons/all-files/ri/RiShutDownLine'
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';


export function Header(){

     const { signOut, user } = useAuth();
     const navigation = useNavigate();

     function handleSignOut(){
          navigation('/');
          signOut();
     }

     const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

     return(
          <Container>
               <Profile to='/profile'>                    
                    <img src='https://github.com/marluswm.png' alt='Foto usuário'/>

                    <div>
                         <span>Bem vindo</span>
                         <strong>Marlus Weber</strong>
                    </div>
               </Profile>

               <Logout onClick={handleSignOut}>
               <RiShutDownLine/>
               </Logout>

          </Container>
     )
}