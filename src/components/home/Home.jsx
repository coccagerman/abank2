import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {

    const { fundsAmount } = useSelector(state => state.funds)

    return (
        <section className='home'>
            <h2>Money available: ${fundsAmount}</h2>

            <Link to='/transfer'><button className='btn btn-primary'>Transfer</button></Link>
            <Link to='/deposit'><button className='btn btn-secondary'>Deposit</button></Link>
            <Link to='/movements'><button className='btn btn-tertiary'>Movements history</button></Link>
        </section>
    )
}

export default Home