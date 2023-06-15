"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/UserProfile";

const UserProfile = () => {

  const router = useRouter()

	const {data: session} = useSession()

	const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await fetch(
        `/api/users/${session?.user.id}/vendorProfiles`
      );
      const data = await response.json();

      setProfiles(data);
    };

    if(session?.user.id) fetchProfiles();
  }, []);

  const handleEdit = (profile) => {
    router.push(`/update-profile?id=${profile._id}`)
  };

  const handleDelete = async (profile) => {
    const hasConfirmed = confirm("Are you sure you want to delete this vendor profile?")

    if(hasConfirmed){
      try {
        await fetch(`/api/profile/${profile._id.toString()}`, {
          method: 'DELETE'
        })

        const filteredProfiles = profiles.filter((p) => p._id !== profile._id)

        setProfiles(filteredProfiles)
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={profiles}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default UserProfile;
