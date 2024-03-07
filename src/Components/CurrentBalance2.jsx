import { useState } from 'react'

function CurrentBalanceTwo() {
  const [amount, setAmount] = useState(0)

  const handleDeposit = () => {
    console.log(`initial`, amount)
    setAmount(amount + 1)
    console.log(`after`, amount)
  }
  const handleWithdraw = () => {
    if (amount > 0) {
      setAmount(amount - 1)
    }
  }

  return (
    <div
      style={{
        margin: '10%',
        width: '40%',
        boxShadow: '10px 10px lightBlue',
        backgroundColor: 'orange',
      }}
    >
      <div
        style={{
          padding: '10%',
          margin: '3%',
        }}
      >
        <h2>Current Balance :{amount}</h2>
        <button onClick={handleDeposit}>Deposit</button>
        <button onClick={handleWithdraw}>withDraw</button>
      </div>
    </div>
  )
}
export default CurrentBalanceTwo
