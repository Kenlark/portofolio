import React from "react";

interface CardProps {
  title?: string;
  description?: string;
  img?: string;
}

const Card: React.FC<CardProps> = ({ title, description, img }) => {
  return (
    <nav>
      <div>
        <h1>{title}</h1>
        <div>
          <img src={img} />
          <p>{description}</p>
        </div>
      </div>
    </nav>
  );
};

export default Card;
