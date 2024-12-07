import { Container, Links, Content } from "./styles.js";
import { Button } from "../../components/Button/index.jsx";
import { Header } from '../../components/Header/index.jsx';
import { Section } from '../../components/Section/section.jsx';
import { ButtonText } from '../../components/ButtonText/index.jsx'
import { Tag } from '../../components/Tag/index.jsx'
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from '../../services/api.js';

export function Details() {

     const [data, setData] = useState(null);

     const params = useParams();
     const navigate = useNavigate();

     function handleBack(){
          navigate(-1);
     }

     async function handleRemove(){
          const confirm = window.confirm('Deseja remover a nota?');
          if (confirm) {
               await api.delete(`/notes/${params.id}`);
               handleBack();
          }
     }

     useEffect(()=> {
          async function fetchNote() {
               const response = await api.get(`/notes/${params.id}`);
               setData(response.data);
          }

          fetchNote();
     },[params.id])


     return (
          <Container>
               <Header />
               {
                    data &&
                    <main>
                         <Content>                
                              <ButtonText onClick={handleRemove}/>

                              <h1>
                                   {data.title}
                              </h1>

                              <p>
                                   {data.description}
                              </p>

                              {
                              data.links &&
                                   <Section title='Links Úteis'>
                                                                 <Links>
                                                                      {
                                                                           data.links && data.links.map(link => (
                                                                           <li key={String(link.id)}>
                                                                                <a href={link.url} target="_blank">
                                                                                     {link.url}
                                                                                </a>
                                                                           </li>
                                                                           ))
                                                                      }
                                                                 </Links>
                                   </Section>
                              }

                              {
                                   data.tags &&
                                   <Section title='Marcadores'>
                                        {
                                             data.tags.map((tag) => (
                                                  <Tag 
                                                  title={tag.name}
                                                  key={tag.id}
                                                  />
                                             ))
                                        }
                                   </Section>
                              }

                              <Button title="Voltar" loading onClick={handleBack}/>

                         </Content>
                    </main> 
               }            
          </Container>
     )
}

export default Details
