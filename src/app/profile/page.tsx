"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
  const [data, setData] = useState("nothing");
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      // TODO toast
      router.push("/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message); //TODO
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    setData(res.data.data._id);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile Page</h1>
      <h2>
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <button
        onClick={logout}
        type="button"
        className="px-3 py-2 mt-4 text-sm font-semibold text-white bg-yellow-600 rounded-md shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
      >
        Logout
      </button>
      <button
        onClick={getUserDetails}
        type="button"
        className="px-3 py-2 mt-4 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        Get Profile Id
      </button>
    </div>
  );
}
