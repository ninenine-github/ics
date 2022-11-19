import './App.css';
import Content from './Component/Content';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Header/>
      <Content/>
      <div className="Footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default App;
