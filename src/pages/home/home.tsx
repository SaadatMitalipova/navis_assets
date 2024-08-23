// import ".";

import Advantage from "../../components/advantage/advantage";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import HeroSection from "../../components/heroSection/heroSection";
import News from "../../components/newsPage/news";
import Partners from "../../components/partners/partners";
import QuestionPage from "../../components/quationsPage/questionPage";
import Services from "../../components/services/services";

function Home() {
  return (
    <>
      <Header />
      <hr />
      <HeroSection />
      <Partners />
      <Advantage />
      <Services />
      <QuestionPage />
      <News />
      <Footer/>
    </>
  );
}

export default Home;
