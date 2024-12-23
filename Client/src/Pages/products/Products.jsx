import React from 'react'
import PageLayout from '../../Components/Layout/Layout'
import SectionHeading from '../../Components/SectionHeading/SectionHeading'
import dummydata from '../../services/dummy-data.json'
import ProductCard from '../../Components/Card/ProductCard'
import Styles from './Products.module.scss'
import PrimaryButton from '../../Components/Buttons/PrimaryButton'

const ProductsPage = () => {
    return (
        <PageLayout>
            <div className={`${Styles.best_product_section} container my-5 py-5`}>
                <SectionHeading title={"Explore Our Products"} >Best Selling Products </SectionHeading>
                <div className='d-flex flex-wrap justify-content-center justify-content-md-between mt-4'>
                    {
                        dummydata?.products?.slice(0, 8).map((item) => (
                            <div key={item.id} className='mt-5 ' >
                                <ProductCard data={item} />
                            </div>
                        ))
                    }
                </div>
               
            </div>
        </PageLayout>
    )
}

export default ProductsPage