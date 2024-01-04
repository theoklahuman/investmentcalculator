import { useState } from "react";
import Header from "./Header";
import Result from "./Result";
import UserInput from "./UserInput";
import { calculateInvestmentResults, formatter } from "./util/investment";

function App() {
  const investmentObject = {
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  };

  const [investObject, setInvestObject] = useState(investmentObject);
  const resultObject = calculateInvestmentResults(
    investObject.initialInvestment,
    investObject.annualInvestment,
    investObject.expectedReturn,
    investObject.duration
  );
  const [resultObj, setResultObj] = useState(resultObject);

  function handleInvestmentInputChange(evt) {
    setInvestObject({
      ...investObject,
      [evt.target.name]: evt.target.value,
    });
    console.log(evt.target.name);
  }
  return (
    <div>
      <Header />
      <UserInput
        investmentProp={investObject}
        investmentFunction={handleInvestmentInputChange}
      />
      <Result objectProp={resultObject} />
    </div>
  );
}

export default App;
