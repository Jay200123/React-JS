// import './style.css'
// import Content from './components/Content';
// import Header from './components/Header';
// import Main from './components/Main';
// import './test.css'

// import Page from './Cards/Page';
// import Header from './components/Header'
// import './card.css'

import './air_bnb.css'
// import Page from './Contact/ContactCard';
// import Cards from './Contact/SampleCards'
// import Kitten1 from './images/kitten-test.jpg'
// import Kitten2 from './images/kitten1.jpg'
// import Kitten3 from './images/kitten2.jpg'
// import Kitten4 from './images/kitten3.jpg'
// import Home from "./Props/Home"
import Navbar from "./Airbnb/Navbar"
import Hero from "./Airbnb/Hero";
import Card from "./Airbnb/Card";

import bnb1 from "./images/airbnb-bg.png"
import bnb2 from "./images/bnb1.png"
import bnb3 from "./images/bnb3.png"
import bnb4 from "./images/bnb2.png"


function App() {
  return (
    <div>
      {/* <Header/>
      <Home/> */}
      {/* <Page/> */}

      {/* <Cards 

      image={Kitten1}
      name="Fluffs" //there are props being passed down to Cards Component
      phone="09123456789"
      email="mrfluffs@gmail.com"

      />

      <Cards

       image={Kitten2}
       name="Furball"
       phone="09246810"
       email="mrfurball@gmail.com" 

      />
      
      <Cards

       image={Kitten3}
       name="SoftBall"
       phone="09368912"
       email="mrsoft@gmail.com" 

      />

      <Cards

       image={Kitten4}
       name="Shitten"
       phone="09481216"
       email="mrshittens@gmail.com" 

      /> */}

      {/* <Main/> */}

      {/* <Header/>
      <Page/> */}

      {/* <Header/>
      <Main/> */}
      {/* <Content/> */}

      <Navbar/>

            <Hero/>
            <div className="card-content">

            <Card
            images = {bnb1}
            country = "Philippines"
            header = "airbnb PH"
            rating = "5.1"
            />

            <Card
            images = {bnb2}
            country = "USA"
            header = "airbnb US"
            rating = "5.2"
            />

            <Card
            images = {bnb3}
            country = "UK"
            header = "airbnb UK"
            rating = "5.3"
            />

            <Card
            images = {bnb4}
            country = "Canada"
            header = "airbnb Canada"
            rating = "5.4"
            />
            </div>

    </div>
    
  );
}

export default App;

