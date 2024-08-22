// import ".";

import Advantage from "../../components/advantage/advantage";
import Header from "../../components/header/header";
import HeroSection from "../../components/heroSection/heroSection";
import Partners from "../../components/partners/partners";

function Home() {
  return (
    <>
      <Header />
      <hr />
      <HeroSection/>
      <Partners/>
      <Advantage/>
    </>
  );
}

export default Home;
