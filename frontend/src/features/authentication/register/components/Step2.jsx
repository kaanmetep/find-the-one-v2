import { useState } from "react";
import { PlusIcon } from "lucide-react";
import ImageContainer from "./ImageContainer";

const Step2 = ({ images, setImages }) => {
  const [error, setError] = useState({});
  const handleImageUpload = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const name = event.target.name;

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError((prev) => ({
        ...prev,
        [name]: "Invalid file type! Please upload an image.",
      }));
      return;
    }

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      setError((prev) => ({
        ...prev,
        [name]: "File size must be less than 5MB!",
      }));
      return;
    }

    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    img.src = objectUrl;

    img.onload = () => {
      if (img.width > img.height) {
        setError((prev) => ({
          ...prev,
          [name]: "Please upload a portrait photo!",
        }));
        URL.revokeObjectURL(objectUrl);
        return;
      }

      setError((prev) => ({ ...prev, [name]: null }));
      setImages((prevImages) => ({
        ...prevImages,
        [name]: file,
      }));

      // Bellek sızıntısını önle
      URL.revokeObjectURL(objectUrl);
    };
  };

  return (
    <>
      <h2 className="text-center italic font-bold text-black">
        Show people how amazing you look. Add at least 2 photos of yourself!
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        Do not refresh the page before you complete all the steps.
      </p>

      <div className="flex gap-12 w-full px-16 justify-center flex-wrap">
        {["image1", "image2", "image3"].map((imageKey) => (
          <ImageContainer key={imageKey} htmlFor={imageKey}>
            {images[imageKey] ? (
              <img
                src={URL.createObjectURL(images[imageKey])}
                alt="upload_image"
                className="w-full h-full object-fill absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            ) : (
              <div className="flex flex-col items-center">
                <PlusIcon />
                <p>Add a photo</p>
              </div>
            )}

            <input
              type="file"
              id={imageKey}
              className="hidden"
              onChange={handleImageUpload}
              name={imageKey}
            />
            {error[imageKey] && (
              <p className="text-red-500 text-sm text-center">
                {error[imageKey]}
              </p>
            )}
          </ImageContainer>
        ))}
      </div>
    </>
  );
};

export default Step2;
