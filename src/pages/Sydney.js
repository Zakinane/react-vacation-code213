import background from '../australia/sydney.png'
import img1 from '../australia/australia1.png'
import img2 from '../australia/australia2.png'
import img3 from '../australia/australia3.png'
import img4 from '../australia/australia4.png'
import img5 from '../australia/australia5.png'

import Welcome from "../components/Welcome";
import Image from "../components/Image";
import Places from "../components/Places";



function Home() {
  return (
    <main>
      <Image image={background}/>
      <Welcome country="Australia"/>
      <Places img1={img1} img2={img2} img3={img3} img4={img4} img5={img5}/>
    </main>
  );
}

export default Home;
