import { useState } from "react";
import { AvatarCircle, AvatarStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Avatar({ disableUpload }) {
  const [selectedImage, setSelectedImage] = useState(
    localStorage.getItem("AngelChoir::selectedImage")
  );

  const handleImageUpload = (event) => {
    if (!disableUpload) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      localStorage.setItem("AngelChoir::selectedImage", imageUrl);
    }
  };

  return (
    <AvatarCircle>
      <input
        type="file"
        accept="image/*"
        id="avatar-upload"
        onChange={handleImageUpload}
        disabled={disableUpload}
      />

      {selectedImage ? (
        <AvatarStyles style={{ backgroundImage: `url(${selectedImage})` }} />
      ) : (
        <AvatarStyles>
          <FontAwesomeIcon icon={faUser} />
        </AvatarStyles>
      )}
    </AvatarCircle>
  );
}

export default Avatar;
