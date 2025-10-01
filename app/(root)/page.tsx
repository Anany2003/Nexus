import { redirect } from "next/navigation";

const Home = () => {
  redirect("/sign-in"); // Redirect users to login page on app start
  return null;
};

export default Home;
