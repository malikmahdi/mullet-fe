import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center shadow-lg border-b-2 px-14 py-3">
        <div className="logo">
          <img src="/logo.png" width={250} alt="logo.png" />
        </div>

        <div className="flex gap-2 items-center">
          <h1>
            Hello Malik Mahdi, Welcome in <a href="#services">Dashboard</a>
          </h1>{" "}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            {/* <AvatarFallback>CN</AvatarFallback> */}
          </Avatar>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
