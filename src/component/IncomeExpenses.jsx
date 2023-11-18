import React, {useContext} from 'react'
import './Comp.css'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0) . toFixed(2)

  const income = amounts.filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2)

  const expnse = (
    amounts.filter(item => item < 0)
  .reduce((acc, item) => (acc += item), 0) * -1)
  .toFixed(2)
  return (
    <div className='inc-exp-container'>
        <div className='income'>
            <h2>Income</h2>
            <p className='money-plus'>${income}</p>
        </div>
        <div className='expense'>
            <h2>Expense</h2>
            <p className='money-minus'>${expnse}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses