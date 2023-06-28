import { useState } from "react";
import { AvatarCircle, AvatarStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Avatar({ selectedImage, setSelectedImage }) {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
  };

  return (
    <AvatarCircle>
      <input
        type="file"
        accept="image/*"
        id="avatar-upload"
        onChange={handleImageUpload}
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
