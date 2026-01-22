import type React from "react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  href: string;
  image: string;
  imageAlt: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  href,
  image,
  imageAlt,
  description,
}) => {
  return (
    <article className="group overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <Link to={href} className="block space-y-4">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={image}
            alt={imageAlt}
            className="aspect-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <h3 className="text-lg text-center md:text-xl font-carter-one text-gray-800 px-2">
          {description}
        </h3>
      </Link>
    </article>
  );
};
