import { useState } from "react";
import { Upload } from "lucide-react";
import ImageContainer from "@components/ImageContainer";
import { handleImageUpload } from "@utils";
import RegisterValidationError from "./RegisterValidationError";
const Step2 = ({ images, setImages, imageError }) => {
  const [imageErrors, setImageErrors] = useState({});
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
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <Upload size={32} />
                <span className="mt-2 text-sm">Add Photo</span>
              </div>
            )}

            <input
              type="file"
              id={imageKey}
              accept="image/*"
              className="hidden"
              onChange={(event) =>
                handleImageUpload(event, setImageErrors, setImages, false)
              }
              name={imageKey}
            />
            {imageErrors[imageKey] && (
              <p className="text-red-500 text-sm text-center">
                {imageErrors[imageKey]}
              </p>
            )}
          </ImageContainer>
        ))}
      </div>
      <RegisterValidationError>{imageError}</RegisterValidationError>
    </>
  );
};

export default Step2;
