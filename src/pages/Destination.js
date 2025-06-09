import Image from "../components/Image";
import Welcome from "../components/Welcome";
import Places from "../components/Places";
import places from "../components/Place";

import { useParams } from "react-router-dom";

function Destination() {
  const { country } = useParams();
  const place = places.find((place) => place.id === country);

  return (
    <main>
      <Image image={country} />
      <Welcome country={country} />
      <Places
        country={country}
        place1={place.place1}
        place2={place.place2}
        place3={place.place3}
        place4={place.place4}
        place5={place.place5}
      />
    </main>
  );
}

export default Destination;
