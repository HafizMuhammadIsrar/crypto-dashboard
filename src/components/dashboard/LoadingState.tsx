"use client";
import { LoaderIcon } from "lucide-react";

const LoadingState = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <LoaderIcon className="animate-spin" />
    </div>
  );
};

export default LoadingState;