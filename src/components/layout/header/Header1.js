
import { useState } from "react"
import { Link } from "react-router-dom"
// import CartExpirationTimer from "../components/elements/CartExpirationTimer"
import CartExpirationTimer from "../../elements/CartExpirationTimer"
import Menu from "../Menu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isCart, handleCart, isLogin, handleLogin, isRegister, handleRegister, isForgotPass, handleForgotPass }) {
	const [isToggled, setToggled] = useState(false)
	const handleToggled = () => setToggled(!isToggled)
	return (
		<>

			<div className="header-top">
				<div className="themeflat-container">
					<div className="header-top-inner">
						<div className="address">
							<Link to="/mailto:"><i className="icon-Vector" />hello@CarringtonPigs.com</Link>
							<address><i className="icon-Vector-22" />Banky Ln, Sale, M33 5SL</address>
						</div>
						<div className="social-icon">
							<li>
								<Link to="https://www.instagram.com/carrington_rufc/"><i className="icon-instagram" /></Link>
							</li>
						</div>
					</div>
				</div>
			</div>

			<header id="header" className={`header style1 clearfix ${scroll ? 'downscrolled' : ''}`}>
				<div className="themeflat-container">
					<div className="header-inner">
						<div id="logo" className="logo">
							<Link to="/" rel="home">
								<img id="a2" src="images/logo.png" alt="image" />
							</Link>
						</div>{/* /.logo */}
						<div className="nav-wrap">
							<div className="btn-menu" onClick={handleMobileMenu}>
								<span className="line-1" />
							</div>{/* //mobile menu button */}
							<nav id="mainnav" className="mainnav">
								<div id="logo-mobie" className="logo">
									<Link to="/" rel="home">
										<img src="images/logo.png" alt="image" />
									</Link>
								</div>{/* /.logo */}
								<Menu />
							</nav>{/* /.mainnav */}
						</div>{/* /.nav-wrap */}
					</div>{/* /.header-inner */}
				</div>
			</header>

		</>
	)
}
