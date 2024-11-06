import { Container, Links, Content } from "./styles.js";
import { Button } from "../../components/Button/index.jsx";
import { Header } from '../../components/Header/index.jsx';
import { Section } from '../../components/Section/section.jsx';
import { ButtonText } from '../../components/ButtonText/index.jsx'
import { Tag } from '../../components/Tag/index.jsx'

function Details() {

     return (
          <Container>
               <Header />

               <main>
                    <Content>                
                         <ButtonText title="Excluir Nota"/>

                         <h1>
                              Introdução ReactJS
                         </h1>
                         <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, eos molestias magni, reiciendis, porro obcaecati illo assumenda quasi ad in itaque quidem? Sunt, pariatur. Asperiores qui modi impedit reprehenderit maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sunt, sapiente iste iusto quidem atque aliquid cumque ad nam non nobis. Reprehenderit eaque ipsum minima quod inventore nostrum temporibus pariatur?
                         </p>

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

                    </Content>
               </main>             
          </Container>
     )
}

export default Details
