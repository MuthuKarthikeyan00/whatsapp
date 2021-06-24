import SlideBar from './components/SlideBar';
import {BrowserRouter,Switch,Route}  from 'react-router-dom';
import Chat from './components/Chat';
import './App.css';
import './components/style.css'
import './components/styleM.css'
import Login from "./components/Login";
import {useStateValue} from './reducer/StateProvider';

function App() {


  const [{user}, dispatch] = useStateValue();
  console.log(user);

  return !user?(
      <Login/>
  ):(
    <div className="app">
        <div className="app__container">
         
         
         <BrowserRouter>

         <Switch>
           <Route exact path="/group/:groupId">
           <Chat></Chat>
           </Route>
           <Route exact path="/">
           <SlideBar/>
           </Route>
         </Switch>
         </BrowserRouter>
        </div>
    </div>
  );

 
}

export default App;
