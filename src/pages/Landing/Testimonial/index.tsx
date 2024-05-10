import img_1 from "../../../assets/raster-images/landing-page/carousel/01.jpg";
import manager from "../../../assets/raster-images/users/manager.jpg";
import Styles from "./styles";



function Testimonial() {
  return (
    <Styles id="Testimonial">
      <div className="page-wrapper flex">
        <div className="main-content">
          <h4>
            MANAGER
          </h4>
          <h2>
            PREMIER CULINARY DESTINATION IN KASOA, GHANA
          </h2>
          <div className="description">
            Masterfully crafting dishes that blend global{" "
            }flavors with local ingredients, we aim to provide{" "
            }an unforgettable dining experience. Our commitment{" "
            }to culinary excellence makes us a leader in Ghana's{" "
            }gastronomic scene.
          </div>
          <p className="quote">
            "Striving to redefine fine dining, we blend{" "
            }tradition with innovation to create extraordinary meals."
          </p>

          <figure className="manager flex align-center">
            <img src={manager} alt="" />
            <figcaption>
              <div className="bold">
                Afia Akuamoah
              </div>
              <div className="sub">
                Owner & Manager
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="cover-image">
          <img src={img_1} alt="" />
        </div>
      </div>
    </Styles>
  );
}

export default Testimonial; 