import React from 'react';
import Modal from "../components/ModalBell";


class Vista extends React.Component{
    state = {
        data: [
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3a',
            name: 'Notification Proyect',
            typeN: 'OKR',
            detail: '30',
            viewed:'true '
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3b',
            name: 'Notification Proyect',
            typeN: 'OKR',
            detail: '70',
            viewed:'true'
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3b',
            name: 'Notification Proyect',
            typeN: 'OKR',
            detail: '100 Or Finished',
            viewed:'true'
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3a',
            name: 'Notification Proyect',
            typeN: 'KR',
            detail: '30',
            viewed:'true'
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3b',
            name: 'Notification Proyect',
            typeN: 'KR',
            detail: '70',
            viewed:'true'
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3b',
            name: 'Notification Proyect ',
            typeN: 'KR',
            detail: '100',
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