import React, { useState } from "react";
import { Modal} from '@material-ui/core';
import './scss/app.scss';
import campana from "../images/notifications.svg";
import campana2 from "../images/notifications_active.svg";
import NotificationsList from "./NotificationList"



function ModalCampana(props) {

  const [ modal, setModal] = useState(false);

  const abrirCerrarModal = () => {
    setModal(!modal);
  }

  const views = props.state.map(notif => notif.viewed)
  const view = views.toString().includes(false).toString();

  const notificationIcon = (view==="true")? campana2 : campana;

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
                <img src={notificationIcon} alt="campana"/>
                </button>
        
              <Modal open={modal} onClose={abrirCerrarModal}>
                {body}
              </Modal>
            </div>
  )
        


}




export default ModalCampana;
