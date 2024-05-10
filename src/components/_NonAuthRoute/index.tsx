import { NavLink, Outlet } from "react-router-dom";
import { useRef, useState } from "react";

import { ReactComponent as LocationIcon } from "../../assets/vector-images/generic/location.svg";
import { ReactComponent as PhoneIcon } from "../../assets/vector-images/generic/phone.svg";
import { ReactComponent as EmailIcon } from "../../assets/vector-images/generic/email.svg";
import { ReactComponent as GithubIcon } from "../../assets/vector-images/brands/github.svg";
import img_01 from "../../assets/raster-images/footer/01.jpg";
import img_02 from "../../assets/raster-images/footer/02.jpg";
import img_03 from "../../assets/raster-images/footer/03.jpg";
import img_04 from "../../assets/raster-images/footer/04.jpg";
import img_05 from "../../assets/raster-images/footer/05.jpg";
import img_06 from "../../assets/raster-images/footer/06.jpg";
import { FormValues, FormField } from "../Form/types";
import { paths } from "../../routes/paths";
import { Form, Logo, RootPage } from "..";
import Styles from "./styles";



type NvLnk = {
  name: string;
  path: string;
}
const navLinks: NvLnk[] = [
  {
    name: "MENU",
    path: "#TopPicks"
  },
  {
    name: "ABOUT",
    path: "#PremierDining"
  },
  {
    name: "CONTACT",
    path: "#Contact"
  }
]

const footerLinks: NvLnk[] = [
  {
    name: "About Restaurant",
    path: paths.HOMEPAGE
  },
  {
    name: "Event Bookings",
    path: paths.HOMEPAGE
  },
  {
    name: "Table Reservations",
    path: paths.HOMEPAGE
  },
  {
    name: "Contact Us",
    path: paths.HOMEPAGE
  }
]



function NonAuthRoute() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formValues, setFormValues] = useState<FormValues>({});

  const subscribeToNewsletter = () => {

  }

  const newletterFields: FormField[] = [
    {
      type: "email",
      name: "email",
      label: "Subscribe to our Newsletter",
      placeholder: "Enter your Email",
      groupClass: "field-row"
    }
  ]



  return (
    <RootPage>
      <Styles className="root-page">
        {/* Header */}
        <header className="non-auth-header">
          <div className="header-wrapper">
            <Logo />
            <nav>
              {navLinks.map((link) =>
                <a
                  key={link.name}
                  href={link.path}
                  className="nav-link"
                >
                  {link.name}
                </a>
              )}
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <Outlet />

        {/* Footer */}
        <footer className="app-footer" id="Contact">
          <div className="footer-wrapper flex justify-center wrap">
            <div className="address">
              <h2 className="restaurant-name">
                SOVITEL
              </h2>
              <h3 className="title">
                CONTACT INFO
              </h3>
              <ul className="flex column">
                <li>
                  <PhoneIcon />{" "
                  }+233 0208 123 070
                </li>
                <li>
                  <EmailIcon />{" "
                  }info@sovitel.com
                </li>
                <li>
                  <LocationIcon />{" "
                  }Kasoa Akweley
                </li>
              </ul>
              <ul className="socials flex">
                <a
                  href="https://github.com/afiayeboah/sovitel-app"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex center"
                >
                  <GithubIcon />
                </a>
              </ul>
            </div>
            <div className="main-block flex justify-center wrap">
              <div className="useful-links">
                <h3 className="title">
                  USEFUL LINKS
                </h3>
                <ul className="flex column">
                  {footerLinks.map((link) =>
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className="footer-link"
                    >
                      {link.name}
                    </NavLink>
                  )}
                </ul>
              </div>
              <div className="gallery">
                <h3 className="title">
                  GALLERY
                </h3>
                <ul className="flex wrap">
                  <img src={img_01} alt="" />
                  <img src={img_02} alt="" />
                  <img src={img_03} alt="" />
                  <img src={img_04} alt="" />
                  <img src={img_05} alt="" />
                  <img src={img_06} alt="" />
                </ul>
              </div>
              <div className="newsletter">
                <h3 className="title">
                  NEWSLETTER
                </h3>
                <div className="subtitle">
                  Subscribe to our Newsletter
                </div>
                <Form
                  ref={formRef}
                  fields={newletterFields}
                  values={formValues}
                  setValues={setFormValues}
                  onSubmit={subscribeToNewsletter}
                >
                  <button
                    className="button"
                    type="submit"
                  >
                    Subscribe Now
                  </button>
                </Form>
              </div>
            </div>
          </div>
          <div className="copyright">
            &copy; 2024, Sovitel. All Rights Reserved.
          </div>
        </footer>
      </Styles>
    </RootPage>
  );
}

export default NonAuthRoute;