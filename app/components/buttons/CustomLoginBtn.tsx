// README : This file contains the CustomLoginBtn - That triggers the login flow along with solana wallet functions

import { useEffect, useState } from "react";
import { utilConsoleOnlyDev } from "@/app/utils/functions/utilConsoleOnlyDev";
import useSolWallet from "@/app/hooks/useSolWallet";
import { apiLoginStep1, apiLoginStep2, apiLoginStep3 } from "@/app/server";
import type { Selection } from "@nextui-org/react";
import {
  Accordion,
  AccordionItem,
  Badge,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { QuackIconLogout } from "@/app/globals/icons/MainIcons";
import { toast } from "sonner";

const CustomLoginBtn = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [compMounted, setCompMounted] = useState(true);
  const [modalMessage, setModalMessage] = useState(
    "Farcaster requires a registration fee for account activation. Upon registration, you will be prompted to make a payment for your account"
  );

  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["1"]));

  const {
    fnTriggerSignature,
    fnCheckWalletConnection,
    fnSignAndSendTx,
    fnTriggerConnectWallet,
    fnTriggerDisconnectWallet,
    solPublicKey,
    solSelect,
    solConnected,
    solWallets,
  } = useSolWallet();
  const signatureMessage =
    "Clicking Sign or Approve only means you have proved this wallet is owned by you. This request will not trigger any blockchain transaction or cost any gas fee.";

  const fnTriggerLoginFlow = async () => {
    toast.loading("Waiting for Signature");
    fnCheckWalletConnection();
    const sigBase58 = await fnTriggerSignature(signatureMessage);

    toast.dismiss();
    toast.success("Signature Verified");

    toast.loading("Checking account status");
    const resApi1 = await apiLoginStep1({
      message: signatureMessage,
      signature: `${sigBase58}`.toString(),
      solana_address: `${solPublicKey}`.toString(),
    });

    if (resApi1) {
      utilConsoleOnlyDev(resApi1);
      localStorage.setItem("jwtToken", resApi1.jwt);

      // No FID found - New User
      if (resApi1?.fid === "") {
        utilConsoleOnlyDev("New User");

        setSelectedKeys(new Set(["2"]));

        toast.dismiss();
        toast.success("Hey, New User. Welcome to Quack");

        const resApi2 = await apiLoginStep2();

        if (resApi2) {
          utilConsoleOnlyDev(`apiLoginStep2`);
          utilConsoleOnlyDev(resApi2);
          const tx = resApi2?.tx;

          // Trigger the Payment Flow :
          toast.loading("Waiting for transaction confirmation");

          const txSignature = await fnSignAndSendTx(tx);
          utilConsoleOnlyDev(`txSignature is`);
          utilConsoleOnlyDev(txSignature as string);

          if (txSignature === null) {
            utilConsoleOnlyDev("Error in fnSignAndSendTx");

            toast.dismiss();
            toast.error("Error in Processing the Transaction");
            return;
          }

          toast.dismiss();
          toast.success("Transaction Successful");

          toast.loading("Verifying Transaction signature");
          setModalMessage(
            "Verifying Transaction and Creating your account on chain"
          );
          const resApi3 = await apiLoginStep3({
            txSig: txSignature as string,
          });

          utilConsoleOnlyDev(`apiLoginStep3`);
          utilConsoleOnlyDev(resApi3);

          if (resApi3) {
            toast.dismiss();
            toast.success("Transaction Successful");

            utilConsoleOnlyDev("resApi3");
            utilConsoleOnlyDev(resApi3);

            if (resApi3?.status === true) {
              localStorage.setItem("localFid", resApi3?.fid);

              toast.dismiss();
              toast.success("Login Successful");
              setSelectedKeys(new Set(["3"]));
            } else {
              toast.dismiss();
              toast.error("Error in Verifying Transaction signature");
            }
          } else {
            toast.dismiss();
            toast.error("Error in sending transaction signature to server");
          }
          return;
        } else {
          utilConsoleOnlyDev("Error in apiLoginStep2");
          utilConsoleOnlyDev(resApi2);

          toast.dismiss();
          toast.error("Error in getting transaction from the server");
          return;
        }
      }

      // FID found
      if (resApi1?.fid !== "") {
        utilConsoleOnlyDev("FID found");

        localStorage.setItem("localFid", resApi1?.fid);

        toast.dismiss();
        toast.success("Welcome back to Quack");

        onOpenChange();
        return;
      }
    } else {
      utilConsoleOnlyDev("Error in apiLoginStep1");
      utilConsoleOnlyDev(resApi1);
    }
  };

  const fnSelectAndLogin = async (walletName: any) => {
    console.log("walletName", walletName);
    try {
      if (!walletName) {
        throw new Error("Wallet name is not provided");
      }
      setCompMounted(false);
      await solSelect(walletName);
      await fnTriggerConnectWallet();
    } catch (error) {
      console.error("Error selecting and logging in:", error);
    }
  };

  useEffect(() => {
    if (solConnected && !compMounted) {
      fnTriggerLoginFlow();
    }
  }, [solConnected, compMounted]);

  return (
    <>
      <Button onPress={onOpen}>Login</Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-xl font-bold text-center text-gray-800">
                Login to Quack
              </ModalHeader>
              <ModalBody className="p-4 pt-0">
                <Accordion
                  variant="light"
                  selectedKeys={selectedKeys}
                  onSelectionChange={setSelectedKeys}
                  defaultExpandedKeys={["1"]}
                  motionProps={{
                    variants: {
                      enter: {
                        y: 0,
                        opacity: 1,
                        height: "auto",
                        transition: {
                          height: {
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                            duration: 1,
                          },
                          opacity: {
                            easings: "ease",
                            duration: 1,
                          },
                        },
                      },
                      exit: {
                        y: -10,
                        opacity: 0,
                        height: 0,
                        transition: {
                          height: {
                            easings: "ease",
                            duration: 0.25,
                          },
                          opacity: {
                            easings: "ease",
                            duration: 0.3,
                          },
                        },
                      },
                    },
                  }}
                >
                  <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="Select Wallet"
                  >
                    <div className="flex flex-col gap-4 pt-0">
                      <div className="text-sm text-gray-600">
                        Please select your preferred Solana wallet to Login
                      </div>
                      <ul className="flex flex-col gap-2">
                        {solWallets
                          .filter((item) => item.readyState === "Installed")
                          .map((wallet: any, index: number) => (
                            <li key={index}>
                              <div className="flex items-center justify-between w-full gap-2">
                                <div
                                  onClick={() => {
                                    fnSelectAndLogin(wallet?.adapter?.name);
                                  }}
                                  className="p-2 w-full rounded-md flex items-center align-middle justify-between gap-4 bg-gray-50 cursor-pointer hover:bg-slate-200"
                                >
                                  <div className="flex gap-2 items-center align-middle">
                                    <img
                                      className="w-6 h-6"
                                      src={wallet.adapter.icon}
                                    />
                                    <div className="text-lg">
                                      {wallet.adapter.name}
                                    </div>
                                  </div>

                                  <div className="text-xs m-2">
                                    {wallet.adapter.connected
                                      ? "Connected - Click to Sign"
                                      : "Click to connect"}
                                  </div>
                                </div>
                                {solConnected && (
                                  <Tooltip
                                    content="Disconnect"
                                    placement="right"
                                  >
                                    <div
                                      onClick={() =>
                                        fnTriggerDisconnectWallet()
                                      }
                                      className=" hover:bg-slate-200 rounded-full p-2 cursor-pointer"
                                    >
                                      {" "}
                                      <QuackIconLogout width={22} height={22} />
                                    </div>
                                  </Tooltip>
                                )}
                              </div>
                            </li>
                          ))}
                      </ul>

                      {solWallets.filter(
                        (item) => item.readyState === "NotDetected"
                      ) &&
                        solWallets.length === 0 && (
                          <div>
                            No wallets detected, please install a solana wallet
                            on your browser to start quacking.
                          </div>
                        )}
                    </div>
                  </AccordionItem>

                  <AccordionItem disabled key="2" title="Registration">
                    <div className="flex flex-col gap-4">
                      <div className="text-center">
                        <Spinner />
                        <div className="text-sm">Logging you in</div>
                      </div>

                      <div className="text-center">
                        <div className="text-xs text-slate-600">
                          {modalMessage && (
                            <div className="">{modalMessage}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </AccordionItem>

                  <AccordionItem key="3" title="Account Setup" subtitle="">
                    <div className="flex flex-col gap-4">
                      <div className="text-sm text-slate-600">
                        Account setup successful, you can now setup your profile
                        and start Quacking
                      </div>

                      <div className="flex flex-col gap-2">
                        <Input placeholder="Email" />
                        <Input placeholder="Username" />
                      </div>
                    </div>
                  </AccordionItem>
                </Accordion>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomLoginBtn;