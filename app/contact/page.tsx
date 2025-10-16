"use client";
import { useState } from "react";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
const page = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [num, setnum] = useState("");
  return (
    <div>
      <form action="">
        <div className="">
          <div>
            <Label>Fullname</Label>
            <Input
              className="w-30"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              className="w-30"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>
          <div>
            <Label>Phone number</Label>
            <Input
              type="number"
              className="w-30"
              onChange={(e) => {
                setnum(e.target.value);
              }}
            />
          </div>
          <div>
            <Label>Message</Label>
            <Textarea className="w-30"></Textarea>
          </div>
          <div>
            <p>your name is{name}</p>
          </div>
          <Button>submit</Button>
        </div>
      </form>
    </div>
  );
};

export default page;
