
import { Navbar } from './components/Navbar';
import mainbg from './assets/mainbg.png'
import vec1 from './assets/vec1.png'
import { Lobby } from './components/Lobby';
import mic from './assets/mic.png'
import { Aboutpage } from './components/aboutpage';
import { Phases } from './components/Phases';

function App() {
  return (
    <div>
     <Navbar/>
      
      
      <section className='home' id='home'>
    
     <div className='overlay'></div>
    <div className='grid grid-rows-2'>
    <div className='box1'>
          <p className='maintext '>Communication <br/>works for those who<br/> work at it <br/></p>
<p className='maintext mt-1'>- John Powell</p>
<button class="button1 text-white font-bold py-2 px-4 mt-2 rounded">
  REGISTER NOW
</button>

        </div>
    <div className='-z-10  w-full   '>
        <img src={mainbg} className="mainbg absolute top-0 mb-5"/>
        </div>
        
    
    
    </div>
      </section>
     <Lobby/>

     <section id='about'>
      <Aboutpage/>
     </section>

     <section className='phases' id="phases">
      <Phases/>

     </section>

     </div>
     
  );
}

export default App;
