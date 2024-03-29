import { QuackIconCopy, QuackIconLogout } from "@/app/globals/icons/MainIcons";
import useSolWallet from "@/app/hooks/useSolWallet";
import { utilCopytoClip } from "@/app/utils/functions/utilCopytoClip";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

const UserProfileChip = () => {
  const [hasUserLoggedIn, setHasUserLoggedIn] = useState(false);
  const { fnTriggerDisconnectWallet, solPublicKey } = useSolWallet();

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Link
          href={`/${
            window != undefined ? localStorage.getItem("localFid") : ""
          } `}
        >
          <Image
            src={"https://i.pravatar.cc/200/?img=6"}
            width={40}
            height={40}
            alt="User"
            className="cursor-pointer rounded-full"
          />
        </Link>
        <div className="flex flex-col">
          <div className="text-sm">Display Name</div>
          <div className="text-xs text-slate-600">@{`${"username"}`}</div>
        </div>
      </div>
      <Dropdown backdrop="blur">
        <DropdownTrigger>
          <div className="cursor-pointer">...</div>
        </DropdownTrigger>
        <DropdownMenu aria-label="User Options">
          <DropdownItem key="address">
            <div
              onClick={() => {
                utilCopytoClip(solPublicKey?.toBase58()?.toString() || "");
                toast.success("Copied to Clipboard");
              }}
              className="flex justify-between items-center gap-4"
            >
              <div className="">
                {`${solPublicKey?.toBase58().toString()?.slice(0, 4)}` +
                  "..." +
                  `${solPublicKey?.toBase58().toString()?.slice(-4)}`}
              </div>
              <QuackIconCopy />
            </div>
          </DropdownItem>

          <DropdownItem key="disconnect">
            <div
              className="flex justify-between items-center gap-4"
              onClick={fnTriggerDisconnectWallet}
            >
              <div className="">Disconnect</div>
              <div className="">
                <QuackIconLogout />
              </div>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default UserProfileChip;
