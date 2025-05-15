"use client";
import { LoaderIcon } from "lucide-react";
import React from "react";

const loading = () => (
  <div>
    <div className=" w-full flex justify-center items-center h-screen ">
      <LoaderIcon className="animate-spin" />
    </div>
  </div>
);

export default loading;
