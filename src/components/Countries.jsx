import React from "react";

import { v4 as uuidv4 } from "uuid";
import Country from "./Country";

const Countries = (props) => {
  return (
    <div className="mt-[50px] flex flex-wrap">
      {props.countries.map((country) => {
        const countryNew = { country, id: uuidv4() };

        return (
          <Country
            {...countryNew}
            key={countryNew.id}
            onRemoveCountry={props.onRemoveCountry}
          />
        );
      })}
    </div>
  );
};

export default Countries;
