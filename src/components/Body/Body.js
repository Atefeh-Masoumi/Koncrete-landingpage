import React from "react";
import homepage1 from "../../asset/Images/home-1.jpg";
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
            enable: "false" // this is the line to change
          },
          style:{
            position: "absolute",
            zIndex: "1",
            height: "65vh",
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
            "particles": {
              "number": {
                "value": 140,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffc300"
              },
              "shape": {
                "type": "circle",
                
                
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 300
                }
              },
              "opacity": {
                "value": 0.6,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 2,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              
              "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": false,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  
                },
                "bubble": {
                  "distance": 100,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          
          
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
              <figure className="card">
                <img src={homepage1} alt="demo1" className="demo"/>
                <figcaption>
                  <div>
                    <h4>پیش نمایش انلاین</h4>
                    <p className="demo-text">
                      <span className="demo-span" >دمو شماره 1 (پیش فرض)</span>
                    </p>
                  </div>
                  <a href="https://danapeyvast.com/products/koncrete-wp-theme/demos/">

                  </a>
                </figcaption>

              </figure>

            </div>

          </div>

        </div>

        {/* footer */}

        <div className="footer">
          <div>

          </div>
        </div>

    </>
  );
};

export default Body;
