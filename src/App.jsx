import Card from './components/Card/Card';
import users from './data.json';

function App() {
  console.log('users :>> ', users);
  return (
    <div>
      {users.map(user => {
        return <Card key={user.id} name={user.name} phone={user.phone} />;
      })}
      <Card name="Alex" email="qwe@qwe.com" phone={'050-50000000'} />
    </div>
  );
}

export default App;
