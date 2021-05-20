import Navbar from './components/Navbar';
import PictureGrid from './components/PictureGrid';
import './App.css';

function App() {
  return (
    <div className="App bg-gray-50" >
      <header className="App-header bg-white">
      <Navbar />
      </header>
      <main className="flex">
        <PictureGrid />
      </main>
    </div>
  );
}

export default App;
