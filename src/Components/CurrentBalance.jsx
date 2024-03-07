import { useState } from 'react'

function CurrentBalance() {
  const[amount, setAmount] = useState(0);
 console.log(`the value of amount stored in  amount state is`,amount)
  const dataVar = {
    color: 'red',
  }


const handleDeposit=()=>{
  setAmount(amount+100)

};
const handleWithdraw=()=>{
setAmount(amount-100)
};



  return (
    <div
      style={{
        margin: '10%',

        backgroundColor: 'orange',
        width: '40%',
        border: '0px solid black',
        boxShadow: '10px 10px lightBlue',
      }}
    >
      <h1
        style={{
          padding: '10%',
          fontSize: '150%',
        }}
      >
        CurrentBalance:{amount}
      </h1>
      <button onClick={handleDeposit}
        style={{
          padding: '2%',
          margin: '2%',
        }}
      >
        Deposit 100
      </button>
      <button onClick={handleWithdraw}
        style={{
          padding: '2%',
          margin: '2%',
        }}
      >
        Withdraw 100
      </button>
      <h2 style={dataVar}>style accept through variable</h2>
    </div>
  )
}

export default CurrentBalance
