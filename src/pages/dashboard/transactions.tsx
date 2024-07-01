import CardOverview from "@/components/manual/cardOverview";
import Navbar from "@/components/manual/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ModalAdd from "./modalTransactions";

const dataTransactions = [
  {
    title: "Current Wallet Balance",
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

export default function Transactions() {
  return (
    <>
      <Navbar />
      <div className="flex bg-[#f4f7f4]">
        {/* Navigasi */}
        <div className="bg-slate-300 w-1/5 flex flex-col">
          <Link href="../dashboard">
            <h3 className="text-2xl hover:bg-slate-500 text-white font-bold px-4 py-2 ">
              Dashboard
            </h3>
          </Link>
          <Link href="#">
            <h3 className="text-2xl  bg-slate-400  hover:bg-slate-500 text-white font-bold px-4 py-2 ">
              Transactions
            </h3>
          </Link>
        </div>
        {/*  */}
        {/*  */}
        <div className=" w-4/5 h-screen px-7 pt-14">
          <div className="flex flex-col">
            {/* Overview area */}
            <h3 className="text-3xl font-extrabold text-[#324C5B] mb-3"></h3>
            <div className="">
              {/* <Button className="w-10">Add Transactions</Button> */}
              <ModalAdd />
            </div>
            <div className="flex gap-4">
              {dataTransactions.map((data) => (
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
