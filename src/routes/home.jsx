import React from 'react';
import TodosView from '../features/todos/components/TodosView'
import './home.css';

function Home() {
  return (
    <div style={{ padding: '1em' }}>
      <TodosView />
    </div>
  );
}

export default Home;
