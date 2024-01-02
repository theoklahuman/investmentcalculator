import { useState } from "react";

function UserInput() {
  const [currentInvestment, setCurrentInvestment] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  function handleInitialInvestmentChange(evt) {
    setCurrentInvestment({
      ...currentInvestment,
      initialInvestment: evt.target.value,
    });
  }
  function handleAnnualInvestmentChange(evt) {
    setCurrentInvestment({
      ...currentInvestment,
      annualInvestment: evt.target.value,
    });
  }
  function handleExpectedReturnChange(evt) {
    setCurrentInvestment({
      ...currentInvestment,
      expectedReturn: evt.target.value,
    });
  }
  function handleDurationChange(evt) {
    setCurrentInvestment({
      ...currentInvestment,
      duration: evt.target.value,
    });
  }
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={currentInvestment.initialInvestment}
            onChange={handleInitialInvestmentChange}
          />
        </div>
        <div>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={currentInvestment.annualInvestment}
            onChange={handleAnnualInvestmentChange}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            value={currentInvestment.expectedReturn}
            onChange={handleExpectedReturnChange}
          />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            name="duration"
            value={currentInvestment.duration}
            onChange={handleDurationChange}
          />
        </div>
      </div>
    </div>
  );
}

export default UserInput;
