import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('body')   

function ReactModal({ handlePick, hasOptions }){
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [title,seTitle] = React.useState('');

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal(){
    setIsOpen(false);
  }

  function click() {
    const random = handlePick();
    seTitle(random);
    openModal();
  }

    return (
      <div>
        <button 
            className="big-button"
            onClick={click} 
            disabled={!hasOptions}
            >O que devemos fazer?</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          closeTimeoutMS={200}
          contentLabel="Example Modal"
          className="modal"
        >

          <h2>Selected option:</h2>
          <p>{title}</p>
          <button onClick={closeModal} className="button">close</button>
        </Modal>
      </div>
    );
}

export default ReactModal;