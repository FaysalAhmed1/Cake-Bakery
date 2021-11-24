import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddCakes.css";

const AddCakes = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://mighty-thicket-14562.herokuapp.com/cakes", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div className="add-service">
      <h2 className="text-white"> Add A New Oven In the Shop </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Oven Name"
        />
        <textarea {...register("description")} placeholder="Description" />
        <input type="number" {...register("price")} placeholder="price" />
        <input {...register("img")} placeholder="image url" />
        <input className={"btn btn-danger"} type="submit" />
      </form>
    </div>
  );
};

export default AddCakes;
