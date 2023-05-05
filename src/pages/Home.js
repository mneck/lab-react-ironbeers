import beersImg from "../assets/beers.png";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeers(response.data);
    });
  }, []);

  if (!beers) return <p>Page is loading</p>;

  // const nameOfBeerContributor = (name) => {
  // return name.toString().split(" ").slice(0, 2).join(" ");
  // };

  // const contributor = setBeers.contributed_by.toString().split(" ").slice(0, 2).join(" ");

  return (
    <div className="divMargin">
      <img src={beersImg} alt="beers" class="imgSpacing" />
      <h1>All the beers!</h1>
      {console.log(beers[10])}
      {beers.map((beer) => (
        <div className="beerCard">
          <div className="beerImg">
            <a href="/beers/:beerId">
              <img src={beer.image_url} alt={beer.name} className="beerImg" />
            </a>
          </div>
          <div className="beerText">
            <h3>{beer.name}</h3>
            <h4>{beer.tagline}</h4>
            <p>Created by: {beer.contributed_by}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
