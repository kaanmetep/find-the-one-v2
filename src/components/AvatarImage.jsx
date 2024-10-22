function AvatarImage({ src }) {
  return (
    <img
      src={src}
      alt="avatar"
      className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-solid border-4"
    />
  );
}

export default AvatarImage;
