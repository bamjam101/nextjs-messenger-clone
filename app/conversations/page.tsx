"use client";

import clsx from "clsx";

import useConversation from "../hooks/useConversation";
import EmptyState from "../components/EmptyState";

const Conversations = async () => {
  const { isOpen } = useConversation();

  return (
    <div
      className={clsx(
        "lg:pl-80 h-full bg-gray-100 lg:block",
        isOpen ? "block" : "hidden"
      )}
    >
      <EmptyState />
    </div>
  );
};

export default Conversations;
