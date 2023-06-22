"use client";

import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarGroupProps {
  users?: User[];
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ users }) => {
  const sliceUsers = users?.slice(0, 3) || [];

  const positionMap = {
    0: "top-0 left-[12px]",
    1: "bottom-0",
    2: "bottom-0 right-0",
  };
  return (
    <div className="relative h-11 w-11">
      {sliceUsers.map((user, index) => (
        <div
          className={`absolute inline-block rounded-full overflow-hidden h-[24px] w-[24px] ${
            positionMap[index as keyof typeof positionMap]
          }`}
        >
          <Image
            alt="Avatar"
            fill
            src={user?.image || "/images/placeholder.svg"}
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
