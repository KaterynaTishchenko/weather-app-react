function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Kiev",
    },
    {
      id: 2,
      title: "Kharkiv",
    },
    {
      id: 3,
      title: "Lviv",
    },
    {
      id: 4,
      title: "Paris",
    },
    {
      id: 5,
      title: "Gdansk",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium transition ease-out hover:scale-125"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;