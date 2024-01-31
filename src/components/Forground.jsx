import React, { useRef } from "react";
import Card from "./Card";

function Forground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Introduction to Short Document APK. This document provides an overview of the key features and functionalities of the APK, helping users get started quickly.",
      filesize: "2.5mb",
      close: true,
      tag: { isopen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Comprehensive Getting Started Guide. A detailed guide that walks users through the installation process, setup, and initial configuration of the Short Document APK.",
      filesize: "1.2mb",
      close: true,
      tag: { isopen: false, tagTitle: "Coming Soon", tagColor: "gray" },
    },
    {
      desc: "Frequently Asked Questions and Troubleshooting. Find answers to common queries and solutions to potential issues in this informative document.",
      filesize: "0.8mb",
      close: false,
      tag: { isopen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div className="fixed top-0 left-0 z-[3] w-full h-full ">
      <div ref={ref} className="flex flex-wrap h-full w-full gap-10 p-10">
        {data.map((obj) => (
          <Card key={obj.desc} data={obj} className="m-6" reference={ref} />
        ))}
      </div>
    </div>
  );
}

export default Forground;
