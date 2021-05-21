import React, { useEffect, useState } from "react";

import { axiosWithAuth } from '../helpers/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";


const BubblePage = (props) => {

  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    const getColor = () => {
      axiosWithAuth().get('/colors')
        .then(res => {
          setColorList(res.data);
        })
        .catch(error => console.log(error));
    };
    getColor();
  });

  return (
    <div className="container">
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};
  
export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.

