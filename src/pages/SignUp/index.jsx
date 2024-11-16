import { Container, Form } from './style';
import { Input } from '../../components/Input/index'
import { FiUser } from '@react-icons/all-files/fi/FiUser'
import { FiMail } from '@react-icons/all-files/fi/FiMail'
import { FiLock } from '@react-icons/all-files/fi/FiLock'
import { Button } from '../../components/Button/index'
import { Background } from './style';

export function SignUp(){
   return(
      <Container>
         
         <Background />

         <Form>
            <h1>Rocket Note</h1>
            <p>Aplicação para salvar e gerenciar seus links úteis</p>
            <h2>Crie sua conta</h2>

            <Input placeholder='nome' type='text' icon={FiUser}/>
            <Input placeholder='email' type='text' icon={FiMail}/>
            <Input placeholder='senha' type='password' icon={FiLock}/>
            <Button title={'Cadastrar'}/>

            <a href="#">Voltar para login</a>
         </Form>
      </Container>
   )
}