import React, { useEffect, useState } from 'react';
import { Block } from './Block';
import './index.scss';


const myRates = [
  {
    AZN: 1.70,
    EUR: 0.96,
    GBP: 0.84,
    USD: 1
  },
];


function App() {

  const rates = myRates;

  const [fromCurrency, setFromCurrency] = useState("AZN");
  const [toCurrency, setToCurrency] = useState("USD");

  const [formPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1);


  const onChangeFromPrice = (value) => {
    console.log(`From : ${fromCurrency} to ${toCurrency}`);
    let price = value / rates[0][fromCurrency] * rates[0][toCurrency];
    setFromPrice(value);
    setToPrice(price.toFixed(2));

  }

  function onChangeToPrice(value) {
    console.log(`From : ${fromCurrency} to ${toCurrency}`);
    let price = value * (rates[0][fromCurrency] / rates[0][toCurrency])
    setFromPrice(price.toFixed(2));
    setToPrice(value);
  }


  function swapFromAndTo(){
    let temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency (temp);

  }

  useEffect(()=>{
    onChangeFromPrice(formPrice)
  },[toCurrency]);

 
  useEffect(()=>{
    onChangeToPrice(toPrice)
  },[fromCurrency]);



  return (
    <>
      <div className="App">
        <Block value={formPrice} currency={fromCurrency} onChangeValue={onChangeFromPrice} onChangeCurrency={(c) => setFromCurrency(c)} />
        <button className="swapButton" onClick={swapFromAndTo}>
        Swap
        </button>
        <Block value={toPrice} currency={toCurrency} onChangeValue={onChangeToPrice} onChangeCurrency={(c)=>setToCurrency(c)} />
      </div>
    </>
  );
}

export default App;
