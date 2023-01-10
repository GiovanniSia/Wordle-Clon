import './App.css';
import GrillaPrincipal from './componentes/GrillaPrincipal';

function App() {
  return (
    <div className="App">
      <GrillaPrincipal pCorrecta={'CABLE'} cantLet={5} cantInt={6} ></GrillaPrincipal>
    </div>
  );
};
export default App;
