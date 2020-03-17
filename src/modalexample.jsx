import React, {Component} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';


class ModalExample extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {showModal: false}
    }

    render()
    {
        return (
            <>
                <Button color="info" onClick={() => this.setState({showModal: true})}>Show modal</Button>

                <Modal isOpen={this.state.showModal} fade="false" toggle={() => this.setState({showModal: false})}>

                    <ModalHeader toggle={() => this.setState({showModal: false})}> 
                        Ready to leave?
                    </ModalHeader>

                    <ModalBody>
                        <p>Select logout below if you are ready to leave.</p>
                    </ModalBody>

                    <ModalFooter>
                        
                        <Button  onClick={() => this.setState({showModal: false})}>Close</Button>
                        <Button color="info">Logout</Button>
                    </ModalFooter>

                </Modal>
            </>

        )
    }

}

export default ModalExample;