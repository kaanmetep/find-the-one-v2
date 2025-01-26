export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
export const validateImage = (file, name) => {
  return new Promise((resolve, reject) => {
    if (!file) return resolve(null);

    if (!file.type.startsWith("image/")) {
      return reject(new Error("Invalid file type. Please upload an image."));
    }
    if (file.size > 5 * 1024 * 1024) {
      return reject(new Error("File size must be less than 5MB."));
    }

    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    img.src = objectUrl;

    img.onload = () => {
      if (img.width > img.height) {
        URL.revokeObjectURL(objectUrl);
        return reject(new Error("Please upload a portrait photo!"));
      }
      URL.revokeObjectURL(objectUrl);
      resolve(null);
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Failed to load image."));
    };
  });
};
export const handleImageUpload = async (
  event,
  setImageErrors,
  setImages,
  isProfilePage = false,
  imageDeleted
) => {
  const file = event.target.files[0];
  const name = event.target.name;
  setImageErrors({});
  if (!file) return;

  try {
    const error = await validateImage(file, name);

    if (!error) {
      setImages((prev) => ({
        ...prev,
        [name]: file,
      }));
      if (isProfilePage && name === "image3") {
        imageDeleted.current = false;
      }
    }
  } catch (err) {
    setImageErrors((prev) => ({
      ...prev,
      [name]: err.message,
    }));
  }
};
