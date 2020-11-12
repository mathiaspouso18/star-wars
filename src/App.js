import './assets/css/App.css';
import CharacterList from "./components/CharacterList"
import Character from './components/Character.js';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App"></div>
      <header className="App-header">
      <seccion className="componentes" styles="width:1000px, color: rgb(255, 254, 254);">
        <p styles="font-family:'Arial', font-size:30px"> Personajes de Star wars</p>
      </seccion>
      </header>
      <Switch>
        <Route path="/" exact component={CharacterList}></Route>
        <Route path={"/Character/:id"} component={Character}></Route>
      </Switch>
    </Router>
  );
}

export default App;
