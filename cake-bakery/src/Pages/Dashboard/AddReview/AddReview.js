import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://mighty-thicket-14562.herokuapp.com/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div>
      <div className="add-service">
        <h2 className="text-white"> Add A Review </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea {...register("description")} placeholder="Description" />

          <textarea {...register("email")} placeholder="Email" />
          <input className={"btn btn-danger"} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
