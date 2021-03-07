import './App.css';
import './TodoItem';
import TodoItem from './TodoItem';

function App() {
  return (
    <div className="todo-list">
      <TodoItem img="https://images.generated.photos/j3OMunzJYEalDlJtS82WJ6CA4NkUAj8oV861KEXZ4h8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA0MTMwNDkuanBn.jpg" 
                name="John" phone="0774123765" email="ion@gemail.com"/>
                <TodoItem img="https://images.generated.photos/dUqTivpNrob7SNVc3_6iMkdk9Lis5RhH5jDcbAr34xo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA0OTY2NzcuanBn.jpg"
                name="Alex" phone="0774321762" email="alex.perez@gemail.com"/>
                <TodoItem img="https://images.generated.photos/VGixx6UdRn-Lq6xP0vnMxmM5MBEmaVhcW105RKmsSaY/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAzODEzODcuanBn.jpg"
                name="Casie" phone="0772442192" email="cassie@opera.tm"/>
                <TodoItem img="https://images.generated.photos/3Pt0zdzk3Lglo-7hD-IrpUCo_ftklveFv8FbbaJFeeg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAzNTIxODMuanBn.jpg"
                name="Roberta" phone="0774123812" email="roberta@gemail.mx"/>
    </div>
  );
}

export default App;
