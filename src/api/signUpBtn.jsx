import axios from "axios";

const signUpBtn = async () => {
  try {
    const response = await axios.post(
      "https://one3th-front-api.onrender.com/grouping/signUp",
      {
        memName: "",
        track: "",
        password: "",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Signup failed with error:", error);
    throw error;
  }
};

export default signUpBtn;
