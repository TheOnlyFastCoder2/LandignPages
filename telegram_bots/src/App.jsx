import Nav from "components/Nav";
import EmailConfirmer from "./components/EmailConfirmer";
import Advantages from "./components/Advantages";
import Works from "./components/Works";
import Tarrifs from "./components/Tariffs";
import Reviews from "./components/Reviews";
import Questions from "./components/Questions";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Nav/>
      <EmailConfirmer 
        className={'__Header'} 
        headline={'Высокий уровень вовлечения представителей'} 
        img={'/imgs/hero.png'}>
           <img src={'/imgs/hero.png'} alt="" />
        </EmailConfirmer>
      <Advantages/>
      <Works/>
      <Tarrifs/>
      <Reviews/>
      <EmailConfirmer 
        className={'__Test'} 
        headline={'Получите самую выгодную цену на планете'} 
        pathImg={'/imgs/hero.png'}> 
          <img src={'/imgs/sale.png'} alt="" />
        </EmailConfirmer>
    
      <Questions/>
      <Feedback/>
      <Footer/>
    </>
  )
}

export default App
