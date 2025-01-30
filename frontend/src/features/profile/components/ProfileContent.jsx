import { useAuth } from "@hooks/useAuth";
import { useForm, Controller } from "react-hook-form";
import { useState, useRef, useEffect } from "react";
import { Trash2, Upload, SquarePen } from "lucide-react";
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

  const removeImage = (key) => {
    console.log(images);
    setImages((prev) => ({
      ...prev,
      [key]: null,
    }));
    imageDeleted.current = true;
  };

  const {
    control,
    handleSubmit,
    register,
    formState: { defaultValues },
  } = useForm({
    defaultValues: {
      firstName:
        userData.firstName.charAt(0).toUpperCase() +
        userData.firstName.slice(1),
      email: userData.email,
      birthdayDate: formatDate(userData.birthdayDate),
      gender: userData.personelDetails.gender,
      genderInterest: userData.personelDetails.genderInterest,
    },
  });

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
      <div className="max-w-xl mx-auto p-6 bg-white shadow-lg shadow-red-100 rounded-lg  mt-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-14"
        >
          <div className="grid gap-4">
            {[
              { label: "First Name", name: "firstName", disabled: false },
              { label: "Email", name: "email", disabled: true },
              { label: "Birthday Date", name: "birthdayDate", disabled: true },
            ].map(({ label, name, disabled }) => (
              <div key={name} className="flex flex-col">
                <label htmlFor={name} className="mb-2 text-sm font-medium">
                  {label}
                </label>
                <Controller
                  name={name}
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      disabled={disabled}
                      className={`w-full px-3 py-2 border-2 rounded-md border-red-50 focus:ring-red-100 focus:outline-none focus:ring-offset-1 focus:ring ${
                        disabled ? "bg-gray-100 cursor-not-allowed" : ""
                      } transition-all delay-[50ms]`}
                    />
                  )}
                />
              </div>
            ))}

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

            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium">
                Gender Interest
              </label>
              <select
                {...register("genderInterest")}
                required
                className="w-full px-3 py-2 border rounded-md border-red-50 focus:ring-red-100 focus:outline-none focus:ring-offset-1 focus:ring transition-all delay-[50ms]"
              >
                <option value="man">Man</option>
                <option value="woman">Woman</option>
              </select>
            </div>

            <div className="grid grid-cols-3 gap-4">
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
                              removeImage(key);
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

          <div className="flex flex-col justify-center items-center gap-6">
            {updatingUser ? (
              <Loading />
            ) : (
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-red-300 to-red-500 text-gray-50 font-semibold rounded-md hover:text-gray-200 hover:shadow-lg  transition-all delay-75 w-fit"
              >
                Update Profile
              </button>
            )}
            <button
              className="px-4 py-2 bg-gradient-to-r from-red-200 to-red-300 text-black font-semibold rounded-md hover:text-gray-50 hover:shadow-lg  transition-all delay-75 w-fit mx-auto text-xs"
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
