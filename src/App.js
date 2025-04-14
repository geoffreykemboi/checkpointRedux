
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>ToDo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
