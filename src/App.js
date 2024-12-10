import './App.css';
import './style.css';
// import Contacts from './components/contacts';
import Toptext from './components/toptext';
import Carousel from './components/courusel';
import ContactForm from './components/contactForm';
import Blockinfo from './components/blockInfo';
import BlockinfoTwo from './components/blockInfoTwo';
import Userblock from './components/userblock';

function App() {
  return (
    <div class="header">
      {/* <Contacts /> */}
      <Toptext />
      <Blockinfo />
      <Carousel />
      <BlockinfoTwo />
      {/* <Project /> */}
      <Userblock />
      <ContactForm />
    </div>
  );
}
export default App;