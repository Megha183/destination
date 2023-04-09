import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Destinations from './Components/Destinations';
import View from './Components/View';

import {Route ,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
   <Route path='/' element={<Destinations></Destinations>}></Route>
   <Route path='view/:id'element={ <View></View> }></Route>
   </Routes>

   <Footer></Footer>
    </div>
  );
}

export default App;
