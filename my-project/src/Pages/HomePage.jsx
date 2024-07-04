import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Customers from "../Components/Customers"
import ShowMenu from "../Components/ShowMenu"

export default function HomePage() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Services/>
      
      <Customers/>
    </>
  );
}