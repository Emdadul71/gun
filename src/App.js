import { useEffect, useState } from 'react';
import './App.css';
import Card from './component/Card/Card';
import Navbar from './component/Navbar/Navbar';
import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');
function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleAddToCart = (gun) => {
    const newCart = [...cart, gun]
    setCart(newCart);
  }



  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setGuns(data))
  }, []);


  return (
    <div className="App">
      <Navbar cart={cart} openModal={openModal}></Navbar>
      <div className='card-container'>
      {
        guns.map(gun => <Card
        key={gun.id}
        gun={gun}
        handleAddToCart={handleAddToCart}
        ></Card>)
      }
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}><AiOutlineClose></AiOutlineClose></button>
        <div className='cont'>
        {
          cart.map(item => <div
          key={item.id}
           className='cont-2'>
            {item.name}
            <img className='image-container-2'src={item.img} alt="" />
          </div>)
        }
      </div>
      </Modal>
      
    </div>
  );
}

export default App;
