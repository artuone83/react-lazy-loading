import React from 'react';

const Modal = ({handleCloseModal})=> {
  return <div className="modal">
    <h3>Example heading</h3>
    <p>Example paragraph to display some content rather then Lorem ipsum stuff :)</p>
    <button onClick={handleCloseModal}>Close Modal</button>
  </div>
}

export default Modal;