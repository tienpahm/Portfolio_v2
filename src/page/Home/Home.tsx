import React, {Fragment} from "react";
import "./Home.css";

//COMPONENTS
import Header from "../Header/Header";
import Project from "../Project/Project";
import Footer from "../../page/Footer/Footer";
import Modal from "../../Component/ModalContent/Modal";
import ContactMenu from "../ContactMenu/ContactMenu";
import Overlay from "./Components/Overlay";
import GreetingText from "./Components/GreetingText";

export default function Home(props: any) {
  
  return (
    <Fragment>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to top right,#450b7c,#563cc9,#49e9fb)",
        }}>
        <div className="home">
          <Header />
          <Overlay/>
          <GreetingText/>
        </div>
      </div>
      <Modal />
      <ContactMenu />
      <Project />
      <Footer />
    </Fragment>
  );
}
