import { Container, Links } from "./styles.js";
import { Button } from "../../components/button/index.jsx";
import { Header } from '../../components/Header/index.jsx';
import { Section } from '../../components/Section/section.jsx';

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
               <Button title="Voltar" loading/>
               
          </Container>
     )
}

export default Details
