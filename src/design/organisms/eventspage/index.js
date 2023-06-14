import { EventBox, EventDiv, EventImage, EventTitle } from "./styles";

function Events() {
  const events = [
    {
      id: 1,
      title: "Sustenance, The Under the Moon Tour",
      location: "The Masquerade",
      date: "June 15, 2023",
      time: "7PM - 10PM",
    },
    // SHOW MULTIPLE EVENTS
    // {
    //   id: 2,
    //   title: "The Wiggles, and Friends",
    //   location: "Drunken Unicorn",
    //   date: "June 20, 2023",
    // },
    // {
    //   id: 3,
    //   title: "Feed Us Fetus Fajitas, Carcass Fuck, Smoking Dick",
    //   location: "Not Sabbath Brewing",
    //   date: "June 25, 2023",
    // },
    // {
    //   id: 4,
    //   title: "Blue Man Group",
    //   location: "Aaron's Ampitheatre",
    //   date: "June 29, 2023",
    // },
    // {
    //   id: 5,
    //   title: "Pathos",
    //   location: "Swayze's",
    //   date: "July 12, 2023",
    // },
  ];

  return (
    <EventDiv>
      <EventTitle>EVENTS</EventTitle>
      {events.map((event) => (
        <EventBox>
          <div key={event.id}>
            <h2>{event.title}</h2>
            <p>Location: {event.location}</p>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
          </div>
          <EventImage src="./images/sampleflyer.jpg" alt="Your Image" />
        </EventBox>
      ))}
    </EventDiv>
  );
}

export default Events;
