import React, { useContext } from 'react'
import './Comp.css'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext)
  
  return (
    <div className='trans-list'>
        <h3>History</h3>
        <ul className='list'>
          {transactions.map(transaction =>(
            <Transaction key={transaction.id} transaction={transaction}/>
            
          ))}
            
            {/* <li className='book'><span>Book</span> <span >$400</span> */}
            {/* <button className='delete-button'>x</button> */}
            {/* </li> */}
            {/* <li className='camera'><span>Camera</span> <span >$200</span> */}
            {/* <button className='delete-button'>x</button> */}
            {/* </li> */}
        </ul>
    </div>
  )
}

export default TransactionList