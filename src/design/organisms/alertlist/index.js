import {
  EventBox,
  EventDiv,
  EventImage,
  EventTitle,
} from "../../organisms/eventspage/styles";

function AlertList() {
  const events = [
    {
      id: 1,
      title: "STAR LEVEL HERE MAYBE IDK",
      username: "Not Drew",
      location: "The Masquerade",
      date: "June 15, 2023",
      time: "7:01PM",
    },
    // SHOW MULTIPLE ALERTS
    // {
    //   id: 2,
    //   title: "STAR LEVEL HERE MAYBE IDK",
    //   username: "PimpCoatGuy",
    //   location: "The Masquerade",
    //   date: "June 15, 2023",
    //   time: "7:02PM",
    // },
    // {
    //   id: 3,
    //   title: "STAR LEVEL HERE MAYBE IDK",
    //   username: "BVLLER",
    //   location: "The Masquerade",
    //   date: "June 15, 2023",
    //   time: "7:03PM",
    // },
    // {
    //   id: 4,
    //   title: "STAR LEVEL HERE MAYBE IDK",
    //   username: "RunningOutOfUsernameIdeas",
    //   location: "The Masquerade",
    //   date: "June 15, 2023",
    //   time: "7:10PM",
    // },
  ];

  return (
    <EventDiv>
      <EventTitle>ALERTS</EventTitle>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <p>User: {event.username}</p>
          <p>Location: {event.location}</p>
          <p>Date: {event.date}</p>
          <p>Time Alerted: {event.time}</p>
        </div>
      ))}
    </EventDiv>
  );
}

export default AlertList;
