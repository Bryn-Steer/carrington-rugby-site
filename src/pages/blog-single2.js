

import { Link } from "react-router-dom"
import Layout from "../components/layout/Layout"
export default function BlogSingle() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="title">
				<div>
					<div className="page-title page-title-blog text-left">
						<div className="themeflat-container">
							<div className="row">
								<div className="col-md-12">
									<div className="page-title-heading">
										<h1 className="title">Articles</h1>
									</div>{/* /.page-title-captions */}
									<div className="breadcrumbs">
										<ul>
											<li><Link to="/">Homepage</Link></li>
											<li> <i className="icon-Arrow---Right-2" /></li>
											<li><a>Latest News</a></li>
										</ul>
									</div>{/* /.breadcrumbs */}
								</div>{/* /.col-md-12 */}
							</div>{/* /.row */}
						</div>{/* /.container */}
					</div>{/* /.page-title */}
					{/* Blog Posts */}
					<section className="main-content blog-content-single">
						<div className="themeflat-container">
							<div className="row">
								<div className="col-md-12 col-lg-9 col-xl-9 col-xxl-9 widget-blog-content">
									<div className="post-wrap">
										<article className="entry format-standard">
											<div className="main-post">
												<div className="tag">
													<ul>
														<li>
															<Link to="">Rugby</Link>
														</li>
													</ul>
												</div>
												<h2 className="entry-title-single">
													No Experience? No Problem. How We Welcome New Rugby Players in Manchesterccc
												</h2>
												<div className="entry-meta">
													<span className="author line"><Link to="/#">by
														Bryn Steer </Link></span>
													<span className="date line"><Link to="/#">Feb 12, 2026</Link></span>
												</div>{/* /.entry-meta */}
												<div className="entry-content">
													<p className="post">Joining a new sports club can feel daunting. You might be wondering if you are fit enough, experienced enough, or even the right type of person to play rugby.</p>
													<p className="post">At Carrington Rugby Club in Manchester, we have built our approach around removing those barriers.</p>
												</div>{/* /.entry-post */}
												<div className="feature-post">
													<div className="entry-image">
														<img src="images/blog/blog2.jpg" alt="image" />
													</div>{/* /.entry-image */}
												</div>{/* /.feature-post */}
												<div className="content-post-single">
													<h5 className="title-single">A Rugby Club That Welcomes Beginners</h5>
													<p className="post">
														Many traditional rugby environments can feel exclusive. At Carrington, we have taken a different approach. We welcome players of all backgrounds, all fitness levels, and all levels of experience.
													</p>
													<p className="post">
														Whether you have never played rugby before or you are returning after years away, you will be supported from your very first session.
													</p>
													<h5 className="title-single">Your First Visit Made Simple</h5>
													<p className="post">
														We keep things straightforward for new players. When you arrive, you will be greeted by coaches and members who understand what it feels like to be new.
													</p>
													<p>
														You will be introduced to the session in a clear and relaxed way. There is no pressure to keep up or perform. You can take things at your own pace.
													</p>
													<h5 className="title-single">Learning Rugby Step by Step</h5>
													<p className="post">
														Our training sessions are designed to help you build confidence gradually. You will learn the basics through simple, structured activities that make the game easy to understand.
													</p>
													<p>
														As your confidence grows, so will your ability. The focus is always on development, not perfection.
													</p>
													<h5 className="title-single">A Supportive Team Environment</h5>
													<p className="post">
														One of the most important parts of any rugby club is the culture. At Carrington, we prioritise respect, encouragement, and inclusivity.
													</p>
													<p>
														Players support each other on and off the pitch. Questions are welcomed. Mistakes are part of the process. Everyone is there to improve and enjoy the game together.
													</p>
													<h5 className="title-single">Join a Rugby Club in Manchester With No Experience</h5>
													<p className="post">
														If you are looking for a rugby club in Manchester where no experience is required, Carrington offers a genuine starting point.
													</p>
													<p>
														You do not need to prepare. You do not need to be perfect. You just need to come along and get involved.
													</p>
												</div>{/* /.content-post-single */}
											</div>{/* /.main-post */}
										</article>
										
									</div>{/* /.post-wrap */}
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
														<li><Link to="/blog-single">Training</Link></li>
													</ul>
												</div>
												<h2 className="entry-title wow fadeInUp animated"><Link to="/blog-single">No Experience? No Problem. How We Welcome New Players at Carrington</Link>
												</h2>
												<div className="entry-meta wow fadeInUp animated">
													<span className="author line"> <Link to="/blog-single"></Link></span>
													<span className="date line"><Link to="/blog-single">Oct 12, 2025</Link></span>
												</div>
												<Link className="more-link wow fadeInUp animated" to="/blog-single">Read More</Link>
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
														<li><Link to="/blog-single">History</Link></li>
													</ul>
												</div>
												<h2 className="entry-title wow fadeInUp animated"><Link to="/blog-single">More Than Rugby: How the Pigs Became a Proper Community</Link>
												</h2>
												<div className="entry-meta wow fadeInUp animated">
													<span className="author line"> <Link to="/blog-single"> </Link></span>
													<span className="date line"><Link to="/blog-single">Oct 12, 2025</Link></span>
												</div>
												<Link className="more-link wow fadeInUp animated" to="/blog-single">Read More</Link>
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
														<li><Link to="/blog-single">Training</Link></li>
													</ul>
												</div>
												<h2 className="entry-title wow fadeInUp animated"><Link to="/blog-single">From “I’ll Just Watch” to “See You at Training”</Link>
												</h2>
												<div className="entry-meta wow fadeInUp animated">
													<span className="author line"> <Link to="/blog-single"></Link></span>
													<span className="date line"><Link to="/blog-single">Oct 12, 2025</Link></span>
												</div>
												<Link className="more-link wow fadeInUp animated" to="/blog-single">Read More</Link>
												{/* /.entry-meta */}
											</div>{/* /.main-post */}
										</article>
									</div>
								</div>
							</div>
						</div>{/* /.container */}
					</section>
				</div>

			</Layout>
		</>
	)
}