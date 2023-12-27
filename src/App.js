import { useState } from 'react';
import './App.css';
import Analog from './components/analog/analog';
import Digital from './components/digital/digital';
import Normalswitch from './components/switch/normal/NormalSwitch';
import Slideswitch from './components/switch/slide/SlideSwitch';

function App() {

  const [digital, setDigital] = useState(false);

  const changeClockType = () => {
    setDigital(!digital);
  }

  return (
    <div className="App">
      <section>
        <div className='clockspace'>
          {(digital) ? <Digital /> : <Analog />}
        </div>      
        <div className='time_clock_type'>
          <div className='clock_type'>Change Clock Type</div>
          {/* <div className='clock_type_names'> */}
            {/* <span>Analog Clock</span> */}
            {/* <Normalswitch click={changeClockType}/> */}
            {/* <span>Digital Clock</span> */}
          {/* </div> */}
          <div className='place_switch_clock_type'>
            <Slideswitch off="Digital" on="Analog" id="clock_type" click={changeClockType} />
          </div>
        </div>
      </section>
      <footer>
        Design & Develop by <span>Subhajit Dey</span>
      </footer>
    </div>
  );
}

export default App;
