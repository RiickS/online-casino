import { Content } from './components/Content/Content';
import Header from './components/Header/Header'
import Context from './context'

function App() {
  return (
    <Context.Provider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </Context.Provider>
  );
}

export default App;
