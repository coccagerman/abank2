import { useSelector } from 'react-redux'
import MovementRecord from './movementRecord/MovementRecord'

const Movements = () => {

    const { movements } = useSelector(state => state.movements)

    return (
        <section className='movements'>
            {movements.length === 0 ? <h1>You've got no movements yet.</h1> :
                <table>
                    <thead>
                        <tr>
                            <th>OPERATION</th>
                            <th>AMOUNT</th>
                            <th>DATE</th>
                            <th>DESTINATION / SOURCE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movements.map((movement, i) => <MovementRecord movement={movement} key={i} />)}
                    </tbody>
                </table>
            }
        </section>
    )
}

export default Movements