import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TRANSFER } from '../../redux/FundsSlice'
import { UPDATEMOVEMENTS } from '../../redux/MovementsSlice'
import { useParams } from 'react-router-dom'
import TransferModal from './tranferModal/TransferModal'

function TransferConfirmation() {

    let { contactId } = useParams()

    const { contacts } = useSelector(state => state.contacts)
    const { fundsAmount } = useSelector(state => state.funds)

    const [amountToTransfer, setAmountToTransfer] = useState(0)
    const [errorDisplay, setErrorDisplay] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const dispatch = useDispatch()

    const onSubmit = () => {
        if (amountToTransfer > fundsAmount) {
            setErrorDisplay(true)
            return
        }
        setErrorDisplay(false)
        dispatch(TRANSFER(amountToTransfer))
        dispatch(UPDATEMOVEMENTS({
            operation: 'transfer',
            amount: amountToTransfer,
            destination: `${contact.name.first + contact.name.last}`,
            date: Date.now()
        }))
        setShowModal(true)
    }

    let contact = contacts[contactId]

    return (
        <section className='transferConfirmation'>

            <div className='amountInput'>
                <p>$ </p>
                <input type='number' name='amount' id='amount' min={0} max={1000000} step={10} defaultValue={0} onChange={e => setAmountToTransfer(parseInt(e.target.value))}/>
            </div>

            <p>Please select the amount you'd like to transfer to</p>
            <h1>{contact.name.first} {contact.name.last}</h1>
            <img src={contact.picture.large} alt='contact' />

            <button className={`btn btn-primary ${amountToTransfer === 0 ? 'disabled' : null}`} disabled={amountToTransfer === 0} onClick={() => onSubmit()}>Transfer</button>

            {errorDisplay ? <p className='errorMsg'>You don't have enough funds to complete this transfer.</p> : null}

            <TransferModal showModal={showModal} setShowModal={setShowModal} amountToTransfer={amountToTransfer} contact={contact} />
        </section>
    )
}

export default TransferConfirmation