import React from 'react'
import Topbar from '../../Components/Header/Topbar'
import Navbar from '../../Components/Header/Navbar'
import Footer from '../../Components/Footer/Footer'
import PageLayout from '../../Components/Layout/Layout'
import Banner from '../../Components/Banner/Banner'
import SliderBanner from '../../Components/Slider/Slider/'
import Slider1 from "../../assets/Imgs/banner-1.jpg"
import Slider2 from "../../assets/Imgs/banner-2.jpg"
import Slider3 from "../../assets/Imgs/banner-3.jpg"
import SectionHeading from '../../Components/SectionHeading/SectionHeading'
import Styles from './Home.module.scss'
import CategorySlider from '../../Components/Slider/CategorySlider'
import Categorycard from '../../Components/Card/Categorycard'
import ProductCard from '../../Components/Card/ProductCard'
import BestProductSlider from '../../Components/Slider/BestProductSlider'
import dummydata from '../../services/dummy-data.json'
import PrimaryButton from '../../Components/Buttons/PrimaryButton'
import { useNavigate } from 'react-router-dom'
import FeatureImage from '../../assets/Imgs/Feature_img.png'


const bannerImages = [Slider1, Slider2, Slider3]
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageLayout>
        <Banner />
        {/* <BannerMarquee/> */}
        <SliderBanner images={bannerImages} />

        {/* category slider div  */}

        <div className={`${Styles.categoriesSection} container my-5 `}>
          <SectionHeading title={"Browse By Category"} > Categories </SectionHeading>
          <CategorySlider />
        </div>

        {/* category slider end  */}

        {/* best selling products  */}

        <div className={`${Styles.best_product_section} container my-5 py-5`}>
          <SectionHeading title={"Best Selling Products"} >This Month </SectionHeading>
          <BestProductSlider />
        </div>
        {/* best selling products end  */}

        {/* our products section start  */}
        <div className={`${Styles.best_product_section} container my-5 py-5`}>
          <SectionHeading title={"Explore Our Products"} >Our Products </SectionHeading>
          <div className='d-flex flex-wrap justify-content-center justify-content-md-between mt-4'>
            {
              dummydata?.products?.slice(0, 8).map((item) => (
                <div key={item.id} className='mt-3'>
                  <ProductCard data={item} />
                </div>
              ))
            }
          </div>
          <div className='mt-5' style={{ width: "200px", margin: "auto" }}>
            <PrimaryButton loading={false} disabled={false} onClick={() => navigate("/Products")}>View All Products</PrimaryButton>
          </div>
        </div>

        {/* our products end  */}

        {/* feature div start  */}
        <div className='container my-5'>
          <img src={FeatureImage} width={"100%"} alt="imageFeature" />
        </div>
      </PageLayout>
    </>
  )
}

export default HomePage