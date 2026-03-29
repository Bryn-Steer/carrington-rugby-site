import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/about'
import BlogSingle from './pages/blog-single'
import BlogSingle2 from './pages/blog-single2'
import BlogSingle3 from './pages/blog-single3'
import BlogSingle4 from './pages/blog-single4'
import Blog from './pages/blog'
import Contact from './pages/contact'
import EventDetails from './pages/event-details'
import Event from './pages/event'
import Homev2 from './pages/homev2'
import Homev3 from './pages/homev3'
import Home from './pages/index'

export default function MainRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog-single" element={<BlogSingle />} />
				<Route path="/blog-single2" element={<BlogSingle2 />} />
				<Route path="/blog-single3" element={<BlogSingle3 />} />
				<Route path="/blog-single4" element={<BlogSingle4 />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/event" element={<Event />} />
				<Route path="/event-details" element={<EventDetails />} />
				<Route path="/homev2" element={<Homev2 />} />
				<Route path="/homeV3" element={<Homev3 />} />
			</Routes>
		</BrowserRouter>
	)
}