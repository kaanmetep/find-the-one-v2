import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { toast } from "react-toastify";
import SectionHeading from "./SectionHeading";
import InputElement from "./InputElement";
import PlaceholderLogo from "./PlaceholderLogo";
import Button from "./Button";
import SectionContainer from "./SectionContainer";
import { User, Mail, MessageSquare } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import { endpoints } from "../../config";
import { useState } from "react";

function Support() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await fetch(endpoints.support, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      toast.success("Message has sent!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SectionContainer>
      <div className="w-full shadow-xl p-6 pl-12" id="support">
        <SectionHeading>Support</SectionHeading>
        <h3 className="mt-4 font-fontHeading text-rose-400 font-extrabold text-center">
          Here to help whenever you need us!
        </h3>
        <div className="flex flex-col  md:flex-row items-center justify-center gap-6 mt-2">
          <form
            className=" flex flex-col gap-4 mt-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="mt-4 font-fontHeading text-rose-600  text-3xl tracking-tight font-semibold">
              Contact us
            </h3>
            <div className="relative">
              <PlaceholderLogo>
                <User />
              </PlaceholderLogo>
              <Controller
                name="supportName"
                control={control}
                rules={{ required: "Name is required." }}
                render={({ field }) => (
                  <InputElement placeholder="Name" pl={36} {...field} py={6} />
                )}
              />
            </div>
            <div className="relative">
              <PlaceholderLogo>
                <Mail />
              </PlaceholderLogo>
              <Controller
                name="supportEposta"
                control={control}
                rules={{ required: "E-posta is required." }}
                render={({ field }) => (
                  <InputElement
                    placeholder="E-posta"
                    pl={36}
                    {...field}
                    py={6}
                  />
                )}
              />
            </div>
            <div className="relative">
              <PlaceholderLogo>
                <MessageSquare />
              </PlaceholderLogo>
              <Controller
                name="supportMessage"
                control={control}
                rules={{ required: "Message is required." }}
                render={({ field }) => (
                  <InputElement
                    placeholder="Message"
                    pl={36}
                    py={18}
                    {...field}
                  />
                )}
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
            <p className="text-center text-red-600 font-bold italic">
              {errors?.supportName?.message ||
                errors?.supportEposta?.message ||
                errors?.supportMessage?.message}
            </p>
          </form>
          <img src="minilogo.png" alt="fto-logo" className=" md:w-60 w-32" />
        </div>
      </div>
    </SectionContainer>
  );
}

export default Support;
