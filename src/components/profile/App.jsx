import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCartShopping, faDollarSign, faXmark } from '@fortawesome/free-solid-svg-icons'
import "./components/modal.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../mainpage/header'
import ReactDOM from 'react-dom/client'

function App() {
  const [modal, setModal] = useState(false);
  const [buy, setBuy] = useState(false);
  const [yes, setYes] = useState(false);


  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModal2 = () => {
    setBuy(!buy);
  };

  const toggleModal3 = () => {
    setYes(!yes);
  };
  const closeall = () => {
    setModal(false);
    setBuy(false);
    setYes(false);
  };

  return (
    <><Header />
    <div className="App1">
      <img className='img-Profile' src='../src/components/images/Profile.png' />

      <div className='icon-container1'>
        <h1 className='text1'> 1000 POINTS </h1>
        <button className='icon-button1'><FontAwesomeIcon onClick={toggleModal} icon={faCartShopping} /></button>
      </div>

      {buy && (
        <div className="modal1">

          <div className="overlay"></div>
          <div className="modal-content1" style={{ width: "350px", height: "100px", paddingBottom: "10px", paddingTop: "50px" }}>


            <div className='accept'> Do you want to use this voucher?</div>
            <div className='choose'>
              <button className='BUT' onClick={() => { toggleModal2(); toggleModal3() } }> yes </button>
              <button className='BUT' onClick={() => { toggleModal(); toggleModal2() } }> no </button>
            </div>


          </div>
        </div>
      )}

      {yes && (
        <div className="modal1">

          <div className="overlay" onClick={closeall}></div>
          <div className="modal-content1" style={{ width: "450px", height: "fit-content", paddingBottom: "20px", paddingTop: "70px" }}>

            <div className='qr'>
              <div>Use voucher for make 30% discount</div><br />
              <img className='img1' src='../src/components/images/QR.png' /> <br />
              <div>Use by pachara</div><br />

            </div>
          </div>
        </div>
      )}

      {modal && (

        <div className="modal1">

          <div className="overlay"></div>
          <div className="modal-content1">

            <div className='ten'>
              <img className='img-tenper' src='../src/components/images/10per.png' />
              <button className='buy-button' onClick={() => { toggleModal(); toggleModal2() } }>
                BUY 500
              </button>
            </div>

            <div className='ten'>
              <img className='img-tenper' src='../src/components/images/special.png' />
              <button className='buy-button' onClick={() => { toggleModal(); toggleModal2() } }>
                BUY 1,000
              </button>
            </div>

            <div className='ten'>
              <img className='img-tenper' src='../src/components/images/free.png' />
              <button className='buy-button' onClick={() => { toggleModal(); toggleModal2() } }>
                BUY 100
              </button>
            </div>

            <button className="close-modal" onClick={toggleModal}>
              <FontAwesomeIcon icon={faXmark} />
            </button>

          </div>

        </div>
      )}


      <div className="choice-container">
        <a href="/profile/balance"><button className="choice-item">BALANCE</button></a>
        <div className="choice-item"> | </div>
        <a href="/profile/editPage"><button className="choice-item">EDIT</button></a>
        <div className="choice-item"> | </div>
        <a href="/profile/history"><button className="choice-item">HISTORY</button></a>
      </div>

      <div className='coupons-container'>
        <div className='cou'>
          <img className='coupon' src='../src/components/images/10per.png' alt='Coupon 1' />
        </div>

        <div className='cou'>
          <img className='coupon' src='../src/components/images/free.png' alt='Coupon 2' />
        </div>

        <div className='cou'>
          <img className='coupon' src='../src/components/images/special.png' alt='Coupon 2' />
        </div>
      </div>






    </div></>
  );
}

export default App