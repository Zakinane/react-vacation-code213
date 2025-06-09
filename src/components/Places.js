import "./Places.css";

import australia1 from "../australia/australia1.png";
import australia2 from "../australia/australia2.png";
import australia3 from "../australia/australia3.png";
import australia4 from "../australia/australia4.png";
import australia5 from "../australia/australia5.png";

import italy1 from "../italy/italy1.png";
import italy2 from "../italy/italy2.png";
import italy3 from "../italy/italy3.png";
import italy4 from "../italy/italy4.png";
import italy5 from "../italy/italy5.png";

import netherlands1 from "../netherlands/netherlands1.png";
import netherlands2 from "../netherlands/netherlands2.png";
import netherlands3 from "../netherlands/netherlands3.png";
import netherlands4 from "../netherlands/netherlands4.png";
import netherlands5 from "../netherlands/netherlands5.png";

function Places({ country, place1, place2, place3, place4, place5 }) {
  let img1, img2, img3, img4, img5;

  switch (country) {
    case "australia":
      img1 = australia1;
      img2 = australia2;
      img3 = australia3;
      img4 = australia4;
      img5 = australia5;
      break;
    case "italy":
      img1 = italy1;
      img2 = italy2;
      img3 = italy3;
      img4 = italy4;
      img5 = italy5;
      break;
    case "netherlands":
      img1 = netherlands1;
      img2 = netherlands2;
      img3 = netherlands3;
      img4 = netherlands4;
      img5 = netherlands5;
      break;
    default:
      img1 = img2 = img3 = img4 = img5 = null;
      break;
  }

  return (
    <div className="Places">
      <h2>Places to visit :</h2>
      <div>
        <img src={img1} alt={place1} />
        {place1}
      </div>
      <div>
        <img src={img2} alt={place2} />
        {place2}
      </div>
      <div>
        <img src={img3} alt={place3} />
        {place3}
      </div>
      <div>
        <img src={img4} alt={place4} />
        {place4}
      </div>
      <div>
        <img src={img5} alt={place5} />
        {place5}
      </div>
    </div>
  );
}

export default Places;
