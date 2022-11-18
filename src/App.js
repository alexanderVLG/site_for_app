import React, {Component} from 'react';
import Navbar from './components/Navbar';
import ExplainSection from './components/ExplainSection';
import ExplainSection2 from './components/ExplainSection2';
import ExplainSection3 from './components/ExplainSection3';
import ExplainSection4 from './components/ExplainSection4';
import FormSection from './components/FormSection';
import Footer from './components/Footer';
class App extends Component {
  render () {
    return (
      <>
        <Navbar/>
        <main>
          <ExplainSection/>
          <ExplainSection2/>
          <ExplainSection3/>
          <ExplainSection4/>
        </main>
        <FormSection/>
        <Footer/>
      </>
    );
  }
}

export default App;