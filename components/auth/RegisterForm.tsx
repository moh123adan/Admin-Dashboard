"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormItem,
  FormMessage,
  FormField,
  FormLabel,
  FormDescription,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "name is required",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Please enter valid email",
    }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  confirmPassword: z.string().min(1, {
    message: "confirmPassword is required",
  }),
});

const RegisterForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    router.push("/");
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle> Register </CardTitle>
          <CardDescription>Sign up by adding the info below</CardDescription>
        </CardHeader>

        <CardContent className="space-y-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-2"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white/70">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-slate-100  dark:bg-slate-500 boder-0 focus-visible:ring-0 text-black dark:text-white focus-visible: ring-offset-0"
                        placeholder="Enter Name"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white/70">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-slate-100  dark:bg-slate-500 boder-0 focus-visible:ring-0 text-black dark:text-white focus-visible: ring-offset-0"
                        placeholder="Enter Email"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white/70">
                      password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-slate-100  dark:bg-slate-500 boder-0 focus-visible:ring-0 text-black dark:text-white focus-visible: ring-offset-0"
                        placeholder="Enter Password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white/70">
                      confirmPassword
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-slate-100  dark:bg-slate-500 boder-0 focus-visible:ring-0 text-black dark:text-white focus-visible: ring-offset-0"
                        placeholder="Enter ConfirmPassword"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="w-full">Sign In</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default RegisterForm;
