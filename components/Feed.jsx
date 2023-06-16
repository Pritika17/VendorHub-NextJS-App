"use client";

import { useEffect, useState } from "react";
import Card from "./Card";

const ProfileCardList = ({ data }) => {
  return (
    <div className="mt-16 profile_layout">
      {data.map((profile) => (
        <Card key={profile._id} profile={profile} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [profiles, setProfiles] = useState([]);

  const fetchProfiles = async () => {
    const response = await fetch("/api/profile");
    const data = await response.json();

    setProfiles(data);
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <section className="feed">
      <ProfileCardList data={profiles} />
    </section>
  );
};

export default Feed;
