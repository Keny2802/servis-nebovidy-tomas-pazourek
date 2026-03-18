import {
  Fragment
} from "react";

import Header from "./components/Header";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const Page = () => {
  return (
      <Fragment>
          <Header />
          <Hero />
          <Pricing />
          <Contact />
          <Footer />
      </Fragment>
  );
};

export default Page;