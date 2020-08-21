import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropDown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);

  const [animal, AnimalDropdown, setAnimal] = useDropdown(
    "Animal",
    "",
    ANIMALS
  );
  const [breed, BreedDropDpwn, setBreed] = useDropdown("Breed", "", breeds);

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds }) => {
      const breedsNames = breeds.map(({ name }) => name);
      setBreeds(breedsNames);
    }, console.error);
  }, [animal]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropDpwn />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
