import { useState } from "react";
import Header from "./Header";
import Result from "./Result";
import UserInput from "./UserInput";

function App() {
  const [investObject, setInvestObject] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = investObject.duration >= 1;

  function handleInvestmentInputChange(evt) {
    setInvestObject((previousInvestObject) => {
      return {
        ...previousInvestObject,
        [evt.target.name]: +evt.target.value,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput
        investmentProp={investObject}
        investmentFunction={handleInvestmentInputChange}
      />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than Zero</p>
      )}
      {inputIsValid && <Result objectProp={investObject} />}
    </>
  );
}

export default App;
