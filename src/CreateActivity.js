import { useState } from "react";
import Popup from "./Popup.js";
import axios from "axios";

export default function CreateActivity({ handleButtonClick }) {
  const [description, setDescription] = useState("");
  const [delta_hours, setDeltaHours] = useState(0);
  const [delta_days, setDeltaDays] = useState(0);
  const [due_time, setDueTime] = useState("");
  return (
    <Popup handleButtonClick={handleButtonClick}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios.post(
            "https://api-freejing.herokuapp.com/todolist/create_activity/",
            {},
            {
              params: {
                description,
                due_time,
                delta_hours,
                delta_days,
              },
            }
          );
        }}
      >
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
              id="due_time"
              name="due_time"
              className="w-full bg-first rounded-md px-3"
              value={due_time}
              onChange={(e) => setDueTime(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <input type="submit" className="px-5 bg-second rounded-xl" />
        </div>
      </form>
    </Popup>
  );
}
