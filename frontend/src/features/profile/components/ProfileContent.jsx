import { useAuth } from "@hooks/useAuth";
import InputElement from "@components/InputElement";
import { useForm, Controller } from "react-hook-form";
import { formatDate } from "@config";
import { questionsPersonel, questionsRelationship } from "@config";
const ProfileContent = () => {
  const { userData } = useAuth();
  const { control, handleSubmit, register } = useForm();

  return (
    <div>
      {userData && (
        <form
          action=""
          className="flex flex-col gap-8 mt-12 px-4 sm:px-8 md:px-12"
        >
          <div className="flex flex-col xl:flex-row gap-8 xl:gap-0">
            <div className=" flex grow-[2] basis-0 flex-col gap-4 xl:items-center">
              <div className="input-container">
                <label htmlFor="firstName">First Name</label>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <InputElement
                      {...field}
                      defaultValue={
                        userData.firstName.at(0).toUpperCase() +
                        userData.firstName.slice(1)
                      }
                    />
                  )}
                />
              </div>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <InputElement defaultValue={userData.email} disabled />
              </div>
              <div className="input-container">
                <label htmlFor="birthdayDate">Birthday Date</label>
                <InputElement
                  defaultValue={formatDate(userData.birthdayDate)}
                  disabled
                />
              </div>
              <div className="input-container">
                <label htmlFor="gender">Gender</label>
                <select
                  className={"input-element-select !px-0"}
                  required
                  disabled
                >
                  <option
                    value="man"
                    selected={userData.personelDetails.gender === "man"}
                  >
                    Man
                  </option>
                  <option
                    value="woman"
                    selected={userData.personelDetails.gender === "woman"}
                  >
                    Woman
                  </option>
                </select>
              </div>
              <div className="input-container">
                <label htmlFor="genderInterest">Gender Interest</label>
                <select
                  className={"input-element-select !px-0"}
                  required
                  {...register("genderInterest")}
                >
                  <option
                    value="man"
                    selected={userData.personelDetails.genderInterest === "man"}
                  >
                    Man
                  </option>
                  <option
                    value="woman"
                    selected={
                      userData.personelDetails.genderInterest === "woman"
                    }
                  >
                    Woman
                  </option>
                </select>
              </div>
              <div className="input-container">
                <label htmlFor="photos">Photos should be here.</label>
              </div>
            </div>
            <div className="border px-4 grow-[2] xl:basis-0 max-h-[450px] overflow-y-auto ">
              <h3 className="text-center mt-2">Personel questions</h3>
              <div>
                <label htmlFor="personelQuestion1" className="question-label">
                  {questionsPersonel.question1}
                </label>
                <p>{userData.personelQuestions.personelQ1}</p>
              </div>
              <div>
                <label htmlFor="personelQuestion2" className="question-label">
                  {questionsPersonel.question2}
                </label>
                <p>{userData.personelQuestions.personelQ2}</p>
              </div>
              <div>
                <label htmlFor="personelQuestion3" className="question-label">
                  {questionsPersonel.question3}
                </label>
                <p>{userData.personelQuestions.personelQ3}</p>
              </div>
              <div>
                <label htmlFor="personelQuestion4" className="question-label">
                  {questionsPersonel.question4}
                </label>
                <p>{userData.personelQuestions.personelQ4}</p>
              </div>
              <h3 className="text-center mt-2">Relationship questions</h3>
              <div>
                <label
                  htmlFor="relationshipQuestion1"
                  className="question-label"
                >
                  {questionsRelationship.question1}
                </label>
                <p>{userData.relationshipQuestions.relationshipQ1}</p>
              </div>
              <div>
                <label
                  htmlFor="relationshipQuestion2"
                  className="question-label"
                >
                  {questionsRelationship.question2}
                </label>
                <p>{userData.relationshipQuestions.relationshipQ2}</p>
              </div>
              <div>
                <label
                  htmlFor="relationshipQuestion3"
                  className="question-label"
                >
                  {questionsRelationship.question3}
                </label>
                <p>{userData.relationshipQuestions.relationshipQ3}</p>
              </div>
              <div>
                <label
                  htmlFor="relationshipQuestion4"
                  className="question-label"
                >
                  {questionsRelationship.question4}
                </label>
                <p>{userData.relationshipQuestions.relationshipQ4}</p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-black px-8 py-2 rounded-md mx-auto"
          >
            Update
          </button>
        </form>
      )}
    </div>
  );
};

export default ProfileContent;
