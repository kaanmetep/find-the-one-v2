import * as yup from "yup";

const stepSocialsValidation = yup
  .object()
  .shape({
    instagram: yup.string().trim(),
    twitter: yup.string().trim(),
    snapchat: yup.string().trim(),
    bluesky: yup.string().trim(),
  })
  .test(
    "at-least-one-social-media",
    "At least one social media account must be provided",
    function (values) {
      const hasAtLeastOne =
        values.instagram || values.twitter || values.snapchat || values.bluesky;

      if (!hasAtLeastOne) {
        return this.createError({
          path: "socialMedia",
          message: "At least one social media account must be provided!",
        });
      }

      return true;
    }
  );

export default stepSocialsValidation;
