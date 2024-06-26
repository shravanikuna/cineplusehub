"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const DetailsPage = () => {

  const [detail, setDetail] = useState(null)
  const { id } = useParams();
  console.log(id);

  const getDetails = async () => {
    try {
      const {data} = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=e9e5a998666af3b52285ccbb3a594f35`
      );
      // console.log(data)
      setDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(detail === null) getDetails()
  },[])

  return <div>DetailsPage</div>;
};

export default DetailsPage;