import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Menu() {
	const location = useLocation()
	const [currentMenuItem, setCurrentMenuItem] = useState("")

	// Scroll to the top on route change
	useEffect(() => {
		setCurrentMenuItem(location.pathname)
		window.scrollTo(0, 0) // This will scroll the page to the top whenever the route changes
	}, [location.pathname])

	const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current-menu-item" : ""
	const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current-menu-item" : ""

	return (
		<>
			<ul className="menu">
				<li className={`item ${checkCurrentMenuItem("/")}`}><Link to="/">Home</Link></li>
				<li className={`item ${location.pathname === "/about" ? "current-menu-item" : ""}`}><Link to="/about">About us</Link></li>
				<li className={`item ${checkCurrentMenuItem("/blog")}`}><Link to="/blog">Blogs</Link></li>
				<li className={`item ${location.pathname === "/contact" ? "current-menu-item" : ""}`}><Link to="/contact">Contact us</Link></li>
			</ul>{/* /.menu */}
		</>
	)
}
