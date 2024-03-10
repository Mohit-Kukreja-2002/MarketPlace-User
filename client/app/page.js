import Navbar from "./components/Navigation/Navbar";
import Heading from "./utils/Heading";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Heading
        title={"Sellorama"}
        description={"Conversation based eccommerce"}
        keywords={"sellorama ecommerce selling buying"}
      />
      <Navbar />
      <Hero/>
    </>
  );
}
