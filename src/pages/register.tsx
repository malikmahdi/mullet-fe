import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IUserRegister } from "../types/auth";
import { RegisterApi } from "@/lib/call/auth";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = React.useState<IUserRegister>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.MouseEvent): Promise<void> => {
    try {
      e.preventDefault();

      await RegisterApi(formData);
      router.push("login");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url(/bg-login.png)",
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <div className="flex">
        <div className="flex justify-center h-screen flex-col w-full mx-24">
          <h1 className="text-start text-9xl font-extrabold text-[#A62800]">
            $Mullet
          </h1>
          <h5 className="text-2xl">
            Multiple Wallet is an application
            <br />
            aimed at for your financial management.
          </h5>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            est unde fuga eaque, iure id assumenda praesentium et voluptate
            voluptatum laudantium facilis esse exercitationem earum molestiae,
            rem dicta ut. Corrupti.
          </p>
        </div>

        <div className="w-full flex justify-center items-center h-screen">
          <Card className="w-full m-10 shadow-lg rounded-3xl  ">
            <CardHeader>
              <CardTitle className="text-center my-5">SIGN UP</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      type="text"
                      name="username"
                      placeholder="John Doe"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="johndoe@gmail.com"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="******************"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <small className="text-blue-500">
                  If you don't have an account yet, please{" "}
                  <Link href={"/login"}>login</Link>
                </small>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full mt-5 hover:bg-[#A62921]"
                >
                  Submit
                </Button>
              </form>
            </CardContent>

            <CardFooter className="flex flex-col">
              {/* <Button variant="outline">Cancel</Button> */}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

{
  /* <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
        <img src="/bg-login.png" alt="Deskripsi gambar" />{" "}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card> */
}
