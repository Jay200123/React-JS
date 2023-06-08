// import './style.css'
// import Content from './components/Content';
// import Header from './components/Header';
// import Main from './components/Main';
import './test.css'

// import Page from './Cards/Page';
// import Header from './components/Header'
// import './card.css'

// import './air_bnb.css'
// import Main from './Airbnb/Main'
// import Page from './Contact/ContactCard';
import Cards from './Contact/SampleCards'
import Kitten1 from './images/kitten-test.jpg'
import Kitten2 from './images/kitten1.jpg'
import Kitten3 from './images/kitten2.jpg'
import Kitten4 from './images/kitten3.jpg'

function App() {
  return (
    <div>
      {/* <Page/> */}

      <Cards 
      
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

      />

      {/* <Main/> */}

      {/* <Header/>
      <Page/> */}

      {/* <Header/>
      <Main/> */}
      {/* <Content/> */}
    </div>
    
  );
}

export default App;

