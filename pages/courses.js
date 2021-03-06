import Link from "next/dist/client/link";
import FooterContact from "../src/components/FooterContact";
import PageTitleBanner from "../src/components/PageTitleBanner";
import PaginationLayout from "../src/components/PaginationLayout";
import Layout from "../src/layout/Layout";

const Courses = () => {
  return (
    <Layout>
      <PageTitleBanner pageName="Aptitude Courses" />

      <section className="section-padding">
        <div className="container">
          <PaginationLayout id="#coursesId" sort={3}>
            <div className="row">
              {/* Coach block */}
              <div className="col-xl-4 col-md-6" id="coursesId">
                <div
                  className="coach_block wow fadeInUp"
                  data-wow-delay=".10ms"
                >
                  <div className="coach_img">
                    <img
                      src="assets/images/coach/c1.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <div className="coach_badges">
                      <span className="tag_badge bg-thm-color-four">Free</span>
                    </div>
                    <Link href="/course-details">
                      <a className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                        <i className="fal fa-chevron-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="coach_caption">
                    <div className="coach_meta">
                      <Link href="/courses">
                        <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                        Aptitude
                        </a>
                      </Link>
                      <div className="ratings">
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star" />
                      </div>
                    </div>
                    <h5 className="title mb-xl-20">
                      <Link href="/course-details">
                        Time and Work 
                      </Link>
                    </h5>
                    <div className="author">
                      <img
                        src="assets/images/author/a1.jpg"
                        alt="img"
                        className="image-fit"
                      />
                      <Link href="/courses">
                        <a className="thm-color-one">Wilbert A. Toney</a>
                      </Link>
                    </div>
                    <br></br>
                    <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded mock">
                     Take Mock
                    </a>
                  </div>
                </div>
              </div>
              {/* Coach block */}
              {/* Coach block */}
              <div className="col-xl-4 col-md-6" id="coursesId">
                <div
                  className="coach_block wow fadeInDown"
                  data-wow-delay=".20ms"
                >
                  <div className="coach_img">
                    <img
                      src="assets/images/coach/c2.webp"
                      alt="img"
                      className="image-fit"
                    />
                    <div className="coach_badges">
                      <span className="tag_badge bg-thm-color-four">$50</span>
                    </div>
                    <Link href="/course-details">
                      <a className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                        <i className="fal fa-chevron-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="coach_caption">
                    <div className="coach_meta">
                      <Link href="/courses">
                        <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                        Aptitude
                        </a>
                      </Link>
                      <div className="ratings">
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                      </div>
                    </div>
                    <h5 className="title mb-xl-20">
                      <Link href="/course-details">
                        Percentage
                      </Link>
                    </h5>
                    <div className="author">
                      <img
                        src="assets/images/author/a2.jpg"
                        alt="img"
                        className="image-fit"
                      />
                      <Link href="/courses">
                        <a className="thm-color-one">Emma H. Parish</a>
                      </Link>
                    </div>
                    <br></br>
                    <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded mock">
                     Take Mock
                    </a>
                  </div>
                </div>
              </div>
              {/* Coach block */}
              {/* Coach block */}
              <div className="col-xl-4 col-md-6" id="coursesId">
                <div
                  className="coach_block wow fadeInUp"
                  data-wow-delay=".30ms"
                >
                  <div className="coach_img">
                    <img
                      src="assets/images/coach/c3.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <div className="coach_badges">
                      <span className="tag_badge bg-thm-color-four">Free</span>
                    </div>
                    <Link href="/course-details">
                      <a className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                        <i className="fal fa-chevron-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="coach_caption">
                    <div className="coach_meta">
                      <Link href="/courses">
                        <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                        Aptitude
                        </a>
                      </Link>
                      <div className="ratings">
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star" />
                        <i className="fal fa-star" />
                      </div>
                    </div>
                    <h5 className="title mb-xl-20">
                      <Link href="/course-details">
                        Profit and Loss
                      </Link>
                    </h5>
                    <div className="author">
                      <img
                        src="assets/images/author/a3.jpg"
                        alt="img"
                        className="image-fit"
                      />
                      <Link href="/courses">
                        <a className="thm-color-one">Junior N. West</a>
                      </Link>
                    </div>
                    <br></br>
                    <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded mock">
                     Take Mock
                    </a>
                  </div>
                </div>
              </div>
              {/* Coach block */}
              {/* Coach block */}
              <div className="col-xl-4 col-md-6" id="coursesId">
                <div
                  className="coach_block wow fadeInDown"
                  data-wow-delay=".40ms"
                >
                  <div className="coach_img">
                    <img
                      src="assets/images/coach/c4.webp"
                      alt="img"
                      className="image-fit"
                    />
                    <div className="coach_badges">
                      <span className="tag_badge bg-thm-color-four">Free</span>
                    </div>
                    <Link href="/course-details">
                      <a className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                        <i className="fal fa-chevron-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="coach_caption">
                    <div className="coach_meta">
                      <Link href="/courses">
                        <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                          Aptitude
                        </a>
                      </Link>
                      <div className="ratings">
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star" />
                      </div>
                    </div>
                    <h5 className="title mb-xl-20">
                      <Link href="/course-details">
                        Calendar
                      </Link>
                    </h5>
                    <div className="author">
                      <img
                        src="assets/images/author/a1.jpg"
                        alt="img"
                        className="image-fit"
                      />
                      <Link href="/courses">
                        <a className="thm-color-one">Wilbert A. Toney</a>
                      </Link>
                    </div>
                    <br></br>
                    <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded mock">
                     Take Mock
                    </a>
                  </div>
                </div>
              </div>
              {/* Coach block */}
              {/* Coach block */}
              <div className="col-xl-4 col-md-6" id="coursesId">
                <div
                  className="coach_block wow fadeInUp"
                  data-wow-delay=".50ms"
                >
                  <div className="coach_img">
                    <img
                      src="assets/images/coach/c5.png"
                      alt="img"
                      className="image-fit"
                    />
                    <div className="coach_badges">
                      <span className="tag_badge bg-thm-color-four">$50</span>
                    </div>
                    <Link href="/course-details">
                      <a className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                        <i className="fal fa-chevron-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="coach_caption">
                    <div className="coach_meta">
                      <Link href="/courses">
                        <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                          Aptitude
                        </a>
                      </Link>
                      <div className="ratings">
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                      </div>
                    </div>
                    <h5 className="title mb-xl-20">
                      <Link href="/course-details">
                        Simple Interest
                      </Link>
                    </h5>
                    <div className="author">
                      <img
                        src="assets/images/author/a2.jpg"
                        alt="img"
                        className="image-fit"
                      />
                      <Link href="/courses">
                        <a className="thm-color-one">Emma H. Parish</a>
                      </Link>
                    </div>
                    <br></br>
                    <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded mock">
                     Take Mock
                    </a>
                  </div>
                </div>
              </div>
              {/* Coach block */}
              {/* Coach block */}
              <div className="col-xl-4 col-md-6" id="coursesId">
                <div
                  className="coach_block wow fadeInDown"
                  data-wow-delay=".60ms"
                >
                  <div className="coach_img">
                    <img
                      src="assets/images/coach/c6.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <div className="coach_badges">
                      <span className="tag_badge bg-thm-color-four">Free</span>
                    </div>
                    <Link href="/course-details">
                      <a className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                        <i className="fal fa-chevron-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="coach_caption">
                    <div className="coach_meta">
                      <Link href="/courses">
                        <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                          Aptitude
                        </a>
                      </Link>
                      <div className="ratings">
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star" />
                        <i className="fal fa-star" />
                      </div>
                    </div>
                    <h5 className="title mb-xl-20">
                      <Link href="/course-details">
                        Probability
                      </Link>
                    </h5>
                    <div className="author">
                      <img
                        src="assets/images/author/a3.jpg"
                        alt="img"
                        className="image-fit"
                      />
                      <Link href="/courses">
                        <a className="thm-color-one">Junior N. West</a>
                      </Link>
                    </div>
                    <br></br>
                    <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded mock">
                     Take Mock
                    </a>
                  </div>
                </div>
              </div>
              {/* Coach block */}
              {/* Coach block */}
              <div className="col-xl-4 col-md-6" id="coursesId">
                <div
                  className="coach_block wow fadeInUp"
                  data-wow-delay=".70ms"
                >
                  <div className="coach_img">
                    <img
                      src="assets/images/coach/c7.webp"
                      alt="img"
                      className="image-fit"
                    />
                    <div className="coach_badges">
                      <span className="tag_badge bg-thm-color-four">Free</span>
                    </div>
                    <Link href="/course-details">
                      <a className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                        <i className="fal fa-chevron-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="coach_caption">
                    <div className="coach_meta">
                      <Link href="/courses">
                        <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                          Aptitude
                        </a>
                      </Link>
                      <div className="ratings">
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star" />
                      </div>
                    </div>
                    <h5 className="title mb-xl-20">
                      <Link href="/course-details">
                        Clock
                      </Link>
                    </h5>
                    <div className="author">
                      <img
                        src="assets/images/author/a1.jpg"
                        alt="img"
                        className="image-fit"
                      />
                      <Link href="/courses">
                        <a className="thm-color-one">Wilbert A. Toney</a>
                      </Link>
                    </div>
                    <br></br>
                    <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded mock">
                     Take Mock
                    </a>
                  </div>
                </div>
              </div>
              {/* Coach block */}
              {/* Coach block */}
              <div className="col-xl-4 col-md-6" id="coursesId">
                <div
                  className="coach_block wow fadeInDown"
                  data-wow-delay=".80ms"
                >
                  <div className="coach_img">
                    <img
                      src="assets/images/coach/c8.png"
                      alt="img"
                      className="image-fit"
                    />
                    <div className="coach_badges">
                      <span className="tag_badge bg-thm-color-four">$45</span>
                    </div>
                    <Link href="/course-details">
                      <a className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                        <i className="fal fa-chevron-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="coach_caption">
                    <div className="coach_meta">
                      <Link href="/courses">
                        <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                          Aptitude
                        </a>
                      </Link>
                      <div className="ratings">
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                      </div>
                    </div>
                    <h5 className="title mb-xl-20">
                      <Link href="/course-details">
                        Permutation and Combination
                      </Link>
                    </h5>
                    <div className="author">
                      <img
                        src="assets/images/author/a2.jpg"
                        alt="img"
                        className="image-fit"
                      />
                      <Link href="/courses">
                        <a className="thm-color-one">Emma H. Parish</a>
                      </Link>
                    </div>
                    <br></br>
                    <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded mock">
                     Take Mock
                    </a>
                  </div>
                </div>
              </div>
              {/* Coach block */}
              {/* Coach block */}
              <div className="col-xl-4 col-md-6" id="coursesId">
                <div
                  className="coach_block wow fadeInUp"
                  data-wow-delay=".90ms"
                >
                  <div className="coach_img">
                    <img
                      src="assets/images/coach/c9.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <div className="coach_badges">
                      <span className="tag_badge bg-thm-color-four">$93</span>
                    </div>
                    <Link href="/course-details">
                      <a className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                        <i className="fal fa-chevron-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="coach_caption">
                    <div className="coach_meta">
                      <Link href="/courses">
                        <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                          Aptitude
                        </a>
                      </Link>
                      <div className="ratings">
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star active" />
                        <i className="fal fa-star" />
                        <i className="fal fa-star" />
                      </div>
                    </div>
                    <h5 className="title mb-xl-20">
                      <Link href="/course-details">
                        Ratio and Proportion
                      </Link>
                    </h5>
                    <div className="author">
                      <img
                        src="assets/images/author/a3.jpg"
                        alt="img"
                        className="image-fit"
                      />
                      <Link href="/courses">
                        <a className="thm-color-one">Junior N. West</a>
                      </Link>
                    </div>
                    <br></br>
                    <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded mock">
                     Take Mock
                    </a>
                  </div>
                </div>
              </div>
              {/* Coach block */}
            </div>
          </PaginationLayout>
          {/* Pagination */}
        </div>
      </section>
      {/* Coach Grid End */}
      {/* Plane Start 
      <div className="bg-thm-color-two plane_box relative z-1">
        <div className="container relative z-1">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11 relative z-1">
              <img
                src="assets/images/elements/element6.png"
                className="element_1 rotate_elem"
                alt="Element"
              />
              <h2 className="thm-color-white">
                The Life Coach School Has The Most Amazing Tools And
                Cutting-Edge Training
              </h2>
            </div>
          </div>
          <img
            src="assets/images/elements/element10.png"
            className="element_2 zoom-fade icon-default-height"
            alt="Element"
          />
        </div>
      </div>
       Plane End */}
      {/* Portfolio Start 
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <div className="section-title left-align wow fadeInLeft">
                <p className="subtitle">
                  <i className="fal fa-book" />
                  Project Gallery
                </p>
                <h3 className="title">
                  We Have 34520+ Project Successfully Done
                </h3>
              </div>
            </div>
            <div className="col-lg-5 text-left text-lg-right wow fadeInRight">
              <Link href="/portfolio-grid">
                <a className="thm-btn bg-thm-color-white thm-color-one btn-border btn-rectangle mb-xl-60">
                  View All Project
                  <i className="fal fa-chevron-right ml-2" />
                </a>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="portfolio_box wow fadeInUp">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/1.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <div className="portfolio_caption">
                  <div className="text_box">
                    <h4 className="title mb-0">
                      <Link href="/portfolio-details">
                        How To Gain Knowledge
                      </Link>
                    </h4>
                    <p>Business Coach</p>
                  </div>
                  <div className="btn_box mb-xl-30">
                    <Link href="/portfolio-details">
                      <a className="thm-btn bg-thm-color-two-light thm-color-two btn-rectangle btn-small">
                        <i className="fal fa-chevron-right font-weight-bold" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="portfolio_box wow fadeInDown">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/2.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <div className="portfolio_caption">
                  <div className="text_box">
                    <h4 className="title mb-0">
                      <Link href="/portfolio-details">
                        Online Consulting Tutorials
                      </Link>
                    </h4>
                    <p>Business Coach</p>
                  </div>
                  <div className="btn_box mb-xl-30">
                    <Link href="/portfolio-details">
                      <a className="thm-btn bg-thm-color-two-light thm-color-two btn-rectangle btn-small">
                        <i className="fal fa-chevron-right font-weight-bold" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <FooterContact />
    </Layout>
  );
};

export default Courses;
