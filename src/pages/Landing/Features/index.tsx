import Styles from "./styles";



function Features() {
  const features = [
    "Gourmet Menu",
    "Exclusive Wine Selection",
    "Private Dining Rooms",
    "Seasonal Sepcialties",
    "Live Entertainment",
    "Outdoor Seating"
  ]



  return (
    <Styles id="Features">
      <div className="page-wrapper">
        <div className="section-heading">
          <h2 className="title">Restaurant's Features</h2>
          <div className="description">
            Explore the unique dining experiences and exclusive{" "
            }amenities offered by our restaurant.
          </div>
        </div>
        <ul className="feature-cards flex center wrap">
          {features.map((feature) =>
            <li
              key={feature}
              className="feature-card flex center"
            >
              {feature}
            </li>
          )}
        </ul>
      </div>
    </Styles>
  )
}

export default Features;