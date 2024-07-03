import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreateWallet } from "@/lib/call/wallet";

const ModalCreateWallet = () => {
  const [formWallet, setFormWallet] = React.useState<{
    walletName: string;
    beginning_balance: number;
  }>({
    walletName: "",
    beginning_balance: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormWallet({ ...formWallet, [name]: value });
  };

  const handleSubmit = async (e: React.MouseEvent): Promise<void> => {
    try {
      e.preventDefault();

      await CreateWallet(formWallet);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger className="btn btn-primary bg-slate-700 hover:bg-slate-800 text-white px-5 py-2 mb-10 rounded-md">
          + Wallet
        </DialogTrigger>
        <DialogContent>
          <Card className="mx-3 my-4 border-none">
            <CardHeader>
              <CardTitle className="text-center">Multiple Wallet</CardTitle>
              <CardDescription className="text-center">
                Create a new wallet for other needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="walletName">Name Wallet</Label>
                    <Input
                      id="walletName"
                      placeholder="New Wallet"
                      name="walletName"
                      type="text"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="beginning_balance">Beginning Balance</Label>
                    <Input
                      id="beginning_balance"
                      placeholder="1.000.000"
                      name="beginning_balance"
                      type="number"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Button
                      type="submit"
                      onClick={handleSubmit}
                      className="w-full"
                    >
                      Add Wallet
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader> */}
        </DialogContent>
      </Dialog>
    </>
  );
};
export default ModalCreateWallet;
