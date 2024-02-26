import Challan from "./_components/Challan";
import Products from "./_components/Products";
import Payment from "./_components/Payment";

const Home = () => {
  return (<>
    <section className="container mx-auto flex justify-between py-1">
      <Challan />
      <Products />
      <Payment />
    </section>
  </>)
};

export default Home;