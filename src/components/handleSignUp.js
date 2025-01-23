const handleSignUp = async () => {
  try {
    const result = await signUpBtn({
      memName: "John Doe",
      track: "FRONT-END",
      password: "securepassword123",
    });
    console.log("Signup successful:", result);
  } catch (error) {
    console.error("Error during signup:", error);
  }
};

handleSignUp();
