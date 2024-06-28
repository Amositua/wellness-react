import React from "react";
import { Link } from "react-router-dom";
import "./boxes-layout.css";

const Box = ({ title, link, index }) => (
  <Link to={link}>
    <div className={`box box-${index} box-layout`}>
      <h2>{title}</h2>
    </div>
  </Link>
);

const BoxLayout = () => {
  const boxes = [
    { title: "Box 1", link: "/page1" },
    { title: "Box 2", link: "/page2" },
    { title: "Box 3", link: "/page3" },
    { title: "Box 4", link: "/page4" },
  ];

  return (
    <div className="boxes">
    <div className="box">
      {boxes.map((box, index) => (
        <Box key={index} title={box.title} link={box.link} index={index + 1} />
      ))}
    </div>
    </div>
  );
};

export default BoxLayout;
