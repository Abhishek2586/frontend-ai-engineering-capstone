import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ShadcnComparison: React.FC = () => {
  return (
    <div className="space-y-8 max-w-xl mx-auto border p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
      <h2 className="text-xl font-bold">shadcn/ui Comparison</h2>
      
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">1. Dialog (Modal) Comparison</h3>
        <Dialog>
          <DialogTrigger render={<Button variant="outline" />}>
            Open shadcn Dialog
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name-shadcn" className="text-right text-sm">
                  Name
                </label>
                <input
                  id="name-shadcn"
                  className="col-span-3 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  defaultValue="Pedro Duarte"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">2. Tabs Comparison</h3>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="p-4 bg-white border rounded-lg dark:bg-gray-950 mt-2">
              <h4 className="font-semibold mb-2">Account Content</h4>
              <p className="text-sm text-gray-500">Make changes to your account here.</p>
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="p-4 bg-white border rounded-lg dark:bg-gray-950 mt-2">
              <h4 className="font-semibold mb-2">Password Content</h4>
              <p className="text-sm text-gray-500">Change your password here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
