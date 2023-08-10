import { useParams } from "react-router-dom";
import useEvents from "../../../state/hooks/useEvents";
import {
  DetailImage,
  DetailContainer,
  DetailTitle,
  DetailKey,
  DetailValue,
  DetailInfo,
} from "./styles";

function DetailPageImage() {

  const params = useParams();

  console.log(params)

  const getEvents = useEvents();
  const event = getEvents(parseInt(params.id));

  if (!event) {
    <></>
  }

  return (
    <DetailContainer>
      <DetailImage src="/images/sampleflyer.jpg" alt="Event Picture" />
      <DetailInfo>
        <DetailTitle>{event?.title}</DetailTitle>

        <DetailValue>{event?.location}</DetailValue>
        <DetailKey>Location</DetailKey>

        <DetailValue>{event?.date}</DetailValue>
        <DetailKey>Date</DetailKey>

        {
          event?.time &&
          <>
            <DetailValue>{event?.time}</DetailValue>
            <DetailKey>Time</DetailKey>
          </>          
        }
      </DetailInfo>
    </DetailContainer>
  );
}
export default DetailPageImage;
