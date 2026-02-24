import React, { useEffect, useState } from "react";
import style from "./css/Discovery.module.css";
import Heading from "../elements/Heading";
import { Smile, BadgeCheck } from "lucide-react";
import BulletPoints from "../elements/BulletPoints";
function Discovery() {
  const [selectedImage, setSelectedImage] = useState("trans1.jpg");
  const arrayOfImages = ["trans1.jpg", "trans2.jpg", "trans3.jpg"];
  useEffect(() => {
    const timer = setInterval(() => {
      const random = Math.floor(Math.random() * 3);
      setSelectedImage(arrayOfImages[random]);
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className={style.disContainer}>
      <div className={style.imagediv}>
        <img
          src={selectedImage}
          className={style.image}
          alt="Transition 1"
          srcset=""
        />
      </div>
      <div className={style.contentDiv}>
        <Heading>
          Discover the new way to <br />{" "}
          <span class="unique">rent a car</span>{" "}
        </Heading>
        <p style={{ color: "var(--text)" }}>
          Choose from thousands of cars available from private and professional
          owners near you.
        </p>
        <img
          src={selectedImage}
          className={style.image2}
          alt="Transition 1"
          srcset=""
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <BulletPoints
            emoji={<Smile />}
            p1="Prices by the hour or day"
            p2="Trip liability insurance is included. You can even add another
                driver at no extra cost."
          />
          <BulletPoints
            emoji={<BadgeCheck />}
            p1="No waiting around"
            p2="Book a car near you instantly, even at the last minute. No lines. No paperwork."
          />
          <BulletPoints
            emoji={<Smile />}
            p1="Unlock the car with the app"
            p2="Our secure Getaround Connect technology allows you to do the walkaround inspection of the car with the app. The car opens. The keys are inside. Off you go!"
          />
        </div>
        <button className={style.button}>See How It Works</button>
      </div>
    </div>
  );
}

export default Discovery;
