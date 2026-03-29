import { Link } from "react-router-dom"

export default function About1() {
	return (
		<div className="tf-widget-about-us main-content">
			<div className="themeflat-container">
				<div className="tf-about-us">
					<div className="row">
						<div className="col-md-6 image-wraper">
							<div className="media">
								<div className="media-v1 wow fadeInLeft animated">
									<img className="mask-media" src="images/about/mask1.png" alt="Carrington Rugby Club training" />
									<img className="shape-media" src="images/about/graphic.png" alt="Graphic shape" />
								</div>
								<img
									src="images/about/mask2.svg"
									alt="Carrington Rugby Club players"
									className="image-gr wow fadeInRight animated"
								/>
								<img src="images/about/Intersect.png" alt="Decorative shape" className="intersect-img" />
							</div>
						</div>

						<div className="col-md-6">
							<div className="about-box">
								<img src="images/about/graphic-box.png" alt="Graphic box shape" />

								<div className="title-box title-small-v2">
									<span className="sub-title wow fadeInUp animated">Welcome to the Pigs</span>
									<h2 className="title-section wow fadeInUp animated">
										Carrington RUFC. Rugby for Everyone.
									</h2>
								</div>

								<p className="post wow fadeInUp animated">
									Carrington Rugby Club is a community-built team where everyone has a place on the
									pitch. All ages, all abilities, all backgrounds.
								</p>

								<div className="line" />

								<div className="about-button-group">
									<Link to="/about" className="flat-button wow fadeInUp animated">
										Find out more
									</Link>

									<div className="infor-about">
										{/* Optional chairman info can go here later */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}