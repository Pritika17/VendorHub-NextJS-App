"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const EditProfile = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const profileId = searchParams.get("id");

  const [submitting, setSubmitting] = useState(false);
  const [add, setAdd] = useState({
    VendorName: "",
    BankAccountNo: "",
    BankName: "",
    adl1: "",
    adl2: "",
    city: "",
    country: "",
    zipCode: "",
  });

  useEffect(() => {
    const getProfileDetails = async () => {
      const response = await fetch(`/api/profile/${profileId}`);
      const data = await response.json();

      setAdd({
        VendorName: data.VendorName,
        BankAccountNo: data.BankAccountNo,
        BankName: data.BankName,
        adl1: data.adl1,
        adl2: data.adl2,
        city: data.city,
        country: data.country,
        zipCode: data.zipCode,
      });
    };

    if (profileId) getProfileDetails();
  }, [profileId]);

  const updateVendorProfile = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if(!profileId) return alert('Profile Id not found')
    try {
      const response = await fetch(`/api/profile/${profileId}`, {
        method: "PATCH",
        body: JSON.stringify({
          VendorName: add.VendorName,
          BankAccountNo: add.BankAccountNo,
          BankName: add.BankName,
          adl1: add.adl1,
          adl2: add.adl2,
          city: add.city,
          country: add.country,
          zipCode: add.zipCode,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      add={add}
      setAdd={setAdd}
      submitting={submitting}
      handleSubmit={updateVendorProfile}
    />
  );
};

export default EditProfile;
