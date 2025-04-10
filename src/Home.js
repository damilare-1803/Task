import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div class ='flex-box'>
      <div class="home">
      <h1>TASK SCHEDULER.</h1><br></br>
      <p>
      A task scheduler is a tool or system that allows users to create, organize, 
      and manage tasks by assigning them deadlines, priorities, and statuses 
      (e.g., done or not done). It helps with time management, productivity, 
      and organization.
      </p>
      <button class ='dam' onClick={() => navigate("/tasks")}>
        Click here to proceed
      </button>
       </div>
       </div>
  
  );
};
export default Home;
