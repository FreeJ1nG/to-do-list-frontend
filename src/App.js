import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

const fetchLastSevenDays = async () => {
  const result = await axios.get(
    "https://api-freejing.herokuapp.com/todolist/get_activities/7/0/",
    { headers: { "Access-Control-Allow-Origin": "*" } }
  );
  return result;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}

function HomePage() {
  const { isLoading, error, data } = useQuery(
    "LastSevenDays",
    fetchLastSevenDays
  );
  console.log(data);

  if (isLoading) return "Loading...";

  if (error) return "An error has occured: " + error.message;

  return <div className="">hi</div>;
}

export default App;
