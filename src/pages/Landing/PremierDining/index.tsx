import img_00 from "../../../assets/raster-images/landing-page/premier/00.jpeg";
import Styles from "./styles";



type Stat = {
  title: string,
  value: string
}

const stats: Stat[] = [
  {
    title: "Signature Dishes",
    value: "250 +"
  },
  {
    title: "Avg. Diner Satisfaction Rating",
    value: "4.9"
  }
]


function PremierDining() {
  return (
    <Styles id="PremierDining">
      <div className="page-wrapper flex center wrap">
        <div
          className="cover-image"
          style={{ backgroundImage: `url(${img_00})` }}
        />
        <div className="main-content">
          <h4>
            PREMIER DINING AND CUISINE
          </h4>
          <h2>
            EXQUISITE CUISINE IN THE HEART OF CENTRAL REGION
          </h2>
          <div className="description">
            Experience the art of fine dining with our chef's {" "
            }innovative culinary creations, crafted from {" "
            }locally-sourced ingredients. Explore a diverse{" "
            }menu that blends traditional flavors with modern{" "
            }gastronomic techniques.
          </div>
          <div className="stats flex align-center">
            {stats.map((stat) =>
              <div
                key={stat.title}
                className="stat flex column"
              >
                <h3 className="value">
                  {stat.value}
                </h3>
                <div className="title">
                  {stat.title}
                </div>
              </div>
            )}
          </div>

          <div className="cta">
            <button className="button fit-content">
              DISCOVER OUR MENU
            </button>
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default PremierDining;