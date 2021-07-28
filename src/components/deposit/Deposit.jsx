import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DEPOSIT } from '../../redux/FundsSlice'
import { UPDATEMOVEMENTS } from '../../redux/MovementsSlice'
import icon from '../../assets/deposits.png'
import DepositModal from './depositModal/DepositModal'

const Deposit = () => {

    const [amountToDeposit, setAmountToDeposit] = useState(0)
    const [fundsSource, setFundsSource] = useState('creditCard')
    const [showModal, setShowModal] = useState(false)

    const dispatch = useDispatch()

    const onSubmit = () => {
        dispatch(DEPOSIT(amountToDeposit))
        dispatch(UPDATEMOVEMENTS({
            operation: 'deposit',
            amount: amountToDeposit,
            source: fundsSource,
            date: Date.now()
        }))
        setShowModal(true)
    }

    return (
        <section className='deposit'>
            <img src={icon} alt='icon' className='icon'/>

            <form>
                <div className='formInput'>
                    <label>How much money would you like to deposit?</label>
                    <div className='amountInput'>
                        <p>$ </p>
                        <input type='number' name='amount' id='amount' min={0} max={1000000} step={10} defaultValue={0} onChange={e => setAmountToDeposit(parseInt(e.target.value))}/>
                    </div>
                </div>

                <div className='formInput'>
                    <label>Select the source of your funds.</label>
                    <select name='source' id='source' onChange={e => setFundsSource(e.target.value)}>
                        <option value='creditCard'>Credit card</option>
                        <option value='bankAccount'>Bank account</option>
                        <option value='digitalWallet'>Digital wallet</option>
                        <option value='cash'>Cash</option>
                    </select>
                </div>
            </form>

            <button className={`btn btn-primary ${amountToDeposit === 0 ? 'disabled' : null}`} disabled={amountToDeposit === 0} onClick={() => onSubmit()}>Deposit</button>

            <DepositModal showModal={showModal} setShowModal={setShowModal} amountToDeposit={amountToDeposit} />
        </section>
    )
}

export default Deposit