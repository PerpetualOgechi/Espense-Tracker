import React, {useState, useContext} from 'react'
import './Comp.css'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(null)

    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction)
        setText('')
        setAmount('')
    }
  return (
    <div className='add-trans'>
        <h3>Add New Transaction</h3>
        <form onSubmit={onSubmit} className='form' action="">
            <div>
                <label htmlFor="text">Text</label><br/>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Text' />
            </div>
            <div>
                <label htmlFor="text">Amount<br/>
                (nagative - expense, positive - income)</label><br/>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter Amount'  />
            </div>
            <button className='btn'>Add Transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction