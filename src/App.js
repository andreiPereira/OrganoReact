import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome" placeholder="o seu nome"/>
      <CampoTexto label="Cargo" placeholder="o seu cargo"/>
      <CampoTexto label="Imagem" placeholder="o endereço da imagem"/>
    </div>
  );
}

export default App;
