import Footer from "../Footer";
import Carousel from "../Corousel";
import { Component } from "react";

import "./index.css";

const bgImagesList = [
  {
    id: 1,
    imageUrl: "https://images3.alphacoders.com/273/thumb-1920-273555.jpg",
    name: "Marvel Studios' The Avengers",
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.marvel.com/content/1x/avengersinfinitywar_lob_mas_hlf_01_3.jpg",
    name: "Marvel Studios' Avengers: Infinity War",
  },
  {
    id: 3,
    imageUrl: "https://images5.alphacoders.com/689/thumb-1920-689398.jpg",
    name: "Marvel Studios' Captain America: Civil War",
  },
  {
    id: 4,
    imageUrl: "https://images8.alphacoders.com/116/thumb-1920-1167021.jpg",
    name: "Marvel Studios’ Shang-Chi and the Legend of the Ten Rings",
  },
  {
    id: 5,
    imageUrl: "https://images5.alphacoders.com/125/1250696.jpg",
    name: "Marvel Studios' Thor: Love and Thunder",
  },
  {
    id: 6,
    imageUrl: "https://images8.alphacoders.com/136/thumb-1920-1360724.jpg",
    name: "Marvel Studios' Doctor Strange in the Multiverse of Madness",
  },
  {
    id: 7,
    imageUrl: "https://images5.alphacoders.com/850/thumb-1920-850852.jpg",
    name: "Marvel Studios' Spider-Man: Homecoming",
  },
  {
    id: 8,
    imageUrl: "https://images3.alphacoders.com/857/thumb-1920-857014.jpg",
    name: "Marvel Studios' Black Panther",
  },
];

class Home extends Component {
  render() {
    return (
      <div className="home-main-container">
        <Carousel bgImagesList={bgImagesList} />
        <div className="home-card-container">
          <div className="banner-card text-center shadow">
            <h1 className="banner-head">About Marvel</h1>
            <p className="banner-para">
              Marvel is one of the most iconic entertainment companies in the
              world, best known for its vast universe of superheroes. It has
              become a symbol of modern pop culture through its comics, movies,
              and characters that resonate with audiences across the globe.
            </p>
          </div>
          <div className="banner-card text-center shadow">
            <h1 className="banner-head">Early History</h1>
            <p className="banner-para">
              Marvel was originally founded in 1939 as Timely Comics. It
              rebranded in the 1960s as Marvel Comics and rose to prominence
              during this period. Creative legends like Stan Lee, Jack Kirby,
              and Steve Ditko introduced a new era of superhero storytelling,
              bringing more depth and human emotion to their characters.
            </p>
          </div>
          <div className="banner-card text-center shadow">
            <h1 className="banner-head">Iconic Characters</h1>
            <p className="banner-para">
              Marvel's universe includes a wide range of beloved characters such
              as Spider-Man, Iron Man, Captain America, The Hulk, Thor, Black
              Panther, and Doctor Strange. It also features superhero teams like
              The Avengers, The X-Men, The Fantastic Four, and Guardians of the
              Galaxy.
            </p>
          </div>
          <div className="banner-card text-center shadow">
            <h1 className="banner-head">Modern Impact</h1>
            <p className="banner-para">
              Today, Marvel continues to thrive across multiple platforms
              including comics, films, animated series, video games, and
              merchandise. It appeals to both longtime comic fans and new
              audiences, blending action, humor, and emotional storytelling that
              explores both human and superhuman experiences.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;
