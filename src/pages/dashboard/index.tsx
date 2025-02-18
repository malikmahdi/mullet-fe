import CardOverview from "@/components/manual/cardOverview";
import Navbar from "@/components/manual/navbar";
import Link from "next/link";
import { getProfile } from "../../lib/call/profile";
import { useAppDispatch, useAppSelector } from "../../store/index";
import { SET_LOGIN, SET_LOGOUT } from "../../store/slice/authSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ModalCreateWallet from "./modalCreateWallet";

const dataWallet = [
  {
    name: "First Wallet",
    nominal: "1.000.000",
  },
  {
    name: "Second Wallet",
    nominal: "2.000.000",
  },
];

const dataOverview = [
  {
    title: "Total Balance",
    nominal: "1.000.000",
  },
  {
    title: "Total Period Change",
    nominal: "1.000.000",
  },
  {
    title: "Total Period Expenses",
    nominal: "1.000.000",
  },
  {
    title: "Total Period Income",
    nominal: "1.000.000",
  },
];

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const auth = useAppSelector((state) => state.auth);
  const checkToken = async () => {
    try {
      const token = await localStorage.getItem("token");
      if (!token) {
        return router.push("../login");
      }
      const res = await getProfile(token);
      dispatch(SET_LOGIN({ user: res.data.data, token }));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    checkToken();
  }, []);
  console.log("data auth", auth);

  return (
    <>
      <Navbar />
      <div className="flex bg-[#f4f7f4]">
        {/* Navigasi */}
        <div className="bg-slate-300 w-1/5 flex flex-col justify-between">
          <div>
            <Link href="#">
              <h3 className="text-2xl bg-[#F4F7F4] hover:bg-slate-500 text-slate-400 hover:text-slate-300 font-bold px-4 py-2 ">
                Dashboard
              </h3>
            </Link>
            <Link href="dashboard/transactions">
              <h3 className="text-2xl  hover:bg-slate-500 text-white font-bold px-4 py-2 ">
                Transactions
              </h3>
            </Link>
            <Link href="dashboard/profile">
              <h3 className="text-2xl  hover:bg-slate-500 text-white font-bold px-4 py-2 ">
                Profile
              </h3>
            </Link>
          </div>

          <div className="mb-32">
            <Button
              className="text-white"
              onClick={() => {
                dispatch(SET_LOGOUT());
                router.push("login");
              }}
            >
              Logout
            </Button>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className=" w-4/5 h-screen px-7 pt-14">
          <div className="flex flex-col">
            {/* Wallet area */}
            <h3 className="text-3xl font-extrabold text-[#324C5B] mb-10">
              Wallets
            </h3>

            <div className="flex mb-16 items-center gap-10 h-32">
              <Carousel className="w-full max-w-xs mx-10">
                <CarouselContent>
                  {dataWallet.map((wallet, index) => (
                    <CarouselItem key={index}>
                      <div>
                        <Card className="bg-transparent border-none shadow-none">
                          <CardContent className="flex aspect-square items-center justify-center">
                            {/* Card */}
                            <div className="bg-white flex mt-6 w-72 h-32 shadow-sm rounded-lg cursor-pointer hover:shadow-lg">
                              <div className="h-full flex items-center px-3">
                                <img src="/wallet.png" width={55} alt="" />
                              </div>

                              <div className="w-full h-full flex flex-col justify-center px-2">
                                <h5 className="text-2xl text-[#324C5B] font-medium">
                                  {wallet.name}
                                </h5>
                                <h5 className="text-3xl text-[#cdbc25]">
                                  {wallet.nominal}
                                </h5>
                              </div>
                            </div>
                            {/* Card */}
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="">
                <div>
                  <ModalCreateWallet />
                </div>
                <h4 className="text-5xl text-stone-700">
                  Reduce unnecessary expenses
                </h4>
                {/* <img src="/smile.png" width={50} alt="" /> */}
              </div>
            </div>
            {/* Wallet area */}
            {/* Overview area */}
            <h3 className="text-3xl font-extrabold text-[#324C5B] mb-3">
              Overview
            </h3>
            <div className="flex gap-4">
              {dataOverview.map((data) => (
                <CardOverview title={data.title} nominal={data.nominal} />
              ))}
            </div>
            {/* Overview area */}
          </div>
        </div>
      </div>
    </>
  );
}
