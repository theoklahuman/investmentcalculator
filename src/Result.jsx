import { calculateInvestmentResults, formatter } from "./util/investment";

function Result({ objectProp }) {
  const resultObject = calculateInvestmentResults(objectProp);
  console.log(resultObject);
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
        {resultObject.map((object) => (
          <tr key={object.year}>
            <th>{object.year}</th>
            <th>{object.valueEndOfYear}</th>
            <th>{object.interest}</th>
            <th>{objectProp.expectedReturn}</th>
            <th>{object.annualInvestment}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Result;
