import './Header.css'

import Logo from './img/logo.png'

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <a href="index.html" className='logo'>
                        <img src= {Logo} alt="" />
                    </a>

                    <div className='cadastro'>
                        <a href="">LOGIN</a>

                        <a href="">REGISTRAR</a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;