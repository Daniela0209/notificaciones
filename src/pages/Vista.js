import React from 'react';
import Modal from "../components/ModalBell";


class Vista extends React.Component{
    state = {
        data: [
          {
            id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            name: 'User',
            typeN: 'Welcome',
            detail: 'Bienvenido User',
            viewed:'true'
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
            name: 'Notification Proyect',
            typeN: 'OKR',
            detail: '30',
            viewed:'true'
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3s',
            name: 'Welcome',
            typeN: 'KR',
            detail: '70',
            viewed:'true'
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3ñ',
            name: 'Email Enviado', //Subject
            typeN: 'Send Email',
            detail: 'Nuevo Email Enviado',
            viewed:'true'
          },
        ],
      };
    render(){
        return(
            <div>
            <Modal state={this.state.data}/>    
            </div>
            
        )
    }
}

export default Vista;