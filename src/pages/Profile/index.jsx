import { Container, Form, Avatar } from './styles';
import { FiArrowLeft } from '@react-icons/all-files/fi/FiArrowLeft';
import { FiUser } from '@react-icons/all-files/fi/FiUser';
import { FiMail } from '@react-icons/all-files/fi/FiMail';
import { FiLock } from '@react-icons/all-files/fi/FiLock';
import { FiCamera } from '@react-icons/all-files/fi/FiCamera';
import { Input } from '../../components/Input/index'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { Button } from '../../components/Button/index'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

export function Profile(){

   const { user, updateProfile } = useAuth();

   const [name, setName] = useState(user.name);
   const [email, setEmail] = useState(user.email);
   const [passwordOld, setPasswordOld] = useState();
   const [passwordNew, setPasswordNew] = useState();

   const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
   const [avatar, setAvatar] = useState(avatarUrl);
   const [avatarFile, setAvatarFile] = useState(null);

   async function handleUpdate() {
      const user = {
         name,
         email,
         old_password: passwordOld,
         password: passwordNew
      }
      await updateProfile({ user, avatarFile });
   }

   function handleChangeAvatar(event){
      const file = event.target.files[0];
      setAvatarFile(file);

      const imagePreview = URL.createObjectURL(file);
      setAvatar(imagePreview);
   }

   return(
      <Container>
         <header>
            <Link to={'/'}>
               <FiArrowLeft />
            </Link>
         </header>

         <Form>
            <Avatar>
               <img src={avatar} alt="Foto Usuário" />
               <label htmlFor="avatar"> 
                  <FiCamera />
                  <input type="file" id='avatar' onChange={handleChangeAvatar}/>
               </label>
            </Avatar>
            <Input placeholder='Nome' type='text' icon={FiUser} value={name} onCHange={e => setName(e.target.value)}/>            
            <Input placeholder='Email' type='text' icon={FiMail} value={email} onCHange={e => setEmail(e.target.value)}/>
            <Input placeholder='Senha Atual' type='password' icon={FiLock} onCHange={e => setPasswordOld(e.target.value)}/>
            <Input placeholder='Nova Senha' type='password' icon={FiLock} onCHange={e => setPasswordNew(e.target.value)}/>
            <Button title='Salvar' onClick={handleUpdate}/>
         </Form>
      </Container>
   )
}