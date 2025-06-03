import background from '../netherlands/amsterdam.png'
import img1 from '../netherlands/netherlands1.png'
import img2 from '../netherlands/netherlands2.png'
import img3 from '../netherlands/netherlands3.png'
import img4 from '../netherlands/netherlands4.png'
import img5 from '../netherlands/netherlands5.png'

import Welcome from "../components/Welcome";
import Image from "../components/Image";
import Places from "../components/Places";



function Home() {
  return (
    <main>
      <Image image={background}/>
      <Welcome country="the Netherlands"/>
      <Places img1={img1} img2={img2} img3={img3} img4={img4} img5={img5}/>
    </main>
  );
}

export default Home;
