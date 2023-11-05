import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 mx-5">
          <Main />
        </main>
      </div>
      <Footer />
    </>
  );
}
