import 'bootstrap/dist/css/bootstrap.min.css'
//import logo from './logo.svg'
import './App.css'
import './components/common/Common.css'
import LandingPage from './components/landingpage/LandingPage'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Porfolio from './components/porfolio/Porfolio'
import Contact from './components/contact/Contact'
import MyFooter from './components/myfooter/MyFooter'
import MyNavbar from './components/mynavbar/MyNavbar'

function App() {
  return (
    <div className="App">
      <LandingPage />
      <MyNavbar />
      <About />
      <Experience />
      <Porfolio />
      <Contact />
      <MyFooter />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
