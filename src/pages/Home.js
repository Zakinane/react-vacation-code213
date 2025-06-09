import background from '../italy/venice.png'
import Welcome from "../components/Welcome";
import Image from "../components/Image";




function Home() {
  return (
    <main>
      <Image image={background}/>
      <Welcome country="My website"/>
    </main>
  );
}

export default Home;
