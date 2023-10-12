import Sidebar from './components/Sidebar';
import content from './components/content';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Shorts from './components/Shorts';
import Hooks from './components/Hooks';
import { createContext,setData } from 'react';
import Conexpo from './components/Conexpo';
import axios from 'axios'
import Product from './components/Product';
import{ useState,useEffect}from 'react'
import { Users } from './components/Users';
import { Add } from './components/Adduser';

export const store = createContext();


function App() {
 let students=[{
  name:"abhi",
  age:18
 },
 {
  name:"ram",
  age:15
 },
]
// const [data,setData]= useState(students)


  return (
    <>
    <BrowserRouter>
    {/* <store.Provider value={[data,setData]}> */}
    <div className='row'>
    <Sidebar/>
    <Product/>
    <Users/>
    <Add/>
    {/* <Conexpo/> */}
    {/* <Hooks/>  */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Shorts" element={<Shorts/>}></Route>
      </Routes>
    </div>
    {/* </store.Provider> */}
    </BrowserRouter>
    </>
  );
}


export default App;