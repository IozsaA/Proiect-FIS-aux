import './App.css';
import React from 'react';
import Footer from './components/Footer'
// import Barchart from './components/barchart'
import NavigationBar from './components/NavigationBar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from "react-router-dom";
import Students from './components/Student';


class App extends React.Component {
  render(){
    return (
      <div>
        <React.Fragment>
          <Router>
            <NavigationBar />
          </Router>
        </React.Fragment>
        <Students />
        <Footer />
      </div>
    )
  }
}

export default App;
