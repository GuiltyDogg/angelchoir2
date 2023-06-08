// import React from "react";

// function Events() {
//   return <h1>Poopie Butthole</h1>;
// }

// export default Events;

import React from "react";
// import eventStyles from "./styles";

function Events() {
  const events = [
    {
      id: 1,
      title: "Sustenance, The Under the Moon Tour",
      location: "The Masquerade",
      date: "June 15, 2023",
    },
    {
      id: 2,
      title: "The Wiggles, and Friends",
      location: "Drunken Unicorn",
      date: "June 20, 2023",
    },
    {
      id: 3,
      title: "Feed Us Fetus Fajitas, Carcass Fuck, Smoking Dick",
      location: "Not Sabbath Brewing",
      date: "June 25, 2023",
    },
    {
      id: 4,
      title: "Blue Man Group",
      location: "Aaron's Ampitheatre",
      date: "June 29, 2023",
    },
    {
      id: 5,
      title: "Pathos",
      location: "Swayze's",
      date: "July 12, 2023",
    },
  ];

  return (
    <div>
      <h1>List of Live Events/Concerts</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <p>Location: {event.location}</p>
          <p>Date: {event.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Events;
