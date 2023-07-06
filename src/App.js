// import './style.css'
// import Content from './components/Content';
// import Header from './components/Header';
// import Main from './components/Main';
// import './styles/test.css'

// import Page from './Cards/Page';
// import Header from './components/Header'
// import './styles/card.css'

// import './styles/air_bnb.css'

// card kitten contacts 
// import Page from './Contact/ContactCard';
// import Cards from './Contact/SampleCards';

// import Home from "./Props/Home"

// import Cat from './data/cat-data';

// air bnb components
// import Navbar from "./Airbnb/Navbar"
// import Hero from "./Airbnb/Hero";
// import Card from "./Airbnb/Card";
// import data from './data/airbnb-data';

// Joke Components
// import Joke from "./JokeComponents/Joke"
// import JokeHeader from "./JokeComponents/Nav"
// import Data from "./data/jwk-src"

// import Home from "./Props/Home"

//Journal Components
import Navigation from "./Journal/JournalHeader";
import JournalCard from "./Journal/JournalCard";
import Journal from "./data/journal-data";
import "./styles/journal.css"


function App() {

  //Joke Components
  // const JokeData = Data.map((jokes)=>{

  //   return <Joke
  //   {...jokes}
  //   />

  // })

  // airbnb components
  
  // const airbnb = data.map((data)=>{

  //   return <Card
  //    key={data.id}
  //    {...data}
  //   />
    
  // })

  // console.log(airbnb)

  // const catdata = Cat.map((cat)=>{
    
  //   return <Cards
  //   {...cat}
  //   />

  // }) 

  const journalData = Journal.map((journal)=>{

    return <JournalCard {...journal}/>
  })

  return (

    <div>
      <Navigation/>
      {journalData}
      {/* <Home/> */}

     {/* <Navbar/>
    <Hero/>
    <div className="card-content">
      {airbnb}
    </div> */}


      {/* <JokeHeader/>
     {JokeData} */}
      {/* 
      <Header/>
      <Home/> */}

       {/* <Header/> */}
      {/* <Page/> */}
      {/* { catdata } */}


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

