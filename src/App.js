import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import PollingStation from './components/PollingStation';
import VoteCounting from './components/VoteCounting';
import TotalVote from './components/TotalVote';

function App() {
  return (
    <div className="container App">
      <h1 className="alert alert-info">ONLINE VOTING APP</h1>
      <div className="row " style={{padding:'5px',justifyContent: 'center'}}>
         <PollingStation number='1'/>
        <PollingStation number='2'/>
        <PollingStation number='3'/>
      </div>
      <hr/>
      <div className="row " style={{padding:'5px',justifyContent: 'center'}}>
        <hr/>
        <VoteCounting number='1'/>
        <VoteCounting number='2'/>
        <VoteCounting number='3'/> 
        <TotalVote/>

      </div>
       
    </div>
  );
}

export default App;
