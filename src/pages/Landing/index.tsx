import PremierDining from "./PremierDining";
import Testimonial from "./Testimonial";
import TopPicks from "./TopPicks";
import Styles from "./styles";
import Hero from "./Hero";
import Features from "./Features";



function LandingPage() {
  return (
    <Styles className="root-content">
      <Hero />
      <TopPicks />
      <PremierDining />
      <Features />
      <Testimonial />
    </Styles>
  );
}

export default LandingPage;