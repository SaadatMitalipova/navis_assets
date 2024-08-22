// import ".";

import Advantage from "../../components/advantage/advantage";
import Header from "../../components/header/header";
import HeroSection from "../../components/heroSection/heroSection";
import Partners from "../../components/partners/partners";
import QuationPage from "../../components/quationsPage/quationPage";
import Services from "../../components/services/services";

function Home() {
  return (
    <>
      <Header />
      <hr />
      <HeroSection/>
      <Partners/>
      <Advantage/>
      <Services/>
      <QuationPage/>
    </>
  );
}

export default Home;
