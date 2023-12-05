import React from 'react';
import UserList from './components/UserList/UserList';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  return (
    <div>
      <UserList />
      <hr/>
      <TodoList />
    </div>
  );
};

export default App;