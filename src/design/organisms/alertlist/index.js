import { DateTime } from "luxon";
import Avatar from "../../atoms/avatar";
import {
  EventBox,
  EventDiv,
  EventImage,
  EventTitle,
} from "../eventscroll/styles";
import StarBar from "../../atoms/starbar";

function AlertList() {
  const events = [
    {
      id: 1,
      title: "STAR LEVEL HERE MAYBE IDK",
      username: "Not Drew",
      location: "The Masquerade",
      time: "2023-08-08T18:49:43.416Z",
    },
    {
      id: 2,
      title: "STAR LEVEL HERE MAYBE IDK",
      username: "PimpCoatGuy",
      location: "The Masquerade",
      time: "2023-08-08T19:49:43.416Z",
    },
    {
      id: 3,
      title: "STAR LEVEL HERE MAYBE IDK",
      username: "BVLLER",
      location: "The Masquerade",
      time: "2023-08-08T20:49:43.416Z",
    },
    {
      id: 4,
      title: "STAR LEVEL HERE MAYBE IDK",
      username: "RunningOutOfUsernameIdeas",
      location: "The Masquerade",
      time: "2023-08-08T21:49:43.416Z",
    },
  ];

  const milliseconds = events.sort();

  return (
    <EventDiv>
      {events.map((event) => {
        const formattedDate = DateTime.fromISO(event.time).toLocaleString(
          DateTime.DATETIME_SHORT
        );

        return (
          <div key={event.id}>
            <div>
              <Avatar disableUpload={true} />
            </div>
            <div>
              <StarBar />
            </div>
            <p>User: {event.username}</p>
            <p>Time Alerted: {formattedDate}</p>
          </div>
        );
      })}
    </EventDiv>
  );
}

export default AlertList;
