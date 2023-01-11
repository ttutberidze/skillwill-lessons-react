import './App.css';
import User from './User';

function App() {
  return (
    <div className="users">
      <User
        name='Test'
        onChange={() => {}}
        onRemove={() => {}}
      />
    </div>
  );
}

export default App;
