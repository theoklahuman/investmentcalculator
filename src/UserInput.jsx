function UserInput({ investmentProp, investmentFunction }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={investmentProp.initialInvestment}
            onChange={investmentFunction}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={investmentProp.annualInvestment}
            onChange={investmentFunction}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            value={investmentProp.expectedReturn}
            onChange={investmentFunction}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            name="duration"
            value={investmentProp.duration}
            onChange={investmentFunction}
          />
        </p>
      </div>
    </div>
  );
}

export default UserInput;
