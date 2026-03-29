

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
													More Than Rugby: How Carrington Became a True Community Club in Manchester
												</h2>
												<div className="entry-meta">
													<span className="author line"><Link to="">by
														Bryn Steer </Link></span>
													<span className="date line"><Link to="">Feb 12, 2026</Link></span>
												</div>{/* /.entry-meta */}
												<div className="entry-content">
													<p className="post">Rugby is at the heart of Carrington Rugby Club, but it is not the only reason people stay.</p>
													<p className="post">Across Manchester, there are many sports clubs that focus purely on performance. Carrington has developed something broader. It is a place where rugby and community come together.</p>
												</div>{/* /.entry-post */}
												<div className="feature-post">
													<div className="entry-image">
														<img src="images/blog/blog3.jpg" alt="image" />
													</div>{/* /.entry-image */}
												</div>{/* /.feature-post */}
												<div className="content-post-single">
													<h5 className="title-single">A Club Built Around People</h5>
													<p className="post">
														At Carrington, the focus is not just on results or competition. It is on people. Every member plays a role in shaping the club’s environment.
													</p>
													<p className="post">
														From new players to long-standing members, everyone contributes to the atmosphere. This creates a strong sense of belonging that goes beyond training sessions.
													</p>
													<h5 className="title-single">Connections That Go Beyond the Pitch</h5>
													<p className="post">
														Many of the strongest relationships at the club are built outside of rugby. Conversations after training, shared experiences, and social events all help strengthen the community.
													</p>
													<p>
														This is what makes Carrington different from a typical sports club. It becomes part of your routine, your social life, and your support network.
													</p>
													<h5 className="title-single">Supporting Wellbeing Through Rugby</h5>
													<p className="post">
														Rugby provides more than physical benefits. It supports mental wellbeing, confidence, and routine.
													</p>
													<p>
														At Carrington, players often join for fitness but stay because of the positive impact on their overall wellbeing. Being part of a team creates accountability, structure, and a sense of purpose.
													</p>
													<h5 className="title-single">A Community Rugby Club in Manchester</h5>
													<p className="post">
														Carrington Rugby Club is proud to represent a community-first approach to sport in Manchester.
													</p>
													<p>
														It is a place where people can come together, stay active, and feel part of something meaningful. Rugby is the starting point, but the community is what makes it last.
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