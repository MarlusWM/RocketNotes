import { Container, Form } from './styles';
import { Header } from '../../components/Header'
import { Input } from '../../components/Input/index'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section/section'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom';

export function New(){
   return(
      <Container>
         <Header />
         <main>
            <Form>
               <header>
                  <h1>Criar Nota</h1>
                  <Link to='/'>Voltar</Link>
               </header>

               <Input placeholder='Título'/>

               <TextArea placeholder='observações'/>

               <Section title='Links Úteis'>
                  <NoteItem value='htts://gmail.com'/>
                  <NoteItem placeholder='Novo link' isNew/>
               </Section>

               <Section title='Marcadores'>
                  <div className="tags">
                     <NoteItem value= 'react'/>
                     <NoteItem placeholder='Nova tag' isNew/>
                  </div>
               </Section>

               <Button title='Salvar'/>
               
            </Form>
         </main>
      </Container>
   )
}