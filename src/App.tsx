import Hero from "./components/container/hero";
// ContactForm removed
import Header from "./components/container/header";
import OurExperienceSection from "./components/container/ourExperienceSection";
import OurProcessSection from "./components/container/ourProcessSection";
import WhatWeDo from "./components/container/whatWeDo";
import BuiltforYourIndustry from "./components/container/builtforYourIndustry";
import OurWork from "./components/container/ourWork";
import CustomerFeedback from "./components/container/customerFeedback";
import NeedHelp from "./components/container/needHelp";
import LetsTalk from "./components/container/letsTalk";
import Footer from "./components/container/footer";
import MenuOverlay from "./components/container/menu";

function App() {
  return (
    <>
      <Header />
      <MenuOverlay />
      <Hero />
      <OurExperienceSection />
      <OurProcessSection />
      <WhatWeDo />
      <BuiltforYourIndustry />
      <OurWork />
      <CustomerFeedback />
      <NeedHelp />
      <LetsTalk />
      {/* ContactForm removed */}
      <Footer />
    </>
  );
}

export default App;
