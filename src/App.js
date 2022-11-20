import './App.css';
import Content from './Component/Content';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Searchpage from './Component/Searchpage';
import { useState } from 'react';

function App() {

  const [searchValue,SetsearchValue] = useState();
  const additem = (searchData)=>{SetsearchValue(searchData)};

  return (
    <div className="App">
      <Router>
        <Routes>  
          <Route path='/' element={<><Header addnewitem ={additem} /> 
            <div className='AppPage'> 
              <Sidebar/> 
              <Content/>
            </div></>} 
          />
          <Route path='/search/:searchName' element={<><Header addnewitem ={additem}/> 
            <div className='AppPage'> 
              <Sidebar/> 
              <Searchpage names = {searchValue}  />
            </div></>} 
          />
          <Route path='/placedetail' element={<><Header/> 
            <div className='AppPage'> 
              <Sidebar/> 
              <div></div>
            </div></>} 
          />    
        </Routes>
      </Router>
    </div>
  );
}

export default App;
