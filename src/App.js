import logo from './logo.svg';
import './App.css';
import Card from './components/cards'
import GuessCard from './components/guesscard'

import 'bootstrap/dist/css/bootstrap.min.css';
import Players from './players.json';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var getrand =0
getrand = getRandomInt(8)+1
function App() {
  return (
    <div className="App">
      <div class="split left" style={{margin:"auto"}}>
        <div style={{background:"black" , margin:"20px"}}>
        <h1 style={{color:"white"}}>GUESS <br/>WH-OWL</h1>
        </div>
      <div style={{background:"black", margin:"20px" , padding:"5px", paddingTop:"15px"}}>
      <GuessCard 
      title="Guess Me" 
      name={Players[getrand].name} 
      btag = {Players[getrand].btag} 
      imagelink={Players[getrand].Image}
      cantdelete={true}
      Teams={Players[getrand].Teams.map((key)=> <il> {key} </il>)} >
      </GuessCard>
      <h1 style={{ color:"white"}}>{Players[getrand].btag} </h1>
      </div>
      </div>
      <div class="split right">
      <div style={{height:'25px', paddingLeft:"10px",paddingRight:"10px" ,maxHeight:'25px', display:"flex", flexWrap:"wrap"}}>
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
    </div>
  );
}

export default App;
