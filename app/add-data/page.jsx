"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";


const page = () => {
  const router = useRouter();
  const { data: session } = useSession();

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

  const createVendorProfile = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/profile/new", {
        method: 'POST',
        body: JSON.stringify({
          VendorName: add.VendorName,
          userId: session?.user.id,
          BankAccountNo: add.BankAccountNo,
          BankName: add.BankName,
          adl1: add.adl1,
          adl2: add.adl2,
          city: add.city,
          country: add.country,
          zipCode: add.zipCode
        }),
      });

      if(response.ok){
        router.push('/')
      }
    } catch (error) {
      console.log(error);
    } finally{
      setSubmitting(false)
    }
  };

  return (
    <Form
      type="Create"
      add={add}
      setAdd={setAdd}
      submitting={submitting}
      handleSubmit={createVendorProfile}
    />
  );
};

export default page;
