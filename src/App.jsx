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

  function handleInvestmentInputChange(evt) {
    setInvestObject(previousInvestObject => {
      return {
        ...previousInvestObject,
        [evt.target.name]: +evt.target.value
      }
    })
  }
  return (
    <>
      <Header />
      <UserInput
        investmentProp={investObject}
        investmentFunction={handleInvestmentInputChange}
      />
      <Result objectProp={investObject} />
    </>
  );
}

export default App;
