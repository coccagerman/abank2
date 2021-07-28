import './app.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Deposit from './components/deposit/Deposit'
import Transfer from './components/transfer/Transfer'
import Movements from './components/movements/Movements'
import Confirmation from './components/transferConfirmation/TransferConfirmation'

export default function App() {
  return (
    <Router>
        <Header />
        <Switch>
        
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/deposit' exact>
            <Deposit />
          </Route>

          <Route path='/transfer' exact>
            <Transfer />
          </Route>

          <Route path='/transfer/:contactId'>
            <Confirmation />
          </Route>

          <Route path='/movements' exact>
            <Movements />
          </Route>

        </Switch>
    </Router>
  )
}