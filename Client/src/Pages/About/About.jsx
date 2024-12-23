import React from "react";
import PageLayout from "../../Components/Layout/Layout";
import AboutPic from "../../assets/Imgs/AboutPic.png";
import styles from "./About.module.scss";
import AboutCard from "../../Components/AboutCard/AboutCard";
import aboutcardiimage1 from "../../assets/Imgs/AboutCardimage1.png";
import aboutcardiimage2 from "../../assets/Imgs/AboutCardimage2.png";
import aboutcardiimage3 from "../../assets/Imgs/AboutCardimage3.png";
import aboutcardiimage4 from "../../assets/Imgs/AboutCardimage4.png";
import Abouticon1 from '../../assets/Imgs/abouticon.png'
import Abouticon2 from '../../assets/Imgs/abouticon1.png'
import Abouticon3 from '../../assets/Imgs/abouticon2.png'
import AboutTeamCard from "../../Components/AboutTeamCard/AboutTeamCard";
import AboutTeamSlider from "../../Components/Slider/AboutTeamslider";

const About = () => {
  return (
    <PageLayout>
      {/* -------------About header section start--------------  */}

      <div className={styles.container}>
        <div className={styles.About_content}>
          <h1>Our Story</h1>
          <p>
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast pace. Exclusive offers a diverse assortment in categories
            ranging from consumer goods to electronics.
          </p>
        </div>
        <figure className={styles.image_div}>
          <img src={AboutPic} alt="About us" />
        </figure>
      </div>

      {/* ======================= About header section end =================  */}

      {/* ============ services section start ============ */}

      <div className="container py-5">
        <div className="row ">
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-2 d-flex justify-content-center align-items-center">
            <AboutCard
              image={aboutcardiimage1}
              price={"10.5k"}
              desc={"Sellers active on our site"}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-2 d-flex justify-content-center align-items-center">
            <AboutCard
              image={aboutcardiimage2}
              price={"33k"}
              desc={"Monthly product sale site"}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-2 d-flex justify-content-center align-items-center">
            <AboutCard
              image={aboutcardiimage3}
              price={"45.5k"}
              desc={"Customer active on our site"}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-2 d-flex justify-content-center align-items-center">
            <AboutCard
              image={aboutcardiimage4}
              price={"25.5k"}
              desc={"Annual gross sale on our site"}
            />
          </div>
        </div>
      </div>

      {/* ============ services section end ============ */}

      {/* ============== team slider start =================  */}
      <div className="container">
        <AboutTeamSlider />
      </div>

      {/* team slider end  */}
      <div className="container py-5 my-5">
        <div className="row ">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-2 d-flex justify-content-center align-items-center">
            <AboutCard
              image={Abouticon1}
              price={"Free and Fast Delievery"}
              desc={"Free delivery for all orders over $140"}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-2 d-flex justify-content-center align-items-center">
            <AboutCard
              image={Abouticon2}
              price={"24/7 Customer service"}
              desc={"Friendly 24/7 customer support"}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-2 d-flex justify-content-center align-items-center">
            <AboutCard
              image={Abouticon3}
              price={"Money Back Guarantee"}
              desc={"We return money within 30 days"}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
