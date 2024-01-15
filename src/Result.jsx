import { calculateInvestmentResults, formatter } from "./util/investment";

function Result({ objectProp }) {
  const resultObject = calculateInvestmentResults(objectProp);
  const initialInvestment =
    resultObject[0].valueEndOfYear -
    resultObject[0].interest -
    resultObject[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultObject.map((object) => {
          const totalInterest =
            object.valueEndOfYear -
            object.annualInvestment * object.year -
            initialInvestment;
            const totalInvestment = object.valueEndOfYear - totalInterest;
          return (
            <tr key={object.year}>
              <td>{object.year}</td>
              <td>{formatter.format(object.valueEndOfYear)}</td>
              <td>{formatter.format(object.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Result;
