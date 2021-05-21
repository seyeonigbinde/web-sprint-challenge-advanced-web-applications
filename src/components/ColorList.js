import React, { useState } from "react";
import axios from "axios";
import { useParams, useHistory } from 'react-router-dom';

import Color from './Color';
import EditMenu from "./EditMenu"

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const { id } = useParams();

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/colors/${id}`, initialColor)
    .then(res=>{
      setColorToEdit(res.data);
    })
    .catch(err=>{
      console.log(err);
    }, [id])
  };

  const deleteColor = color => {
    axios.delete(`http://localhost:5000/api/colors/${id}`)
    .then(res=> {
      setColorToEdit(res.data);
     
    })
    .catch(err=>{
      console.log(err);
    })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => <Color key={color.id} editing={editing} color={color} editColor={editColor} deleteColor={deleteColor}/>)}
      </ul>
      
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.