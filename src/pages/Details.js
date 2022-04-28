import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContextProvider";
import { useParams } from "react-router-dom";
import DetailsCard from "../components/DetailsCard";

const Details = () => {
  const { id } = useParams();
  const { cardList } = useContext(BlogContext);

  const [cardDetail] = cardList.filter((card) => card.id === id)

  return (
    <div>
      <DetailsCard cardDetail={cardDetail} />
    </div>
  );
};

export default Details;
