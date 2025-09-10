import React from "react";

function ProfileCard({ profile }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h2>{profile.name}</h2>
      <p>Email: {profile.email}</p>
      <p>Skills: {profile.skills.join(", ")}</p>
      <p>Education: {profile.education.join(", ")}</p>
      <h3>Projects:</h3>
      {profile.projects.map((p, i) => (
        <div key={i}>
          <strong>{p.title}</strong> - {p.description}
          <br />
          <a href={p.links.github}>GitHub</a> | <a href={p.links.live}>Live</a>
        </div>
      ))}
    </div>
  );
}

export default ProfileCard;
