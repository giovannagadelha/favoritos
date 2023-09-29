import './App.css';
import Cabecalho from './componentes/Cabecalho'
import Rodape from './componentes/Rodape'
import Conteudo from './componentes/Conteudo';


/*arquivo app jsx
componemte funcional - pq ele é uma função*/
function App() {
  /*todo componente deve retornar um html entre parentese*/
  return (
    /*o react substitui className por class pq class é uma palavra reservada do js */
    <>
    

    {/*nosso cabecalho tem uma propriedade chamada titulo*/}
    <Cabecalho logo="fav3.png" titulo= "Favoritos" subtitulo="o melhor gerenciador de favoritos" menu="menu ilustrativo"/>
    <Conteudo/>
    <Rodape logo1="whats.png" logo2="twitter.png" logo3="face.png" logo4="insta.png" />
    </>
  );
}

export default App;
