import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import TelaInicial from './TelaInicial';
import {Container} from 'reactstrap';
import Login from './Login';

const App = () => {
  return (
    <Container className={"App"}>
      <div>
        <Routes>
          <Route path="/inicial" 
            element={<TelaInicial/>} />
          <Route path='/login'
            element={<Login/>} />
        </Routes>
      </div>
    </Container>
  )
}

export default App;