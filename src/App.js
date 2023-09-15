import './App.css';
import Cabecalho from './componentes/Cabecalho'
import Rodape from './componentes/Rodape'
import Conteudo from './componentes/Conteudo';
import Estados from './exemplos/Estados';

/*arquivo app jsx
componemte funcional - pq ele é uma função*/
function App() {
OlaMundo();
  /*todo componente deve retornar um html entre parentese*/
  return (
    /*o react substitui className por class pq class é uma palavra reservada do js */
    <>
    

    {/*nosso cabecalho tem uma propriedade chamada titulo*/}
    <Cabecalho logo="fav.png" titulo= "Favoritos" subtitulo="o melhor gerenciador de favoritos" menu="menu ilustrativo"/>
    <Conteudo/>
    <Rodape logo1="logo1.png" logo2="logo2.png" logo3="logo3.png" />
    </>
  );
}

export default App;
