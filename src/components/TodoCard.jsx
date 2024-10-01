import React from "react"

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, hanldeEditTodo } = props
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer '>
        <button
          onClick={() => {
            hanldeEditTodo(index)
          }}>
          <i className='fa-solid fa-pen-to-square'></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(index)
          }}>
          <i className='fa-regular fa-trash-can'></i>
        </button>
      </div>
    </li>
  )
}
