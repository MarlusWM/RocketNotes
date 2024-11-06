import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { Header } from '../../components/Header/index';
import { ButtonText } from '../../components/ButtonText/index';

export function Home() {
   return(
      <Container>
         <Brand>
            <h1>RocketNotes</h1>
         </Brand>

         <Header></Header>

         <Menu>
            <li>
               <ButtonText title='Todos' isActive />
            </li>
            <li>
               <ButtonText title='RectJS'/>
            </li>
            <li>
               <ButtonText title='NodeJS'/>
            </li>
         </Menu>
         <Search></Search>
         <Content></Content>
         <NewNote></NewNote>
      </Container>
   )
}