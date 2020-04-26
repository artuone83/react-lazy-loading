import React, { Component, lazy, Suspense } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const Modal = lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 3 *1000)).then(
    () => import('./Modal')
  );
});
const LoadingModal = <div className="modal-loading"> Modal is loading... </div>;

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React lazy loading',
      isModalOpen: false
    };
  }

  handleCloseModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen
    }));
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Click the button below to see some action :)
        </p>
        <button 
          onClick={this.handleCloseModal}>
            {this.state.isModalOpen ? 'Modal is open' : 'Open modal'}
        </button>
        {this.state.isModalOpen
          ? <Suspense fallback={LoadingModal}> 
              <Modal handleCloseModal={this.handleCloseModal} />
            </Suspense>
          : null}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));