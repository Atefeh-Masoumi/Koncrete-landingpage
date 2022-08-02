import React from "react";
import homepage1 from "../../asset/Images/home-1.jpg";
import homepage2 from "../../asset/Images/home-2.jpg";
import homepage3 from "../../asset/Images/home-3.jpg";
import homepage4 from "../../asset/Images/home-4.jpg";
import homepage5 from "../../asset/Images/home-5.jpg";
import homepage6 from "../../asset/Images/home-6.jpg";
import homeONEpage1 from "../../asset/Images/home-1-onepage.jpg";
import homeONEpage2 from "../../asset/Images/home-2-onepage.jpg";
import homeONEpage3 from "../../asset/Images/home-3-onepage.jpg";
import homeONEpage4 from "../../asset/Images/home-4-onepage.jpg";
import homeONEpage5 from "../../asset/Images/home-5-onepage.jpg";
import homeONEpage6 from "../../asset/Images/home-6-onepage.jpg";

import "./Body.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Body = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      {/* background particle */}
      <div className="relative">
        <Particles
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: {
              zIndex: "0",
              enable: "false", // this is the line to change
            },
            style: {
              position: "absolute",
              zIndex: "1",
              height: "95vh",
            },
            background: {
              size: "50%",
              color: {
                value: "#2e2e37",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              number: {
                value: 140,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffc300",
              },
              shape: {
                type: "circle",

                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 300,
                },
              },
              opacity: {
                value: 0.6,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 2,
                  size_min: 0.1,
                  sync: false,
                },
              },

              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse",
                },
                onclick: {
                  enable: false,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                },
                bubble: {
                  distance: 100,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </div>
      {/* head text */}
      <div className="relative">
        <h3 className="head-body-text">
          <span className="text">دمو کاملا فارسی و قدرتمند</span>
          <span className="text font-84"> 6 </span>
        </h3>
      </div>
      {/* demos */}

      <div className="card-container">
        <div className="crad-wrapper">
          <div className="outer-card-div">
            {/* first card */}
            <figure className="card">
              <img src={homepage1} alt="demo1" className="demo" />
              <figcaption>
                <div>
                  <h4>پیش نمایش آنلاین</h4>
                  <p className="demo-text">
                    <span className="demo-span">دمو شماره 1 (پیش فرض)</span>
                  </p>
                </div>
                <a
                  href="https://danapeyvast.com/products/koncrete-wp-theme/demos/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </figcaption>
            </figure>
            {/* second card */}
            <figure className="card">
              <img src={homepage2} alt="demo2" className="demo" />
              <figcaption>
                <div>
                  <h4>پیش نمایش آنلاین</h4>
                  <p className="demo-text">
                    <span className="demo-span">دمو شماره 2 </span>
                  </p>
                </div>
                <a
                  href="https://danapeyvast.com/products/koncrete-wp-theme/demos/home-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </figcaption>
            </figure>

            {/* card no 3 */}
            <figure className="card">
              <img src={homepage3} alt="demo3" className="demo" />
              <figcaption>
                <div>
                  <h4>پیش نمایش آنلاین</h4>
                  <p className="demo-text">
                    <span className="demo-span">دمو شماره 3 </span>
                  </p>
                </div>
                <a
                  href="https://danapeyvast.com/products/koncrete-wp-theme/demos/home-3/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </figcaption>
            </figure>

            {/* card no 4 */}
            <figure className="card">
              <img src={homepage4} alt="demo4" className="demo" />
              <figcaption>
                <div>
                  <h4>پیش نمایش انلاین</h4>
                  <p className="demo-text">
                    <span className="demo-span">دمو شماره 4 </span>
                  </p>
                </div>
                <a
                  href="https://danapeyvast.com/products/koncrete-wp-theme/demos/home-4/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </figcaption>
            </figure>
            {/* card no 5 */}
            <figure className="card">
              <img src={homepage5} alt="demo5" className="demo" />
              <figcaption>
                <div>
                  <h4>پیش نمایش آنلاین</h4>
                  <p className="demo-text">
                    <span className="demo-span">دمو شماره 5 </span>
                  </p>
                </div>
                <a
                  href="https://danapeyvast.com/products/koncrete-wp-theme/demos/home-5/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </figcaption>
            </figure>

            {/* card no 6 */}
            <figure className="card">
              <img src={homepage6} alt="demo6" className="demo" />
              <figcaption>
                <div>
                  <h4>پیش نمایش آنلاین</h4>
                  <p className="demo-text">
                    <span className="demo-span">دمو شماره 6 </span>
                  </p>
                </div>
                <a
                  href="https://danapeyvast.com/products/koncrete-wp-theme/demos/home-6"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/*  One page demos text */}

      <div className="relative">
        <h3 className="head-body-text">
          <span className="text">دمو فارسی تک صفحه ای</span>
          <span className="text font-84"> 6 </span>
        </h3>
      </div>

      {/* ONE page container cards */}

      <div className="card-container">
        <div className="crad-wrapper">
          <div className="outer-card-div">
            {/* first card */}
            <figure className="card">
              <img src={homeONEpage1} alt="demo1" className="demo" />
              <figcaption>
                <div>
                  <h4>پیش نمایش آنلاین</h4>
                  <p className="demo-text">
                    <span className="demo-span">
                      دمو شماره 1 ( تک صفحه ای )
                    </span>
                  </p>
                </div>
                <a
                  href="https://danapeyvast.com/products/koncrete-wp-theme/demos/home-1-one-page/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </figcaption>
            </figure>
            {/* second card */}
            <figure className="card">
              <img src={homeONEpage2} alt="demo2" className="demo" />
              <figcaption>
                <div>
                  <h4>پیش نمایش آنلاین</h4>
                  <p className="demo-text">
                    <span className="demo-span">
                      دمو شماره 2 ( تک صفحه ای )
                    </span>
                  </p>
                </div>
                <a
                  href="https://danapeyvast.com/products/koncrete-wp-theme/demos/home-2-one-page/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </figcaption>
            </figure>

            {/* card no 3 */}
            <figure className="card">
              <img src={homeONEpage3} alt="demo3" className="demo" />
              <figcaption>
                <div>
                  <h4>پیش نمایش آنلاین</h4>
                  <p className="demo-text">
                    <span className="demo-span">دمو شماره 3 </span>
                  </p>
                </div>
                <a
                  href="https://danapeyvast.com/products/koncrete-wp-theme/demos/home-3-one-page/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </figcaption>
            </figure>

            {/* card no 4 */}
            <figure className="card">
              <img src={homeONEpage4} alt="demo4" className="demo" />
              <figcaption>
                <div>
                  <h4>پیش نمایش انلاین</h4>
                  <p className="demo-text">
                    <span className="demo-span">دمو شماره 4 </span>
                  </p>
                </div>
                <a
                  href="https://danapeyvast.com/products/koncrete-wp-theme/demos/home-4-one-page/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </figcaption>
            </figure>
            {/* card no 5 */}
            <figure className="card">
              <img src={homeONEpage5} alt="demo5" className="demo" />
              <figcaption>
                <div>
                  <h4>پیش نمایش آنلاین</h4>
                  <p className="demo-text">
                    <span className="demo-span">دمو شماره 5 </span>
                  </p>
                </div>
                <a
                  href="https://danapeyvast.com/products/koncrete-wp-theme/demos/home-5-one-page/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </figcaption>
            </figure>

            {/* card no 6 */}
            <figure className="card">
              <img src={homeONEpage6} alt="demo6" className="demo" />
              <figcaption>
                <div>
                  <h4>پیش نمایش آنلاین</h4>
                  <p className="demo-text">
                    <span className="demo-span">دمو شماره 6 </span>
                  </p>
                </div>
                <a
                  href="https://danapeyvast.com/products/koncrete-wp-theme/demos/home-6-one-page/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </figcaption>
            </figure>
          </div>
        </div>
      <footer className="footer-up">
      <div className="h-100">
        <div className="footer-container">
          <div className="footer">
            <h3 className="footer-text">
              !!!!بهترین قالب شرکتی و ساختمانی همین الان توی بهترین مارکت قالب و
              افزونه های فارسی ایرانه ! چی از این بهتر ؟؟؟
            </h3>
            <div className="footer-btn-container">
              <a className="footer-btn-text">
                <span>
                  <strong>
                  خرید قالب  از مارکت ژاکت
                  </strong>
                  </span>
              </a>
            </div>
          </div>  
        </div>

      </div>
      <div className="h-100 "></div>
      <div className="border-khat">
       <div>
        <span className="text-bottom">   بومی و فارسی سازی توسط : دانا پیوست © |  </span>
        <a className="text-bottom">مشاهده نمونه کارها و خرید محصولات</a>
       </div>
      </div>
    
      </footer>
      </div>

      {/* footer */}
    </>
  );
};

export default Body;
