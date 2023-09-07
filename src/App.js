import logo from './logo.svg';
import './Styles.css';
import CardTwo from './components/CardTwo';
import suvs from './images/icon-suvs.svg';
import sedans from './images/icon-sedans.svg';
import luxury from './images/icon-luxury.svg';



function App() {
  return (
    <div className='card-container'>    
    <CardTwo name='SEDANS' body= 'The pearl of Africa' imgURL={sedans} color='me'/>
    <CardTwo name='SUVS' body= 'Another mirracles'imgURL={suvs} color='you'/>
    <CardTwo name='LUXURY' body='East to West home is the base'imgURL={luxury} color='we'/>
    </div>
  );
}

export default App;
