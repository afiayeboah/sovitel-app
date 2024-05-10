import Styles from "./styles";

import img_00 from "../../../assets/raster-images/landing-page/top-picks/00.jpeg";
import img_01 from "../../../assets/raster-images/landing-page/top-picks/01.jpeg";
import img_02 from "../../../assets/raster-images/landing-page/top-picks/02.jpeg";



type CardType = {
  name: string;
  description: string;
  image: string;
  price: string;
  serving: string;
  rating: string;
}


function TopPicks() {
  const cards: CardType[] = [
    {
      name: "Signature Steak",
      description: (
        `Premium grilled steak, seasoned with our house${" "
        }blend of spices.`
      ),
      image: img_00,
      price: "$30",
      serving: "Serves 2 | Chef's Special",
      rating: "★★★★★"
    },
    {
      name: "Family Feast Platter",
      description: (
        `A generous platter designed for family${" "
        }enjoyment, includes chicken, ribs, and sides."`
      ),
      image: img_01,
      price: "$110",
      serving: "Serves 4-6 | Family Favorite",
      rating: "★★★★★"
    },
    {
      name: "Seafood Delight",
      description: (
        `An exquisite selection of fresh seafood,${" "
        }featuring lobster, shrimp, and scallops.`
      ),
      image: img_02,
      price: "$40",
      serving: "Serves 2 | Ocean Fresh",
      rating: "★★★★☆"
    }
  ]



  return (
    <Styles id="TopPicks">
      <div className="page-wrapper">
        <div className="section-heading">
          <div className="title">
            CLASSIC MEALS
          </div>
          <div className="description">
            Seamlessly blending culinary sophistication with{" "
            }innovative gastronomy, our restaurant offers a {" "
            }sanctuary of flavors and comfort. Discover {" "
            }unparalleled service and a menu that sets a {" "
            }new standard for culinary excellence.
          </div>
        </div>

        <ul className="cards flex center wrap">
          {cards.map((card) =>
            <li
              key={card.name}
              className="card flex column"
            >
              <div className="cover-image">
                <img src={card.image} alt="" />
              </div>
              <div className="details flex column">
                <div className="primary flex-fill">
                  <div className="title">
                    {card.name}
                  </div>
                  <div className="description">
                    {card.description}
                  </div>
                </div>
                <div className="secondary flex align-center justify-between">
                  <div className="serving">
                    {card.serving}
                  </div>
                  <div className="rating">
                    {card.rating}
                  </div>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </Styles>
  );
}

export default TopPicks;