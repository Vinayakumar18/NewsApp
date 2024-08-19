import { NewsCat } from './components/NewsCat';

function App() {
  const api_key = process.env.REACT_APP_API_KEY;
  return (
    <div className="fluid-container">
      <NewsCat api={api_key}></NewsCat>
    </div>
  );
}

export default App;
