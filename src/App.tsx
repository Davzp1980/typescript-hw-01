import React from 'react';
import './App.css';

function App() {
  interface User {
    name: string;
    age: number;
    len: 23;
  }

  function getProperty(obj: User): Omit<User, 'age' | 'len'> {
    return { name: obj.name };
  }

  // eslint-disable-next-line prefer-const
  let person: User = {
    name: 'John',
    age: 38,
  };
  console.log(person);
  console.log(getProperty(person, { name: 'Alex' }));
  console.log(person);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
