import "./Home.css";
import veniceImage from '../italy/venice.png'
import img1 from '../italy/italy1.png'
import img2 from '../italy/italy2.png'
import img3 from '../italy/italy3.png'
import img4 from '../italy/italy4.png'
import img5 from '../italy/italy5.png'

import Welcome from "../components/Welcome";
import Image from "../components/Image";
import Places from "../components/Places";



function Home() {
  return (
    <main>
      <Image image={veniceImage}/>
      <Welcome country="Italy"/>
      <Places img1={img1} img2={img2} img3={img3} img4={img4} img5={img5}/>
    </main>
  );
}

export default Home;
