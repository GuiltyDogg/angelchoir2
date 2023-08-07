import {
  DetailImage,
  DetailContainer,
  DetailTitle,
  DetailKey,
  DetailValue,
  DetailInfo,
} from "./styles";

function DetailPageImage() {
  return (
    <DetailContainer>
      <DetailImage src="./images/sampleflyer.jpg" alt="Event Picture" />
      <DetailInfo>
        <DetailTitle>TITLE</DetailTitle>
        <DetailKey>Location</DetailKey>
        <DetailKey>Date</DetailKey>
        <DetailKey>Time</DetailKey>
        <DetailKey>Details</DetailKey>
      </DetailInfo>
    </DetailContainer>
  );
}
export default DetailPageImage;
