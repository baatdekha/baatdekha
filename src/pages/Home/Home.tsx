import { FeatureCard } from "./FeatureCard";
import paintsMakerImg from "./assets/paints-maker.jpg";
import shoppingImg from "./assets/shopping-in-raghunathpali.jpeg";
import vehicleReservationImg from "./assets/vehicle-reservation.jpg";
import workersFinderImg from "./assets/workers-finder.jpeg";

function Home() {
  return (
    <section className="container mx-auto px-8 my-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 justify-items-center">
        <FeatureCard
          href="/paints-Maker"
          image={paintsMakerImg}
          imageAlt="Paints Maker"
          description="Choose a perfect paint and know the price."
        />
        <FeatureCard
          href="/workers-finder"
          image={workersFinderImg}
          imageAlt="workers-app"
          description="You can find any types of worker in this section."
        />
        <FeatureCard
          href="/vehicle-reservation"
          image={vehicleReservationImg}
          imageAlt="vehicle-reservation"
          description="Reserve vehicles for your journey or commercial transport needs."
        />
        <FeatureCard
          href="/shop-together"
          image={shoppingImg}
          imageAlt="shopping-in-raghunathpali"
          description="Shopping in your local area."
        />
      </div>
    </section>
  );
}

export default Home;
