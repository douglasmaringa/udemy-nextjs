import Footer from "@/app/components/Footer";
import Details from "../../components/Details"
import Header from "../../components/Header"
import { getProductBySlug } from "@/sanity/product-util";


export default async function page({params}) {
  const {slug} = params;

  const product = await getProductBySlug(slug);

  return (
    <div>
        <Header/>
       
        <div className="mb-20">
            <Details product={product[0]}/>
        </div>
        <Footer/>
    </div>
  )
}
