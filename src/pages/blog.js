

import { Link } from "react-router-dom"
import Layout from "../components/layout/Layout"
export default function Blog() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="title">
				<div>
					<div className="page-title">
						<div className="themeflat-container">
							<div className="row">
								<div className="col-md-12">
									<div className="page-title-heading">
										<h1 className="title">latest news</h1>
									</div>{/* /.page-title-captions */}
									<div className="breadcrumbs">
										<ul>
											<li><Link to="/">Homepage</Link></li>
											<li> <i className="icon-Arrow---Right-2" /></li>
											<li><span>Latest News</span></li>
										</ul>
									</div>{/* /.breadcrumbs */}
								</div>{/* /.col-md-12 */}
							</div>{/* /.row */}
						</div>{/* /.container */}
					</div>{/* /.page-title */}
					{/* Blog Posts */}
					<section className="main-content blog-posts">
						<div className="themeflat-container">
							<div className="row">
								<div className="col-md-12 col-lg-9 col-xl-9 col-xxl-9 widget-blog-content">
									<div className="post-wrap">
										<article className="entry format-standard wow fadeInUp animated">
											<div className="feature-post">
												<img src="images/blog/blog1.jpg" alt="image" />
											</div>{/* /.feature-post */}
											<div className="main-post">
												<div className="tag">
													<ul>
														<li>
															<Link to="/blog-single">Rugby</Link>
														</li>
													</ul>
												</div>
												<h2 className="entry-title"><Link to="/blog-single">Why Your First Rugby Session Is Easier Than You Think (Beginner Rugby in Manchester)</Link>
												</h2>
												<div className="entry-meta">by
													<span className="author line"><Link to="/blog-single"> Bryn Steer</Link></span>
													<span className="date line"><Link to="/blog-single">Feb 12, 2026</Link></span>
												</div>
												<Link className="more-link" to="/blog-single">Read More</Link>
												{/* /.entry-meta */}
											</div>{/* /.main-post */}
										</article>
										<article className="entry format-standard wow fadeInUp animated">
											<div className="feature-post">
												<img src="images/blog/blog2.jpg" alt="image" />
											</div>{/* /.feature-post */}
											<div className="main-post">
												<div className="tag">
													<ul>
														<li>
															<Link to="/blog-single2">Rugby</Link>
														</li>
													</ul>
												</div>
												<h2 className="entry-title"><Link to="/blog-single2">No Experience? No Problem. How We Welcome New Rugby Players in Manchester</Link>
												</h2>
												<div className="entry-meta">by
													<span className="author line"><Link to="/blog-single2"> Bryn Steer</Link></span>
													<span className="date line"><Link to="/blog-single2">Feb 12, 2026</Link></span>
												</div>
												<Link className="more-link" to="/blog-single2">Read More</Link>
												{/* /.entry-meta */}
											</div>{/* /.main-post */}
										</article>
										<article className="entry format-standard wow fadeInUp animated">
											<div className="feature-post">
												<img src="images/blog/blog3.jpg" alt="image" />
											</div>{/* /.feature-post */}
											<div className="main-post">
												<div className="tag">
													<ul>
														<li>
															<Link to="/blog-single">Rugby</Link>
														</li>
													</ul>
												</div>
												<h2 className="entry-title"><Link to="/blog-single3">More Than Rugby: How Carrington Became a True Community Club in Manchester</Link>
												</h2>
												<div className="entry-meta">by
													<span className="author line"><Link to="/blog-single3"> Bryn Steer</Link></span>
													<span className="date line"><Link to="/blog-single3">Feb 12, 2026</Link></span>
												</div>
												<Link className="more-link" to="/blog-single3">Read More</Link>
												{/* /.entry-meta */}
											</div>{/* /.main-post */}
										</article>
										<article className="entry format-standard wow fadeInUp animated">
											<div className="feature-post">
												<img src="images/blog/blog4.jpg" alt="image" />
											</div>{/* /.feature-post */}
											<div className="main-post">
												<div className="tag">
													<ul>
														<li>
															<Link to="/blog-single">Rugby</Link>
														</li>
													</ul>
												</div>
												<h2 className="entry-title"><Link to="/blog-single4">From “I’ll Just Watch” to “See You at Training” (Starting Rugby in Manchester)</Link>
												</h2>
												<div className="entry-meta">by
													<span className="author line"><Link to="/blog-single4"> Bryn Steer</Link></span>
													<span className="date line"><Link to="/blog-single4">Feb 12, 2026</Link></span>
												</div>
												<Link className="more-link" to="/blog-single4">Read More</Link>
												{/* /.entry-meta */}
											</div>{/* /.main-post */}
										</article>
									</div>
								</div>{/* /.col-md-9 */}
								<div className="col-md-12 col-lg-3 col-xl-3 col-xxl-3">
									<div className="sidebar">
										<div className="widget widget-form-subscribe">
											<h3>Subscribe For Daily Newsletter</h3>
											<img src="images/blog/subscribe.png" alt="image" />
											<form action="/">
												<input type="email" id="email-sb" name="email" placeholder="Your email address" />
												<input type="submit" defaultValue="Follow" />
											</form>
										</div>{/* /.widget-Archive */}
									</div>{/* /.sidebar */}
								</div>{/* /.col-md-3 */}
							</div>{/* /.row */}
						</div>{/* /.container */}
					</section>
				</div>

			</Layout>
		</>
	)
}