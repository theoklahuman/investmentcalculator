function Result({ objectProp }) {
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
                <tr>
                    <th>{objectProp.year}</th>
                    <th>{objectProp.annualInvestment}</th>
                    <th>{objectProp.interest}</th>
                    <th>{objectProp.valueEndOfYear}</th>
                    <th>{objectProp.annualInvestment}</th>
                </tr>
            </tbody>
        </table>
    )
}

export default Result;