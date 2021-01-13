import './App.scss';
import AddButtonList from './components/AddListButton/AddButtonList';
import DB from './db.json'



function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
          <AddButtonList colors={DB.colors}/>
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
