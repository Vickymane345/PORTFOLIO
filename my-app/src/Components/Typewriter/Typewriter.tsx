"use client";
import { useEffect, useState } from "react";

const InfiniteTypewriter = ({
  text,
  speed,
  delay,
}: {
  text: string;
  speed: number;
  delay: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
        }, delay);
      }
    }, speed);

    return () => clearTimeout(timeout); // Cleanup the timeout if the component unmounts
  }, [index, text, speed, delay]);

  return <div>{displayedText}</div>;
};

export default InfiniteTypewriter;
