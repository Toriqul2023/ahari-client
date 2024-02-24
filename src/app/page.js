import Image from "next/image";
import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import Popular from "./Popular/Popular";
import All from "./All/All";
import Founder from "./Founder/Founder";
import Footer from "./Footer/Footer";

export default function Home() {
  const popularArray=[
    {
      image:'https://aharibd.com/wp-content/uploads/2023/12/Black-Seed-Honey-500-gm.png',
      name:'Black Seed Money',
      price:'650'
    },
    {
      image:'https://aharibd.com/wp-content/uploads/2023/12/Black-Seed-Honey-500-gm.png',
      name:'Black Seed Money',
      price:'650'
    },
    {
      image:'https://aharibd.com/wp-content/uploads/2023/12/Black-Seed-Honey-500-gm.png',
      name:'Black Seed Money',
      price:'650'
    },
    {
      image:'https://aharibd.com/wp-content/uploads/2023/12/Black-Seed-Honey-500-gm.png',
      name:'Black Seed Money',
      price:'650'
    },
    {
      image:'https://aharibd.com/wp-content/uploads/2023/12/Black-Seed-Honey-500-gm.png',
      name:'Black Seed Money',
      price:'650'
    },
    {
      image:'https://aharibd.com/wp-content/uploads/2023/12/Black-Seed-Honey-500-gm.png',
      name:'Black Seed Money',
      price:'650'
    },
  ]
  return (
    <>
       
    <Header/>
    <Slider/>
    <Popular PopularData={popularArray}/>
    <All popularDatas={popularArray}/>
    <Founder/>
    <Footer/>
    </>
  );
}
