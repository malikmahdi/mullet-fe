import CardOverview from "@/components/manual/cardOverview";
import Navbar from "@/components/manual/navbar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import ModalTransactions from "./modalTransactions";
import { SET_LOGOUT } from "@/store/slice/authSlice";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/store";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    category: "Shoping",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    category: "Shoping",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    category: "Beauty",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    category: "Sport & Hobbies",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    category: "Travel",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    category: "Sport & Hobbies",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    category: "Beauty",
  },
];

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
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="flex bg-[#f4f7f4]">
        {/* Navigasi */}
        <div className="bg-slate-300 w-1/5 flex flex-col justify-between">
          <div>
            <Link href="../dashboard">
              <h3 className="text-2xl hover:bg-slate-500 text-white font-bold px-4 py-2 ">
                Dashboard
              </h3>
            </Link>
            <Link href="#">
              <h3 className="text-2xl bg-[#F4F7F4] hover:bg-slate-500 text-slate-400 hover:text-slate-300 font-bold px-4 py-2 ">
                Transactions
              </h3>
            </Link>
            <Link href="profile">
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
            {/* Overview area */}
            <h3 className="text-3xl font-extrabold text-[#324C5B] mb-3"></h3>
            <div className="">
              {/* <Button className="w-10">Add Transactions</Button> */}
              <ModalTransactions />
            </div>
            <div className="flex gap-4">
              {dataTransactions.map((data) => (
                <CardOverview title={data.title} nominal={data.nominal} />
              ))}
            </div>
            {/* Overview area */}

            {/* Table */}
            <div className="mt-10">
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell className="font-medium">
                        {invoice.invoice}
                      </TableCell>
                      <TableCell>{invoice.paymentStatus}</TableCell>
                      <TableCell>{invoice.category}</TableCell>
                      <TableCell className="text-right">
                        {invoice.totalAmount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </>
  );
}
