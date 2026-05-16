"use client";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export function SignUpForm() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex w-full p-10 rounded-xl shadow bg-[#F8F8F8] flex-col gap-4 border border-gray-100">
      <Form onSubmit={onSubmit} className="space-y-4">
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField name="image" type="url">
          <Label>Photo URL</Label>
          <Input placeholder="Enter photo url" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit" className="w-full">
            <Check />
            Create Account
          </Button>
        </div>
      </Form>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-300"></div>

        <span className="text-sm text-gray-500">Or continue with</span>

        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
      <Button className="w-full bg-white text-black rounded-lg">
        <FcGoogle /> Google
      </Button>
      <p className="text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-[#15A1BF] font-semibold">
          Log In
        </Link>
      </p>
    </div>
  );
}
