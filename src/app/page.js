import Banner from "@/components/homepage/Banner";
import About from "@/components/homepage/About";
import Upcoming from "@/components/homepage/Upcoming";
import Location from "@/components/homepage/Location";
import Faq from "@/components/homepage/Faq";
import Services from "@/components/homepage/Services";
import Contact from "@/components/homepage/Contact";

export default function HomePage() {
  return (
    <main className="mt-[80px] bg-black"> {/* Navbar ke neeche space ek hi baar */}
      <Banner />
      <About />
      <div className="lg:block hidden">
        <Upcoming />
      </div>
      {/* <Services /> */}
      <Faq />
      <Contact />
      <Location />
    </main>
  );
}
