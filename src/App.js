import "./styles.css";
import Navbar from "./Components/Navbar"; //import Navbar component
import "bootstrap/dist/css/bootstrap.css"; //import Navbar bootstrap css
import BootstrapCarouselComponent from "./Components/Carousel";
import Spinner from "./Components/Spinners";
import Alert from "./Components/Alerts";
import Dropdown from "./Components/Dropdown";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Bootstrap</h1>
      <h2>
        It's Library use to make things very quick and easily we just use code,
      </h2>
      <h3>
        So , we just install library using "npm install Bootstrap" as well as we
        link its css or js fil
        <br />
        <br /> {" use Bootstap Website for more refernece"}
      </h3>

      <BootstrapCarouselComponent />
      <Spinner />
      <Dropdown />
      <Alert />
    </div>
  );
}
