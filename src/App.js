import Alphabet from './Alphabet';
import './App.css';
import Card from './Card';
import Company from './Company';
import Footer from './Footer';
import Search from './Search';

function App() {
  return (
    <div className="app">
      <div className="App">
      <div className="app_head">
        <p className="nav"><b>Home &nbsp;</b> {">"} &nbsp; All Stores</p>
      </div>
      <div className="content">
        <div className="app_left">
          <Card/>  
        </div>
        <div className="app_right">
          <h1>Lorem Ipsum Dollar</h1>
          <Search/>
          <Alphabet/>
          <Company/>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
