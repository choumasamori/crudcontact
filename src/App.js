import './App.css';
import {Container} from 'react-bootstrap'
import { BrowserRouter as Router , Route} from 'react-router-dom'
import Header from './component/Header.js'
import Footer from './component/Footer.js'
import HomeScreen from './screens/HomeScreen.js'
import ContactScreen from './screens/ContactScreen.js'
function App() {
  return (
    <Router>
      <Header />
        <Container>
          <main>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/contact/:id' component={ContactScreen} exact />
          </main>
        </Container>
        
      <Footer />
    </Router>
  );
}

export default App;
