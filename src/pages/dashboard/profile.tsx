import Navbar from "@/components/manual/navbar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppDispatch } from "@/store";
import { SET_LOGOUT } from "@/store/slice/authSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Profile = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="flex bg-[#f4f7f4]">
        {/* Navigasi Sidebar */}
        <div className="bg-slate-300 w-1/5 flex flex-col justify-between">
          <div>
            <Link href="../dashboard">
              <h3 className="text-2xl hover:bg-slate-500 text-white font-bold px-4 py-2 ">
                Dashboard
              </h3>
            </Link>
            <Link href="transactions">
              <h3 className="text-2xl  hover:bg-slate-500 text-white font-bold px-4 py-2 ">
                Transactions
              </h3>
            </Link>
            <Link href="dashboard/transactions">
              <h3 className="text-2xl bg-[#F4F7F4] hover:bg-slate-500 text-slate-400 hover:text-slate-300 font-bold px-4 py-2 ">
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
        {/* Navigasi Sidebar */}

        <div className="w-4/5 h-screen px-7 pt-14">
          <div className="flex flex-col bg-white px-5 py-10">
            <div>
              <h2>Account Settings</h2>

              <form>
                <div className="grid w-full items-center gap-4">
                  <div>
                    <h5>Profile Photo</h5>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Gender</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Male</SelectItem>
                        <SelectItem value="astro">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
