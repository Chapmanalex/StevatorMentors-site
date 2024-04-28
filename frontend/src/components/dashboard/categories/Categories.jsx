import React, { useState, useRef, useEffect } from 'react';
import './categories.css';
import { Outlet } from 'react-router-dom';
import Categorydetails from './detail/Categorydetails';
import { Button, Modal } from 'react-bootstrap';

const Categories = () => {

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return (
    <div>
      <div className="categories">
        <div className="card">
          <div className="category">
          <div className="ico">
            <img src="./user-octagon.png" alt=""/>
            <img src="./user-add.png" alt="" />
            <img src="./menu.png" alt="" />
          </div>
            <img src="./paired avatars 1.png" alt="" />
            <p>Dr. Optimus Prime (PhD)</p>
          </div>
        </div>

        <div className="card">
          
          <div className="category">
          <div className="ico">
            <img src="./user-octagon.png" alt=""/>
            <img src="./user-add.png" alt="" onClick={handleModalShow}/>
            <img src="./menu.png" alt="" />
          </div>
            <img src="./cryimg.png" alt="" />
            <p>dis Eriksdot</p>
          </div>
        </div>

        <div className="card">
          <div className="category">
          <div className="ico">
            <img src="./user-octagon.png" alt=""/>
            <img src="./user-add.png" alt="" onClick={handleModalShow} />
            <img src="./menu.png" alt="" />
          </div>
            <img src="./redeyes.png" alt="" />
            <p>Leif Erikson</p>
          </div>
        </div>

        <div className="card">
          <div className="category">
          <div className="ico">
            <img src="./user-octagon.png" alt=""/>
            <img src="./user-add.png" alt="" onClick={handleModalShow}/>
            <img src="./menu.png" alt="" />
          </div>
            <img src="./rawboy.png" alt="" />
            <p>Harald Sigurdson</p>
          </div>
        </div>

        <div className="card">
          <div className="category">
          <div className="ico">
            <img src="./user-octagon.png" alt=""/>
            <img src="./user-add.png" alt="" onClick={handleModalShow}/>
            <img src="./menu.png" alt="" />
          </div>
            <img src="./api.png" alt="" />
            <p>Oswald Cobblepot</p>
          </div>
        </div>

        <div className="card">
          <div className="category">
          <div className="ico">
            <img src="./user-octagon.png" alt=""/>
            <img src="./user-add.png" alt=""  onClick={handleModalShow}/>
            <img src="./menu.png" alt="" />
          </div>
            <img src="./jiraya 1.png" alt="" />
            <p>Mathew Taxman</p>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleModalClose} size="lg" centered>
        <Modal.Header closeButton>
          x{/* <Modal.Title>Modal Title</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <Categorydetails />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Categories;
