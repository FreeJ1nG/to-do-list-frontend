import axios from "axios";
import { useState, useContext } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { CreateActivityContext } from "./CreateActivityContext.js";
import Navbar from "./Navbar.js";
import Popup from "./Popup.js";

const fetchToday = async () => {
  const result = await axios.get(
    "https://api-freejing.herokuapp.com/todolist/today_activity/"
  );
  return result;
};

export default function TodayToDoList() {
  const { isLoading, error, data } = useQuery("Today", fetchToday);
  if (isLoading) return "Loading...";
  if (error) return "An error has occured: " + error.message;
  console.log(data);
  return (
    <div>
      <ul>
        {data.data.activities.map((activity) => {
          <li>{activity}</li>;
        })}
      </ul>
    </div>
  );
}
