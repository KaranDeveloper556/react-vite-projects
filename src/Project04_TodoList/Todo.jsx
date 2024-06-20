import React from 'react';
import './CSS/todo.css';

function Todo() {
  return (
    <section className='Todo_main_container'>
      <div className="Heading">manage your day</div>
      <div className="Todo_container">
        <div className="First_box_todo">
          <input type="text" className='input' id='todo_input' placeholder='Add Todo' />
          <button className='btn' id='Add_todo_btn'>ADD TODO</button>
        </div>
        <div className="Second_box_todo">
          <div className="todo">
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="Buttons">-
              <button type="button" className='btn' id='todo_add_clear_btn'><ion-icon name="trash-outline"></ion-icon></button>
              <button type="button" className='btn' id='todo_add_clear_btn'><ion-icon name="add-circle-outline"></ion-icon></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Todo
