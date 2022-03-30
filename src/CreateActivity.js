import { useState } from "react";
import Popup from "./Popup.js";
import axios from "axios";

export default function CreateActivity({ handleButtonClick }) {
  const [description, setDescription] = useState("");
  const [delta_hours, setDeltaHours] = useState(0);
  const [delta_days, setDeltaDays] = useState(0);
  const [due_date, setDueDate] = useState("");

  const callCreateActivityAPI = async () => {
    alert("data submitted");
    const resp = await axios.post(
      "https://api-freejing.herokuapp.com/todolist/create_activity/",
      {
        description: description,
        due_date: due_date,
        delta_hours: delta_hours,
        delta_days: delta_days,
      }
    );
    return resp;
  };

  return (
    <Popup handleButtonClick={handleButtonClick}>
      <label for="description">
        Describe Your Activity:<br></br>
      </label>
      <input
        type="text"
        className="w-1/2 bg-first placeholder-third rounded-md px-4"
        id="description"
        name="description"
        placeholder="Do the dishes..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <div className="flex items-center">
        <div className="w-1/2">
          <label for="delta_hours">
            When is this activity due: <br />
          </label>
          <input
            type="number"
            id="delta_hours"
            name="delta_hours"
            className="w-10 bg-first pl-2 rounded-md"
            value={delta_hours}
            onChange={(e) => setDeltaHours(e.target.value)}
          />{" "}
          hours from now <br />
          <input
            type="number"
            id="delta_days"
            name="delta_hours"
            className="w-10 bg-first pl-2 mt-2 rounded-md"
            value={delta_days}
            onChange={(e) => setDeltaDays(e.target.value)}
          />{" "}
          days from now
        </div>
        <div className="w-1/2">
          Or you can enter a date and time: <br />
          <input
            type="datetime-local"
            id="due_date"
            name="due_date"
            className="w-full bg-first rounded-md px-3"
            value={due_date}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={callCreateActivityAPI}
          className="px-5 bg-second rounded-xl"
        >
          Submit
        </button>
      </div>
    </Popup>
  );
}
