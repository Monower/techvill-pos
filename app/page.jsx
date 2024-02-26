'use client'

import { useState } from "react";
import Challan from "./_components/Challan";
import Products from "./_components/Products";
import Payment from "./_components/Payment";

const Home = () => {
  const [payment, setPayment] = useState(false);
  return (<>
    <section className="container mx-auto flex justify-between py-1">
      <Challan setPayment={setPayment} />
      {
        payment ? <Payment setPayment={setPayment} /> : <Products />
      }
      
    </section>
  </>)
};

export default Home;