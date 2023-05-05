import { useParams } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

function BeerDetails(props) {
  const { id } = useParams();
  console.log("beerId -->", id);
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`).then((response) => {
      setBeer(response.data);
    });
  }, [id]);

  if (!beer) return <p>Page is loading</p>;

  return (
    <div className="divMargin">
      <Header />
      <h1>Beer Details</h1>

      <div className="beerCard">
        <div>
          <img src={beer.image_url} alt={beer.name} className="beerImg" />
        </div>
        <div className="beerText">
          <h3>{beer.name}</h3>
          <h4>{beer.tagline}</h4>
          <h5>
            First brewed on: {beer.first_brewed} | Attenuation level: {beer.attenuation_level}
          </h5>
          <p>{beer.description}</p>
          <p>Contributed by: {beer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default BeerDetails;
