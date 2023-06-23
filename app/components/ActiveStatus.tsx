"use client";

import useActiveChannel from "../hooks/useActiveChannel";
import useActiveList from "../hooks/useActiveList";

const ActiveStatus = () => {
  const { members } = useActiveList();
  useActiveChannel();
  console.log(members);
  return null;
};

export default ActiveStatus;
