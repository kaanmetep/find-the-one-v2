import { useAuth } from "@hooks/useAuth";
import { useForm, Controller } from "react-hook-form";
import { useState, useRef, useEffect } from "react";
import { Trash2, Upload, SquarePen, HeartHandshake, Users } from "lucide-react";
import {
  FaSnapchat,
  FaInstagram,
  FaXTwitter,
  FaBluesky,
} from "react-icons/fa6";
import { useUpdateUser } from "../services/profileService";
import Loading from "./Loading";
import { toast } from "react-toastify";
import { formatDate, handleImageUpload } from "@utils";
import DeleteProfile from "./DeleteProfile";

const ProfileContent = () => {
  const imageDeleted = useRef(false);
  const [showProfileDeletePage, setShowProfileDeletePage] = useState(false);
  const { userData } = useAuth();
  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
  });
  const [imageErrors, setImageErrors] = useState({});

  const removeImage = (key, index) => {
    setImages((prev) => ({
      ...prev,
      [key]: null,
    }));
    if (userData.photos[index]) {
      imageDeleted.current = true;
    }
  };

  const {
    control,
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { defaultValues },
  } = useForm({
    defaultValues: {
      firstName:
        userData.firstName.charAt(0).toUpperCase() +
        userData.firstName.slice(1),
      email: userData.email,
      birthdayDate: formatDate(userData.birthdayDate),
      gender: userData.gender,
      genderInterest: userData.preferences.genderInterest,
      minAge: userData.preferences?.minAge || 18,
      maxAge: userData.preferences?.maxAge || 90,
      relationshipType:
        userData.preferences?.relationshipType || "doesntMatter",
      occupation:
        userData.occupation.at(0).toUpperCase() + userData.occupation.slice(1),
      instagram: userData.socialMedia?.instagram || "",
      twitter: userData.socialMedia?.twitter || "",
      snapchat: userData.socialMedia?.snapchat || "",
      bluesky: userData.socialMedia?.bluesky || "",
    },
  });

  // Watch age values
  const minAge = watch("minAge") || 18;
  const maxAge = watch("maxAge") || 90;

  // Handle slider change
  const handleSliderChange = (e) => {
    setValue(e.target.name, parseInt(e.target.value, 10));
  };

  const {
    mutate: updateUser,
    isPending: updatingUser,
    isSuccess: userUpdated,
  } = useUpdateUser();

  useEffect(() => {
    if (userUpdated) {
      toast.success("Profile updated successfully!");
    }
  }, [userUpdated]);

  const onSubmit = (data) => {
    const formData = new FormData();
    if (data.firstName !== defaultValues.firstName) {
      formData.append("firstName", data.firstName);
    }
    if (data.genderInterest !== defaultValues.genderInterest) {
      formData.append("genderInterest", data.genderInterest);
    }
    if (data.occupation !== defaultValues.occupation) {
      formData.append("occupation", data.occupation);
    }

    // Add new preferences
    if (data.minAge !== defaultValues.minAge) {
      formData.append("minAge", data.minAge);
    }
    if (data.maxAge !== defaultValues.maxAge) {
      formData.append("maxAge", data.maxAge);
    }
    if (data.relationshipType !== defaultValues.relationshipType) {
      formData.append("relationshipType", data.relationshipType);
    }

    // Check for social media changes
    if (data.instagram !== defaultValues.instagram) {
      formData.append("instagram", data.instagram);
    }
    if (data.twitter !== defaultValues.twitter) {
      formData.append("twitter", data.twitter);
    }
    if (data.snapchat !== defaultValues.snapchat) {
      formData.append("snapchat", data.snapchat);
    }
    if (data.bluesky !== defaultValues.bluesky) {
      formData.append("bluesky", data.bluesky);
    }

    ["image1", "image2", "image3"].forEach((key, index) => {
      if (images[key]) {
        formData.append("photos", images[key], `${index + 1}`);
      }
    });
    if (imageDeleted.current) {
      formData.append("imageDeleted", "imageDeleted");
    }

    if (!Array.from(formData.keys()).length) {
      return toast.info("No changes detected. Profile remains unchanged.");
    }
    updateUser(formData);
  };

  return (
    <>
      {showProfileDeletePage && (
        <DeleteProfile setShowProfileDeletePage={setShowProfileDeletePage} />
      )}
      <div className=" mx-auto p-6 bg-white shadow-lg shadow-red-100 rounded-lg mt-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-14"
        >
          <div className="grid gap-4">
            {/* Basic Information - Horizontal layout */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="mb-2 text-sm font-medium">
                  First Name
                </label>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className="w-full px-3 py-2 border-2 rounded-md border-red-50 focus:ring-red-100 focus:outline-none focus:ring-offset-1 focus:ring transition-all delay-[50ms]"
                    />
                  )}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-sm font-medium">
                  Email
                </label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      disabled
                      className="w-full px-3 py-2 border-2 rounded-md border-red-50 focus:ring-red-100 focus:outline-none focus:ring-offset-1 focus:ring bg-gray-100 cursor-not-allowed transition-all delay-[50ms]"
                    />
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="birthdayDate"
                  className="mb-2 text-sm font-medium"
                >
                  Birthday Date
                </label>
                <Controller
                  name="birthdayDate"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      disabled
                      className="w-full px-3 py-2 border-2 rounded-md border-red-50 focus:ring-red-100 focus:outline-none focus:ring-offset-1 focus:ring bg-gray-100 cursor-not-allowed transition-all delay-[50ms]"
                    />
                  )}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="occupation"
                  className="mb-2 text-sm font-medium"
                >
                  Occupation
                </label>
                <Controller
                  name="occupation"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className="w-full px-3 py-2 border-2 rounded-md border-red-50 focus:ring-red-100 focus:outline-none focus:ring-offset-1 focus:ring transition-all delay-[50ms]"
                    />
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium">Gender</label>
                <select
                  {...register("gender")}
                  disabled
                  className="w-full px-3 py-2 border rounded-md bg-gray-100 cursor-not-allowed border-red-50 focus:ring-red-100 focus:outline-none focus:ring-offset-1 focus:ring"
                >
                  <option value="man">Man</option>
                  <option value="woman">Woman</option>
                </select>
              </div>
            </div>

            {/* Preferences Section */}
            <h3 className="text-lg font-medium text-gray-700 mt-2">
              Matching Preferences
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium flex items-center">
                  <HeartHandshake className="mr-2 text-red-500" size={18} />
                  Gender Interest
                </label>
                <select
                  {...register("genderInterest")}
                  required
                  className="w-full px-3 py-2 border-2 rounded-md border-red-50 focus:ring-red-100 focus:outline-none focus:ring-offset-1 focus:ring transition-all delay-[50ms]"
                >
                  <option value="man">Man</option>
                  <option value="woman">Woman</option>
                  <option value="both">Both</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium flex items-center">
                  <Users className="mr-2 text-red-500" size={18} />
                  Looking For
                </label>
                <select
                  {...register("relationshipType")}
                  required
                  className="w-full px-3 py-2 border-2 rounded-md border-red-50 focus:ring-red-100 focus:outline-none focus:ring-offset-1 focus:ring transition-all delay-[50ms]"
                >
                  <option value="casual">Casual Dating</option>
                  <option value="serious">Serious Relationship</option>
                  <option value="friendship">Friendship</option>
                  <option value="doesntMatter">Doesn't Matter</option>
                </select>
              </div>
            </div>

            {/* Age Range with Slider */}
            <div className="mb-2">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700 flex items-center">
                  Age Range
                </label>
                <div className="text-sm text-red-500 font-medium">
                  {`${minAge} - ${maxAge} years`}
                </div>
              </div>

              {/* Min Age Slider */}
              <div className="mb-4">
                <label className="block text-xs text-gray-500 mb-1">
                  Minimum Age
                </label>
                <input
                  type="range"
                  min="18"
                  max="90"
                  step="1"
                  name="minAge"
                  value={minAge}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                  {...register("minAge")}
                />
              </div>

              {/* Max Age Slider */}
              <div className="mb-4">
                <label className="block text-xs text-gray-500 mb-1">
                  Maximum Age
                </label>
                <input
                  type="range"
                  min="18"
                  max="90"
                  step="1"
                  name="maxAge"
                  value={maxAge}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                  {...register("maxAge")}
                />
              </div>
            </div>

            {/* Social Media Section */}
            <h3 className="text-lg font-medium text-gray-700 mt-2">
              Social Media Profiles
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="instagram"
                  className="mb-2 text-sm font-medium flex items-center"
                >
                  <FaInstagram className="mr-2 text-pink-500" /> Instagram
                </label>
                <Controller
                  name="instagram"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="@username"
                      className="w-full px-3 py-2 border-2 rounded-md border-red-50 focus:ring-red-100 focus:outline-none focus:ring-offset-1 focus:ring transition-all delay-[50ms]"
                    />
                  )}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="twitter"
                  className="mb-2 text-sm font-medium flex items-center"
                >
                  <FaXTwitter className="mr-2 text-black" /> Twitter
                </label>
                <Controller
                  name="twitter"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="@username"
                      className="w-full px-3 py-2 border-2 rounded-md border-red-50 focus:ring-red-100 focus:outline-none focus:ring-offset-1 focus:ring transition-all delay-[50ms]"
                    />
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="snapchat"
                  className="mb-2 text-sm font-medium flex items-center"
                >
                  <FaSnapchat className="mr-2 text-yellow-400" /> Snapchat
                </label>
                <Controller
                  name="snapchat"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="username"
                      className="w-full px-3 py-2 border-2 rounded-md border-red-50 focus:ring-red-100 focus:outline-none focus:ring-offset-1 focus:ring transition-all delay-[50ms]"
                    />
                  )}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="bluesky"
                  className="mb-2 text-sm font-medium flex items-center"
                >
                  <FaBluesky className="mr-2 text-blue-500" /> Bluesky
                </label>
                <Controller
                  name="bluesky"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="username"
                      className="w-full px-3 py-2 border-2 rounded-md border-red-50 focus:ring-red-100 focus:outline-none focus:ring-offset-1 focus:ring transition-all delay-[50ms]"
                    />
                  )}
                />
              </div>
            </div>

            {/* Photo Upload Section */}
            <h3 className="text-lg font-medium text-gray-700 mt-2 mx-auto">
              Profile Photos
            </h3>
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto ">
              {["image1", "image2", "image3"].map((key, index) => (
                <div key={key} className="relative">
                  <input
                    type="file"
                    id={key}
                    name={key}
                    className="hidden"
                    onChange={(event) =>
                      handleImageUpload(
                        event,
                        setImageErrors,
                        setImages,
                        true,
                        imageDeleted
                      )
                    }
                    accept="image/*"
                  />
                  <label
                    htmlFor={key}
                    className="block w-full aspect-square border-2 border-dashed rounded-lg cursor-pointer hover:border-red-500 transition"
                  >
                    {images[key] || userData.photos[index] ? (
                      <>
                        <img
                          src={
                            images[key]
                              ? URL.createObjectURL(images[key])
                              : userData.photos[index]
                          }
                          alt="Upload preview"
                          className={`w-full h-full object-cover rounded-lg ${
                            key === "image3" && imageDeleted.current === true
                              ? "grayscale blur-sm"
                              : ""
                          }`}
                        />
                        <SquarePen
                          size={22}
                          className={`absolute top-2  bg-red-500 text-white p-1 rounded-full hover:bg-red-600 ${
                            key === "image3" ? "right-9" : "right-4"
                          }`}
                        />
                        {key === "image3" && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              removeImage(key, index);
                            }}
                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-gray-400">
                        <Upload size={32} />
                        <span className="mt-2 text-sm">Add Photo</span>
                      </div>
                    )}
                  </label>
                  {imageErrors[key] && (
                    <p className="text-red-500 text-xs mt-1 text-center">
                      {imageErrors[key]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-4 w-full">
            {updatingUser ? (
              <Loading />
            ) : (
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-red-400 to-red-600 text-white font-medium rounded-lg hover:from-red-500 hover:to-red-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Update Profile
              </button>
            )}

            <button
              className="px-6 py-2.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 font-medium rounded-lg hover:from-gray-200 hover:to-gray-300 shadow hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 border border-gray-200"
              type="button"
              onClick={() => setShowProfileDeletePage(true)}
            >
              Delete my account
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileContent;
