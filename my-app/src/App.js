import css from './App.module.css';
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
