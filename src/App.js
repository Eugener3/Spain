import { Facts } from "./components/facts/Facts";
import  {Header} from "./components/header/Header";
import {MainBg} from "./components/mainBg/MainBg";
import { Marquees } from "./components/marquee/Marquees";
import Slider from "./components/slider/Slider";
import Places from './components/places/Places';
import Footer from './components/footer/Footer';
import "./root.css"




function App() {
  return (
    <div className="App">
        <Header/>
        <MainBg/>
        <Marquees/>
        <Facts/>
        <Slider/>
        <Places/>
        <Footer/>

    </div>
  );
}

export default App;
