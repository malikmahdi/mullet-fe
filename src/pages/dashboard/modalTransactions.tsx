import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

const ModalTransactions = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="btn btn-primary bg-slate-700 hover:bg-slate-800 text-white px-5 py-2 mb-10 rounded-md">
          + Transactions
        </DialogTrigger>
        <DialogContent>
          <Card className="mx-3 my-4">
            <CardHeader>
              <CardTitle>Create Transactions</CardTitle>
              <CardDescription>lorem ipsum ada okos lel ui</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Category</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="eatdrink" id="eatdrink">
                          Eat & Drink
                        </SelectItem>
                        <SelectItem value="fashion" id="fashion">
                          Fashion
                        </SelectItem>
                        <SelectItem value="shoping" id="shoping">
                          Shoping
                        </SelectItem>
                        <SelectItem value="travel" id="travel">
                          Travel
                        </SelectItem>
                        <SelectItem value="beauty" id="beauty">
                          Beauty
                        </SelectItem>
                        <SelectItem value="sporthobbies" id="sporthobbies">
                          Sport & Hobbies
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Label</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="lunch" id="lunch">
                          Lunch
                        </SelectItem>
                        <SelectItem value="want" id="want">
                          Want
                        </SelectItem>
                        <SelectItem value="musthave" id="musthave">
                          Must Haves
                        </SelectItem>
                        <SelectItem value="vacation" id="vacation">
                          Vacation
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Amout</Label>
                    <Input id="name" placeholder="1.000.000" />
                  </div>

                  <div>
                    <Button className="w-full">Add</Button>
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
export default ModalTransactions;
