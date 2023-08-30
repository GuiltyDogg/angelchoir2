import { DateTime } from "luxon";
import {
  EventBox,
  EventDiv,
  EventImage,
  EventTitle,
} from "../eventscroll/styles";

function AlertList() {
  const formattedDate = DateTime.fromISO(event.date).toLocaleString(
    DateTime.DATETIME_SHORT
  );
  const events = [
    {
      id: 1,
      title: "STAR LEVEL HERE MAYBE IDK",
      username: "Not Drew",
      location: "The Masquerade",

      time: "2023-08-08T18:49:43.416Z",
    },
    // SHOW MULTIPLE ALERTS
    {
      id: 2,
      title: "STAR LEVEL HERE MAYBE IDK",
      username: "PimpCoatGuy",
      location: "The Masquerade",
      date: "June 15, 2023",
      time: "2023-08-08T19:49:43.416Z",
    },
    {
      id: 3,
      title: "STAR LEVEL HERE MAYBE IDK",
      username: "BVLLER",
      location: "The Masquerade",
      date: "June 15, 2023",
      time: "2023-08-08T20:49:43.416Z",
    },
    {
      id: 4,
      title: "STAR LEVEL HERE MAYBE IDK",
      username: "RunningOutOfUsernameIdeas",
      location: "The Masquerade",
      date: "June 15, 2023",
      time: "2023-08-08T21:49:43.416Z",
    },
  ];

  return (
    <EventDiv>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <p>User: {event.username}</p>

          <p>Time Alerted: {formattedDate}</p>
        </div>
      ))}
    </EventDiv>
  );
}

export default AlertList;
