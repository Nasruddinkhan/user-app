import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from "react-transition-group";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  }

  showModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({
              showBlock: !prevState.showBlock,
            }))
          }
        >
          Toggle
        </button>
        <br />
        <Transition in={this.state.showBlock} timeout={1000} mountOnEnter unmountOnExit>
          {state=> (
            <p>
              {
                <div
                  style={{
                    margin: "auto",
                    backgroundColor: "green",
                    width: 100,
                    height: 100,
                    transition: 'opacity 1s ease-out',
                    opacity: state === 'exiting' ? 0 : 1
                  }}
                ></div>
              }
            </p>
          )}
        </Transition>
        {/* {this.state.showBlock ? (
          <div
            style={{
              backgroundColor: "green",
              width: 100,
              height: 100,
            }}
          ></div>
        ) : null} */}
        {/* <Modal show={this.state.modalIsOpen} closed={this.closeModal}/> */}
        {this.state.modalIsOpen ? (
          <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        ) : null}
        {/* <Backdrop show={this.state.modalIsOpen} /> */}
        {this.state.modalIsOpen ? (
          <Backdrop show={this.state.modalIsOpen} />
        ) : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
