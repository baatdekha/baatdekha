import type React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  link: string;
  imgSrc: string;
  alt: string;
  label: string;
}

export const Card: React.FC<CardProps> = ({ link, imgSrc, alt, label }) => {
  return (
    <article className="max-w-[350px] text-center p-5">
      <Link to={link}>
        <img src={imgSrc} alt={alt} className="w-full rounded-2xl shadow-xl" />
        <h3 className="font-carter-one" >{label}</h3>
      </Link>
    </article>
  );
};
