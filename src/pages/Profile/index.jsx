import { Container, Form, Avatar } from './styles';
import { FiArrowLeft } from '@react-icons/all-files/fi/FiArrowLeft';
import { FiUser } from '@react-icons/all-files/fi/FiUser';
import { FiMail } from '@react-icons/all-files/fi/FiMail';
import { FiLock } from '@react-icons/all-files/fi/FiLock';
import { FiCamera } from '@react-icons/all-files/fi/FiCamera';
import { Input } from '../../components/Input/index'
import { Button } from '../../components/Button/index'
import { Link } from 'react-router-dom';

export function Profile(){
   return(
      <Container>
         <header>
            <Link to={'/'}>
               <FiArrowLeft />
            </Link>
         </header>

         <Form>
            <Avatar>
               <img src="https://github.com/marluswm.png" alt="Foto Usuário" />
               <label htmlFor="avatar"> 
                  <FiCamera />
                  <input type="file" id='avatar' />
               </label>
            </Avatar>
            <Input placeholder='Nome' type='text' icon={FiUser}/>            
            <Input placeholder='Email' type='text' icon={FiMail}/>
            <Input placeholder='Senha Atual' type='password' icon={FiLock}/>
            <Input placeholder='Nova Senha' type='password' icon={FiLock}/>
            <Button title='Salvar'/>
         </Form>
      </Container>
   )
}