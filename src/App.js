import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterNav from './Views/RouterNav';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollTop/ScrollButton';
import { LoginScreen } from './Views/Login/Login';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from "react"
import { hideModal } from './store/redux/modalReducer'
import LoginAPI from './components/Header/Logic/LoginAPI';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '0',
    boder: 'none',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement(document.getElementById('root'));

function App() {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();

  // useSelector get state of current modal
  const modal = useSelector((state) => state.modal)

  useEffect(() => {
    setIsOpen(modal)
  }, [modal])

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function afterCloseModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
    dispatch(hideModal())
  }

  function _closeModal() {
    setIsOpen(false);
  }

  const onSubmit = (infor) => {
    console.log(infor)
    const raw = {
      "email": infor.email,
      "password": infor.password,
     
    };
    

    LoginAPI(raw, (result) => {
      console.log({ result })
    })
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <RouterNav />
        {/* <Container /> */}
        <ScrollButton />
        <Footer />
      </Router>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={_closeModal}
        onAfterClose={afterCloseModal}
        style={customStyles}
        contentLabel="Modal"
      >
        {/* form login */}
        <LoginScreen onSubmit={onSubmit} />
      </Modal>
    </div>
  );
}

export default App;
