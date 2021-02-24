import logo from './logo.svg';
import './App.css';
import Card from './components/cards'
import CardDeck from 'react-bootstrap/CardDeck'
import CardColumn from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/CardColumns'
import CardGroup from 'react-bootstrap/CardGroup'
import 'bootstrap/dist/css/bootstrap.min.css';
import Players from './players.json';
import {
  Route,
  Switch,
  Link,
  NavLink,
  Redirect,
  useParams,
  useRouteMatch
} from 'react-router-dom';
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function myFunction() {
  document.getElementById("ThisCard").style.visibility = "hidden";
}
var getrand =0
getrand = getRandomInt(8)+1
function App() {
  return (
    <div className="App">
      <div>
      <Card 
      title="Guess Me" 
      name={Players[getrand].name} 
      btag = {Players[getrand].btag} 
      imagelink={Players[getrand].Image} 
      Teams={Players[getrand].Teams.map((key)=> <il> {key} </il>)} >
      </Card>
      </div>
      

      <div style={{height:'25px', maxHeight:'25px'}}>
      {Object.keys(Players).map(key => {{ console.log(Players[key].name) };
                    return  <Card id="ThisCard" onclick="myFunction()"
                    title="Click to Remove" 
                    btag = {Players[key].btag} 
                    imagelink={Players[key].Image} 
                    Teams={Players[key].Teams.map((key2)=> <il></il>)}
                     >
                    </Card>})}
                    </div>
    </div>
  );
}

export default App;
