import React, { useState } from "react";
import { Modal} from '@material-ui/core';
import './scss/app.scss';
import campana from "../images/notifications.svg";
import NotificationsList from "./NotificationList"



function ModalCampana(props) {

  const [ modal, setModal] = useState(false);

  const abrirCerrarModal = () => {
    setModal(!modal);
  }

  const image = () =>{
    (props.state.data.viewed==false)?<img src={campana} alt="campana"/>:<img src={campana} alt="campana"/>;
  }


  const body = (
    <div className="Modal">
      <div align="center">
        <header><strong>Notificaciones</strong>
        <button className="button_cerrar" onClick={()=>abrirCerrarModal()}>X</button>
        </header>
        <NotificationsList notifications={props.state} /> 
      </div>
    </div>
  ); 

        return (
            <div className="App">
        
              <button className='button'  onClick={()=>abrirCerrarModal()} campanaIcon>
                <img src={campana} alt="campana"/>
                </button>
        
              <Modal open={modal} onClose={abrirCerrarModal}>
                {body}
              </Modal>
            </div>
  )
        


}




export default ModalCampana;
