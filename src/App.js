import { useState } from 'react';

import "./styles.css";

const movieDB = {
  "SciFi": [
    { 
      name: "Inception", 
      rating: "8.8/10", 
      desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster."  
    },
    { name: "The Matrix", rating: "8.7/10", desc: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence." },
    { name: "Star Wars: Episode V - The Empire Strikes Back", rating: "8.7/10", desc: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett." },
    { name: "Interstellar", rating: "8.6/10", desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." },
    { name: "Star Wars: Episode IV - A New Hope", rating: "8.6/10", desc: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader." }
  ],

  "Thriller": [
    { name: "Mirror Game", rating: "9.1/10", desc: "Ayna is an actor and the prison is his stage. He slips into the characters of the powerful convicted in exchange of money and take their place in prison." },
    { name: "The Dark Knight", rating: "9.0/10", desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice" },
    { name: "Inception", rating: "8.8/10", desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster." },
    { name: "Parasite", rating: "8.6/10", desc: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan." },
    { name: "Drishyam 2", rating: "8.6/10", desc: "A gripping tale of an investigation and a family which is threatened by it. Will Georgekutty be able to protect his family this time?" }
  ],
  "Action": [
    { name: "The Dark Knight", rating: "9.0/10", desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice." },
    { name: "The Lord of the Rings: The Return of the King", rating: "8.9/10", desc: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring." },
    { name: "Inception", rating: "8.8/10", desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster." },
    {
      name: "The Lord of the Rings: The Fellowship of the Ring",
      rating: "8.8/10", desc: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
    },
    { name: "Shersaah", rating: "8.7/10", desc: "his is a story of a PVC awardee brave Indian soldier - Capt. Vikram Batra, who shot to fame and became a household name during the Kargil War in 1999. His indomitable spirit and his unflinching courage in chasing the Pakistani soldiers out of Indian territory contributed immensely in India finally winning the Kargil War in 1999." }
  ]
};

export default function App() {
  let [movieList, setMovieList] = useState(movieDB.Thriller);
  const genreClickHandler = (event) => {
    // let genre = event.target.textContent;
    movieList = movieDB[event.target.textContent];
    setMovieList(movieList);
  }
  return (
    <div className="App">
      <h1 className="heading"><span role="img" aria-label="movie">🎬</span> IMDB Movie Recommender</h1>
      <p>Checkout IMDB's top rated movies. Select a genre to get started</p>
      <ul>
        {
          Object.keys(movieDB).map(genre => {
            return <li className="list-item" onClick={ genreClickHandler }>{genre}</li>
          })
        }
      </ul>
      <ul className="movie-list">
      { movieList.map(movie => {
        return (
          <li className="movie-item">
            <h3>{movie.name}</h3>
            <p>{movie.rating}</p>
            <p>{movie.desc}</p>
          </li>
        )
      })}
      </ul>
    </div>
  );
}
