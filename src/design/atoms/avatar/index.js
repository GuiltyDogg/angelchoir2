import { AvatarStyles } from "./styles";

function Avatar() {
  return (
    <AvatarStyles
      src="./images/8324223_ui_essential_app_avatar_profile_icon.png"
      alt="No Avatar"
    />
  );
}

export default Avatar;
// import { useState } from "react";
// import { AvatarStyles } from "./styles";

// function Avatar() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     const imageUrl = URL.createObjectURL(file);
//     setSelectedImage(imageUrl);
//   };

//   return (
//     <div>
//       <input type="file" accept="image/*" onChange={handleImageUpload} />
//       <AvatarStyles src={selectedImage} alt="No Avatar" />
//     </div>
//   );
// }

// export default Avatar;
