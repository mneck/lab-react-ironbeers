import randomBeerImg from "../assets/random-beer.png";
import Header from "../components/Header";

function RandomBeer() {
  return (
    <div className="divMargin">
      <Header />
      <img src={randomBeerImg} alt="random-beer" class="imgSpacing" />
      <h1>Random Beer</h1>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
    </div>
  );
}

export default RandomBeer;
