import React from "react";

interface CardProps {
  title?: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <nav>
      <div>
        <h1>{title}</h1>
      </div>
    </nav>
  );
};

export default Card;
