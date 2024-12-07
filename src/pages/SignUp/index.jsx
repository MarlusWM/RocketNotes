import { Container, Form } from './style';
import { Input } from '../../components/Input/index'
import { FiUser } from '@react-icons/all-files/fi/FiUser'
import { FiMail } from '@react-icons/all-files/fi/FiMail'
import { FiLock } from '@react-icons/all-files/fi/FiLock'
import { Button } from '../../components/Button/index'
import { Background } from './style';
import { Link,useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { api } from "../../services/api";


export function SignUp(){

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword]= useState('');
   const navigate = useNavigate;

   function handleBack(){
      navigate(-1);
   }

   function handleSignUp(){
      if (!name || !email || !password) {
         return alert('Preenche todos os campos');
      }

      api.post('/user', {name, email, password})
      .then(() => {
         alert('Usuário cadastrado com sucesso!');
         handleBack();
      })
      .catch(err => {
         if (err.response) {
            alert(err.response.data.message);
         } else{
            alert('Não foi possível cadastrar')
         }
      });
   }

   return(
      <Container>
         
         <Background />

         <Form>
            <h1>Rocket Note</h1>
            <p>Aplicação para salvar e gerenciar seus links úteis</p>
            <h2>Crie sua conta</h2>

            <Input placeholder='nome' type='text' icon={FiUser} onChange={e => setName(e.target.value)}/>
            <Input placeholder='email' type='text' icon={FiMail} onChange={e => setEmail(e.target.value)}/>
            <Input placeholder='senha' type='password' icon={FiLock} onChange={e => setPassword(e.target.value)}/>
            <Button title={'Cadastrar'} onClick={handleSignUp}/>

            <Link onClick={handleBack}>Voltar para login</Link>
         </Form>
      </Container>
   )
}