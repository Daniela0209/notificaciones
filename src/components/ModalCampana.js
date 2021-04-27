import React, { useState } from "react";
import { Modal } from '@material-ui/core';
import './scss/app.scss';
import campana from "../images/campana.svg";
import { render } from "@testing-library/react";




function ModalCampana() {

  const [ modal, setModal] = useState(false);

  const abrirCerrarModal = () => {
    setModal(!modal);
  }


  const body = (
    <div className="Modal">
      <div align="center">
        <header><strong>Notificaciones</strong>
        <button className="button_cerrar" onClick={()=>abrirCerrarModal()}>X</button>
        </header>
       
      </div>
    </div>
  );

    // eslint-disable-next-line no-lone-blocks
    render(); {

        return (
            <div className="App">
        
              <button className='button'  onClick={()=>abrirCerrarModal()} campanaIcon>
                <img src={campana}  />
              </button>
        
              <Modal open={modal} onClose={abrirCerrarModal}>
                {body}
              </Modal>
            </div>
            )
        
    }

}




export default ModalCampana;
