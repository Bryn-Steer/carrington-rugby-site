

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
													From “I’ll Just Watch” to “See You at Training” (Starting Rugby in Manchester)
												</h2>
												<div className="entry-meta">
													<span className="author line"><Link to="">by
														Bryn Steer </Link></span>
													<span className="date line"><Link to="">Feb 12, 2026</Link></span>
												</div>{/* /.entry-meta */}
												<div className="entry-content">
													<p className="post">Many people who think about joining a rugby club never take the first step. They tell themselves they will watch first, wait until they feel ready, or come along at some point in the future.</p>
													<p className="post">At Carrington Rugby Club, we have seen this pattern many times. Almost every current player started with hesitation.</p>
												</div>{/* /.entry-post */}
												<div className="feature-post">
													<div className="entry-image">
														<img src="images/blog/blog4.jpg" alt="image" />
													</div>{/* /.entry-image */}
												</div>{/* /.feature-post */}
												<div className="content-post-single">
													<h5 className="title-single">Why People Hesitate to Start Rugby</h5>
													<p className="post">
														One of the biggest misconceptions about rugby is that you need to know how to play before you join a club. The reality is the opposite. Most players learn by doing, not by arriving fully prepared.
													</p>
													<p className="post">
														At Carrington, beginner rugby sessions are designed to help you ease into the game. You will be guided through simple drills, basic movement patterns, and team-based activities that build confidence over time. Nobody expects perfection. The focus is on learning and enjoying the process.
													</p>
													<h5 className="title-single">Training Is Structured for All Levels</h5>
													<p className="post">
														Our sessions are built around mixed ability groups. This means you will train alongside players who are at different stages, from complete beginners to experienced members.
													</p>
													<p>
														This structure removes pressure and creates a supportive environment. You can progress at your own pace while still being part of the session. Coaches and players are there to help, not to judge.
													</p>
													<h5 className="title-single">Fitness Comes With Time</h5>
													<p className="post">
														Another common concern is fitness. Many people think they need to get fit before joining a rugby club. In reality, fitness develops through consistent training.
													</p>
													<p>
														You do not need to arrive in peak condition. You just need to show up. Over time, your strength, stamina, and confidence will improve naturally.
													</p>
													<h5 className="title-single">What Your First Session Will Feel Like</h5>
													<p className="post">
														When you arrive at Carrington Rugby Club, you will be welcomed straight away. You will meet players, be introduced to the session, and be guided through everything step by step.
													</p>
													<p>
														There is no pressure to perform. No expectation to prove yourself. Just an opportunity to get involved and enjoy rugby.
													</p>
													<h5 className="title-single">Beginner Rugby in Manchester Starts Here</h5>
													<p className="post">
														If you are searching for a beginner rugby club in Manchester, the hardest part is often just turning up for the first time.
													</p>
													<p>
														Once you do, you will realise that rugby is not about being perfect. It is about effort, enjoyment, and being part of a team.
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