function AvatarImage({ src }) {
  return (
    <img
      src={src}
      alt="avatar"
      className="w-24 h-24 rounded-full border-solid border-4"
    />
  );
}

export default AvatarImage;
