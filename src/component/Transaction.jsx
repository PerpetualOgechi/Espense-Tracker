import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({transaction}) => {
  const {deleteTransaction} = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : '+'
  return (
    <li className={transaction.amount < 0 ? 'trans' : 'plus'}>
        <span>{transaction.text}</span> 
        <span >{sign}${Math.abs(transaction.amount)}</span>
        <button onClick={() => deleteTransaction(transaction.id)} className='delete-button'>x</button>
    </li>
  )
}

export default Transaction