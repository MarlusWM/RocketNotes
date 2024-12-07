import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { Header } from '../../components/Header/index';
import { ButtonText } from '../../components/ButtonText/index';
import { FiPlus} from '@react-icons/all-files/fi/FiPlus'
import { FiSearch} from '@react-icons/all-files/fi/FiSearch'
import { Input } from '../../components/Input/index'
import { Section } from '../../components/Section/section'
import { Note } from '../../components/Note/index'
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function Home() {

   const [tags, setTags] = useState([]);
   const [tagsSelected, setTagsSelected] = useState([]);

   const [search, setSearch] = useState('');

   const [notes, setNotes] = useState('');

   const navigate = useNavigate();


   function handleTagSelected(tagName){
      if (tagName === 'all') {
         return setTagsSelected([]);
      }

      const alreadySelected = tagsSelected.includes(tagName);

      if (alreadySelected) {
         const filteredTags = tagsSelected.filter(tag => tag !== tagName);
         setTagsSelected(filteredTags);
      }else {
         setTagsSelected(prevState => [...prevState, tagName]);
      }
   }

   function handleDetails(id){
      navigate(`/details/${id}`);
   }

   useEffect(() => {
      async function fetchTags() {
         const response = await api.get('/tags');
         setTags(response.data);
      }

      fetchTags();

   }, []);

   useEffect(() => {
      async function fetchNotes() {
         const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
         setNotes(response.data);
      }

      fetchNotes();

   }, [tagsSelected, search])
   

   return(
      <Container>
         <Brand>
            <h1>RocketNotes</h1>
         </Brand>

         <Header/>

         <Menu>
            <li><ButtonText title='Todos' isActive={tagsSelected.length === 0} onClick={() => handleTagSelected('all')}/></li>

            {
               tags && tags.map(tag => (
                  <li key={String(tag.id)}>
                     <ButtonText 
                        title={tag.name}
                        onClick={() => handleTagSelected(tag.name)}
                        isActive={tagsSelected.includes(tag.name)}
                     />
                  </li>
               ))
            }
         </Menu>

         <Search>
            <Input 
            placeholder='Pesquisar pelo título' 
            icon={FiSearch}
            onChange={(e)=> setSearch(e.target.value)}
            />
         </Search>

         <Content>
            <Section title='Minhas Notas'>
               {
                  notes.map(note => (
                  <Note 
                  key={String(note.id)}
                  data={note}
                  onClick={() => handleDetails(note.id)}
                  >
                  </Note>
                  ))
               }
            </Section>
         </Content>

         <NewNote to='/new'>
            <FiPlus/>
            Cria Nota
         </NewNote>
      </Container>
   )
}