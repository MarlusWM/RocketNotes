import { Container, Form } from './style';
import { Input } from '../../components/Input/index'
import { FiMail } from '@react-icons/all-files/fi/FiMail'
import { FiLock } from '@react-icons/all-files/fi/FiLock'
import { Button } from '../../components/Button/index'
import { Background } from './style';

export function SignIn(){
   return(
      <Container>
         <Form>
            <h1>Rocket Note</h1>
            <p>Aplicação para salvar e gerenciar seus links úteis</p>
            <h2>Faça seu login</h2>

            <Input placeholder='email' type='text' icon={FiMail}/>
            <Input placeholder='senha' type='password' icon={FiLock}/>
            <Button title={'Entrar'}/>

            <a href="#">Criar conta</a>
         </Form>

         <Background />
      </Container>
   )
}