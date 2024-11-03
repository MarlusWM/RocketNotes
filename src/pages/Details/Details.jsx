import { Container, Links } from "./styles.js";
import { Button } from "../../components/button/index.jsx";
import { Header } from '../../components/Header/index.jsx';
import { Section } from '../../components/Section/section.jsx';
import { Tag } from '../../components/Tag/index.jsx'

function Details() {

     return (
          <Container>
               <Header />
               <Section title='Links Úteis'>
                    <Links>
                         <li><a href="#">www.google.com</a></li>
                         <li><a href="#">www.google.com</a></li>
                    </Links>
               </Section>

               <Section title='Marcadores'>
                    <Tag title='Link 1'/>
                    <Tag title='Link 1'/>
               </Section>

               <Button title="Voltar" loading/>               
          </Container>
     )
}

export default Details
