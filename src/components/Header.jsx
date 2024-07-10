import React, { act, useState } from 'react'
import { Link } from "react-router-dom";

const Header = () => {
	const [active,setActive]=useState('home')
  return (
    <>
        {/* <!-- Start Header/Navigation --> */}
		<nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

			<div className="container">
				<a className="navbar-brand" href="index.html">Furni<span>.</span></a>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarsFurni">
					<ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
						<li className={`${active=='home' ?'active':''}`} onClick={()=>setActive('home')}>
							<Link className="nav-link" to='/'>Home</Link>
						</li>
						<li className={`${active=='shop' ?'active':''}`} onClick={()=>setActive('shop')}><Link className="nav-link" to="/shop">Shop</Link></li>
						<li className={`${active=='about' ?'active':''}`} onClick={()=>setActive('about')}><Link className="nav-link" to="/about">About us</Link></li>
						<li className={`${active=='services' ?'active':''}`}><Link className="nav-link" to="/services" onClick={()=>setActive('services')}>Services</Link></li>
						<li className={`${active=='blog' ?'active':''}`}><Link className="nav-link" to="/blog">Blog</Link></li>
						<li className={`${active=='contact' ?'active':''}`}><Link className="nav-link" to="/contact">Contact us</Link></li>
					</ul>

					<ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
						<li><a className="nav-link" href="#"><img src="assets/images/user.svg"/></a></li>
						<li><a className="nav-link" href="cart.html"><img src="assets/images/cart.svg"/></a></li>
					</ul>
				</div>
			</div>
				
		</nav>
		{/* <!-- End Header/Navigation --> */}
      
    </>
  )
}

export default Header
