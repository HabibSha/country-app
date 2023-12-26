import React from "react";

const Country = (props) => {
  const { flags, name, population, region, capital } = props.country;

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name);
  };
  return (
    <section className="w-[300px] bg-slate-300 border-[1px] border-gray-400 rounded-md p-[8px] mx-[10px] mb-[20px] hover:scale-[1.1] ease-in-out duration-300">
      <div>
        <img className="w-[150] h-[120px]" src={flags.png} alt={name} />
        <h2 className="text-[22px] font-[700]">Name: {name.common}</h2>
        <h3 className="text-[16px] font-[500]">Region: {region}</h3>
        <h3 className="text-[16px] font-[500]">Capital: {capital}</h3>
        <h3 className="text-[16px] font-[500]">Population: {population}</h3>
      </div>
      <div>
        <button
          onClick={() => {
            handleRemoveCountry(name.common);
          }}
          className="w-full py-[5px] text-white font-medium mt-2 bg-orange-600 hover:bg-red-600 rounded-md"
        >
          Remove Country
        </button>
      </div>
    </section>
  );
};

export default Country;
