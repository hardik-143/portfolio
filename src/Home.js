import { React } from "react";
import TypingEffect from "./components/TypingEffect";

const Home = () => {
    localStorage.setItem(
      "welcome",
      "Thank you for visiting here . the owner of this site welcomes you "
    );

  return (
    <div>
      Home
      {/* <TypingEffect /> */}
    </div>
  );
};

export default Home;
