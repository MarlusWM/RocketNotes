import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { Header } from '../../components/Header/index';
import { ButtonText } from '../../components/ButtonText/index';
import { FiPlus} from '@react-icons/all-files/fi/FiPlus'
import { FiSearch} from '@react-icons/all-files/fi/FiSearch'
import { Input } from '../../components/Input/index'
import { Section } from '../../components/Section/section'
import { Note } from '../../components/Note/index'

export function Home() {
   return(
      <Container>
         <Brand>
            <h1>RocketNotes</h1>
         </Brand>

         <Header/>

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

         <Search>
            <Input placeholder='Pesquisar pelo título' icon={FiSearch}/>
         </Search>

         <Content>
            <Section title='Minhas Notas'>
               <Note data={{title:'React', tags:[
                  {id:'1', name: 'react'},
                  {id:'2', name:'rocket'}
               ]}}>
               </Note>
            </Section>
         </Content>

         <NewNote to='/new'>
            <FiPlus/>
            Cria Nota
         </NewNote>
      </Container>
   )
}