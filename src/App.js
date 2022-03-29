import axios from "axios";
import { useState, useContext } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { CreateActivityContext } from "./CreateActivityContext.js";
import Navbar from "./Navbar.js";
import Popup from "./Popup.js";
import TodayToDoList from "./TodayToDoList.js";
import CreateActivity from "./CreateActivity.js";

const queryClient = new QueryClient();

function App() {
  const [createActivity, setCreateActivity] = useState(false);
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <CreateActivityContext.Provider value={createActivity}>
          <HomePage handleButtonClick={setCreateActivity} />
        </CreateActivityContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

function HomePage({ handleButtonClick }) {
  const createActivity = useContext(CreateActivityContext);
  return (
    <div>
      {createActivity && (
        <CreateActivity handleButtonClick={handleButtonClick} />
      )}
      <Navbar handleButtonClick={handleButtonClick} />
      <div className="flex justify-center">
        <h1 className="text-3xl">Activities Today</h1>
        <TodayToDoList />
      </div>
    </div>
  );
}

export default App;
