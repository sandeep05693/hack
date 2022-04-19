import logo from './Intellogo.png';

const Header = () => {
    return (
        <>
           
            <header>
                <nav className="navbar navbar-expand-lg navbar-primary bg-primary">

                    <a className="navbar-brand text-white" href="/"> 
                    <img src={logo} height="30" className="text-primary d-inline-block align-top" alt="Intel logo"></img>
                    Balance Sheet Hedging Tool </a> 
                </nav>
            </header>
        </>
    );


}

export default Header;