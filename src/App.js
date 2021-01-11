import './App.scss';
import listSvg from './assets/img/list.svg'
import List from './components/List';




function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
       <List listSvg={listSvg}/>
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
