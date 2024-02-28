'use client'

import { useState } from "react";
import Challan from "./_components/Challan";
import Products from "./_components/Products";
import Payment from "./_components/Payment";

const Home = () => {
  const [payment, setPayment] = useState(false);
  const [cart, setCart] = useState([]);

  return (<>
    <section className="container mx-auto flex flex-col lg:flex-row justify-between py-1">
      <Challan cart={cart} setPayment={setPayment} />
      {
        payment ? <Payment setPayment={setPayment} /> : <Products setCart={setCart} />
      }
      
    </section>
  </>)
};

export default Home;