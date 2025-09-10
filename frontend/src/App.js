import React, { useEffect, useState } from "react";
import { fetchProfiles } from "./api";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles().then((res) => setProfiles(res.data));
  }, []);

  return (
    <div>
      <h1>Me-API Playground</h1>
      {profiles.map((profile) => (
        <ProfileCard key={profile._id} profile={profile} />
      ))}
    </div>
  );
}

export default App;
