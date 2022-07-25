import './App.css';
import Hero from './component/Hero/Hero';
import Programs from './component/Programs/Programs';
import Reasions from './component/Reasions/Reasions';
import Plans from './component/Palns/Plans';
import Testimonials from './component/Testimonials/Testimonials';
import Join from './component/Join/Join';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasions />
      <Plans />
      <Testimonials />
      <Join />
    </div>
  );
}

export default App;
