import headerLogo from "./assets/investment-calculator-logo.png";

function Header() {
    return (
        <div id="header">
            <img src={headerLogo} alt="logo showing a money bag" />
            <h1>Investment Calculator</h1>
        </div>
    )
}

export default Header;