function MovementRecord({movement}) {
    return (
        <tr>
            <td>{movement.operation}</td>
            <td>${movement.amount}</td>
            <td>{new Date(movement.date).toDateString()}</td>
            <td>{movement.operation === 'deposit' ? movement.source : movement.destination}</td>
        </tr>
    )
}

export default MovementRecord
