
import { Link } from "react-router-dom"

export default function Blog() {
	return (
		<>

			<div className="tf-widget-blog main-content">
				<div className="themeflat-container">
					<div className="widget-tf-blog">
						<div className="tf-title-wrap title-small">
							<h2 className="title-blog wow fadeInUp animated">
								Our Blogs
							</h2>
							<Link to="/blog" className="view-more wow fadeInUp animated">View all
								<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_6718_7111)">
										<path d="M5.25 4.5L12.75 12L5.25 19.5" stroke="#121212" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
										<path d="M12.75 4.5L20.25 12L12.75 19.5" stroke="#121212" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
									</g>
								</svg>
							</Link>
						</div>
						<div className="row">
							<div className="col-md-12 col-lg-6 col-xl-6 col-xxl-6 widget-blog-left">
								<article className="entry-widget-blog format-standard wow fadeInLeft animated">
									<div className="feature-post">
										<img src="images/blog/post-widget1.jpg" alt="image" />
									</div>{/* /.feature-post */}
									<div className="main-post">
										<div className="tag">
											<ul>
												<li>
													<Link to="/blog-single">Rugby</Link>
												</li>
											</ul>
										</div>
										<h2 className="entry-title"><Link to="/blog-single">Why Your First Rugby Session Is Easier Than You Think</Link>
										</h2>
										<div className="entry-meta">
											<span className="author line"><Link to="/blog-single"> </Link></span>
											<span className="date line"><Link to="/blog-single">Oct 12, 2025</Link></span>
										</div>
										<Link className="more-link" to="/blog-single">Read More</Link>
										{/* /.entry-meta */}
									</div>{/* /.main-post */}
								</article>
							</div>
							<div className="col-md-12 col-lg-6 col-xl-6 col-xxl-6 widget-blog-right">
								<article className="entry-item format-standard">
									<div className="feature-post">
										<img src="images/blog/post-widget2.jpg" alt="image" />
									</div>{/* /.feature-post */}
									<div className="main-post">
										<div className="tag wow fadeInUp animated">
											<ul>
												<li><Link to="/blog-single2">Training</Link></li>
											</ul>
										</div>
										<h2 className="entry-title wow fadeInUp animated"><Link to="/blog-single2">No Experience? No Problem. How We Welcome New Players at Carrington</Link>
										</h2>
										<div className="entry-meta wow fadeInUp animated">
											<span className="author line"> <Link to="/blog-single2"></Link></span>
											<span className="date line"><Link to="/blog-single2">Oct 12, 2025</Link></span>
										</div>
										<Link className="more-link wow fadeInUp animated" to="/blog-single2">Read More</Link>
										{/* /.entry-meta */}
									</div>{/* /.main-post */}
								</article>
								<article className="entry-item format-standard">
									<div className="feature-post">
										<img src="images/blog/post-widget3.jpg" alt="image" />
									</div>{/* /.feature-post */}
									<div className="main-post">
										<div className="tag wow fadeInUp animated">
											<ul>
												<li><Link to="/blog-single3">History</Link></li>
											</ul>
										</div>
										<h2 className="entry-title wow fadeInUp animated"><Link to="/blog-single3">More Than Rugby: How the Pigs Became a Proper Community</Link>
										</h2>
										<div className="entry-meta wow fadeInUp animated">
											<span className="author line"> <Link to="/blog-single3"></Link></span>
											<span className="date line"><Link to="/blog-single3">Oct 12, 2025</Link></span>
										</div>
										<Link className="more-link wow fadeInUp animated" to="/blog-single3">Read More</Link>
										{/* /.entry-meta */}
									</div>{/* /.main-post */}
								</article>
								<article className="entry-item format-standard">
									<div className="feature-post">
										<img src="images/blog/post-widget4.jpg" alt="image" />
									</div>{/* /.feature-post */}
									<div className="main-post">
										<div className="tag wow fadeInUp animated">
											<ul>
												<li><Link to="/blog-single4">Training</Link></li>
											</ul>
										</div>
										<h2 className="entry-title wow fadeInUp animated"><Link to="/blog-single4">From “I’ll Just Watch” to “See You at Training”</Link>
										</h2>
										<div className="entry-meta wow fadeInUp animated">
											<span className="author line"> <Link to="/blog-single4"></Link></span>
											<span className="date line"><Link to="/blog-single4">Oct 12, 2025</Link></span>
										</div>
										<Link className="more-link wow fadeInUp animated" to="/blog-single4">Read More</Link>
										{/* /.entry-meta */}
									</div>{/* /.main-post */}
								</article>
							</div>
						</div>
					</div>
				</div>{/* widge blog */}
			</div>
		</>
	)
}
