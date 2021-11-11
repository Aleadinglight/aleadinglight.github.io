import 'bootstrap/dist/css/bootstrap.min.css'
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
    </div>
  );
}

export default App;
