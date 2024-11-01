import { Container } from "./styles.js";
import { Button } from "../../components/button/index.jsx";

function Details() {

     return (
          <Container>
               <h1>Hello World!</h1>
               <Button title="Entrar" loading/>
               <Button title="Salvar"/>
               <span>Regra do ReactJS</span>
          </Container>
     )
}

export default Details
