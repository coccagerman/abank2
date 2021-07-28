import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


const DepositModal = ({showModal, setShowModal, amountToDeposit}) => {
  
    const handleClose = () => setShowModal(false)
  
    return (
        <Modal show={showModal} onHide={handleClose} className='depositModal'>
            <Modal.Header className='header' closeButton />
            <Modal.Body className='body'>You've deposited ${amountToDeposit}</Modal.Body>
            <Modal.Footer className='footer'>
                <Link to='/movements'> <Button variant='secondary' onClick={handleClose}> Movements history </Button> </Link>
                <Link to='/'> <Button variant='primary' onClick={handleClose}> Home </Button> </Link>
            </Modal.Footer>
        </Modal>
    )
}

export default DepositModal