import React, {useState, useEffect} from 'react'
import { Modal, Button } from 'react-bootstrap'
import { IoIosMenu, IoIosClose } from "react-icons/io"
import './style.css'

const Navbar = _ => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(!show);

  return (
    <div className='navbar'>
      <Button className='mainmenu' variant="primary" onClick={handleShow}>
          {show ? <IoIosClose /> : <IoIosMenu />}
      </Button>
      <header className="title">Mỹ Cãnh</header>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
            <div>
                <p>Menu</p>
                <p>Đặt Tiệc</p>
                <p>Địa Chỉ</p>
                <p>Liên hệ</p>
            </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Navbar