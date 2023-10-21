import './App.css';
import Content from './Content';
import Fashion from './Fashion';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import Smallimg from './smallimg';

function App() {
  return (
    <div className="App">
    <Header/>
    <hr />
    <Nav/>
    <Smallimg/>
    <Content/>
    <Fashion/>
    <Footer/>
    </div>
  );
}

export default App;
