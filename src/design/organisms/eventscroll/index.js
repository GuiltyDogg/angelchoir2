import { EventBox, EventDiv, EventTitle } from "./styles";
import EventImage from "../eventimage";

function Events({ onClick }) {
  const events = [
    {
      id: 1,
      title: "Sustenance, The Under the Moon Tour",
      location: "The Masquerade",
      date: "June 15, 2023",
      time: "7PM - 10PM",
      imageSrc: "./images/sampleflyer.jpg",
    },
    // SHOW MULTIPLE EVENTS
    {
      id: 2,
      title: "The Wiggles, and Friends",
      location: "Drunken Unicorn",
      date: "June 20, 2023",
      imageSrc: "/images/sampleflyer.jpg",
    },
    // {
    //   id: 3,
    //   title: "Taylor Swift",
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
      {events.map((event) => (
        <EventImage
          onClick={onClick}
          key={event.id}
          src="./images/sampleflyer.jpg"
          alt="Your Image"
          event={event}
        />
      ))}
    </EventDiv>
  );
}

export default Events;
