import './App.css';
import CurrentBalance from './Components/CurrentBalance';
import CurrentBalanceTwo from './Components/CurrentBalance2';
import CurrentBalanceThree from './Components/CurrentBalance3';
import Post from './Components/Users/Post';
import Parent from './Components/ParentChild/Parent';



function App() {
  return (
    <div className="App" >
<CurrentBalance/>
<CurrentBalanceTwo/>
<CurrentBalanceThree/>
<Post/>
<Parent/>
    </div>
  );
}

export default App;
