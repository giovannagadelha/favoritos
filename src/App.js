import './App.css';
import Cabecalho from './componentes/Cabecalho'
import Rodape from './componentes/Rodape'
import Conteudo, {OlaMundo} from './componentes/Conteudo';

/*arquivo app jsx
componemte funcional - pq ele é uma função*/
function App() {
OlaMundo();
  /*todo componente deve retornar um html entre parentese*/
  return (
    /*o react substitui className por class pq class é uma palavra reservada do js */
    <>
    <img src='logo.png' alt=''></img>

    {/*nosso cabecalho tem uma propriedade chamada titulo*/}
    <Cabecalho logo="logo192.png" titulo= "Favoritos" subtitulo="o melhor gerenciador de favoritos"/>
    <Rodape/>
   <Conteudo/>
    </>
  );
}

export default App;
