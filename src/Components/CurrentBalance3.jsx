
import {useState} from 'react'
function CurrentBalanceThree(){
  const[amount,setAmount]=useState(0);
  const DepositHandle=()=>{
setAmount((P)=>P+100);
setAmount((P)=>P+200)
setAmount((P)=>P+300)
  }

const WithdrawHandle=()=>{
  setAmount(amount-50)
}

  return(



<div style={{width:'30%',
boxShadow:'10px 10px grey',
backgroundColor:'lightPink'}}>
  <h2>Current Bal:{amount}</h2>
  <button  onClick={DepositHandle}>deposit50</button>
  <button onClick={WithdrawHandle}>withdraw50</button>
</div>
  )
}


export default CurrentBalanceThree