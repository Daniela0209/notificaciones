import React, { useState } from "react";
import { Modal} from '@material-ui/core';
import './scss/app.scss';
import bell from "../images/notifications.svg";
import bell2 from "../images/notifications_active.svg";
import NotificationsList from "./NotificationList"



function ModalBell(props) {

  const [ modal, setModal] = useState(false);

  const open_close_Modal = () => {
    setModal(!modal);
  }

  const views = props.state.map(notif => notif.viewed)
  const view = views.toString().includes(false).toString();

  const notificationIcon = (view==="true")? bell2 : bell;

  const body = (
    <div className="Modal">
      <div align="center">
        <header id="header"><strong>Notificaciones</strong>
        <button className="button_cerrar" onClick={()=>open_close_Modal()}>X</button>
        </header>
        <NotificationsList notifications={props.state} /> 
      </div>
    </div>
  ); 

        return (
            <div className="App">
        
              <button className='button'  onClick={()=>open_close_Modal()}>
                <img src={notificationIcon} alt="bell"/>
                </button>
        
              <Modal open={modal} onClose={open_close_Modal}>
                {body}
              </Modal>
            </div>
  )
        


}




export default ModalBell;
