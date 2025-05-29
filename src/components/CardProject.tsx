import React from "react";

interface CardProps {
  title?: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <nav>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </nav>
  );
};

export default Card;
