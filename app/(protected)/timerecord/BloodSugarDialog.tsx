"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import dayjs from "dayjs";
import { toast } from "sonner";

const formSchema = z.object({
  datetime: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/g),
  beforeBreakfast: z.string().optional(),
  afterBreakfast: z.string().optional(),
  beforeLunch: z.string().optional(),
  afterLunch: z.string().optional(),
  beforeDinner: z.string().optional(),
  afterDinner: z.string().optional(),
  beforeSleep: z.string().optional(),
  remarks: z.string().optional(),
});

interface Props {
  onCreated: () => void;
}
export const BloodSugarDialog: React.FC<Props> = ({ onCreated }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      datetime: dayjs().format("YYYY-MM-DDTHH:mm"),
    },
  });

  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitHandler = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/bloodSugars`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          ...(values.beforeBreakfast && {
            beforeBreakfast: Number(values.beforeBreakfast),
          }),
          ...(values.afterBreakfast && {
            afterBreakfast: Number(values.afterBreakfast),
          }),
          ...(values.beforeLunch && {
            beforeLunch: Number(values.beforeLunch),
          }),
          ...(values.afterLunch && { afterLunch: Number(values.afterLunch) }),
          ...(values.beforeDinner && {
            beforeDinner: Number(values.beforeDinner),
          }),
          ...(values.afterDinner && {
            afterDinner: Number(values.afterDinner),
          }),
          ...(values.beforeSleep && {
            beforeSleep: Number(values.beforeSleep),
          }),
          datetime: new Date(values.datetime).toISOString(),
        }),
      });
      setOpen(false);
      onCreated();
      toast.success("血糖紀錄新增!");
      form.reset();
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">新增血糖紀錄</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[80%] overflow-auto">
        <DialogHeader>
          <DialogTitle>新增血糖紀錄</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitHandler)}
            className="max-w-md w-full flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="datetime"
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-col">
                    <FormLabel>日期時間</FormLabel>
                    <FormControl>
                      <Input type="datetime-local" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            {(
              [
                { field: "beforeBreakfast", label: "早餐前" },
                { field: "afterBreakfast", label: "早餐後" },
                { field: "beforeLunch", label: "午餐前" },
                { field: "afterLunch", label: "午餐後" },
                { field: "beforeDinner", label: "晚餐前" },
                { field: "afterDinner", label: "晚餐後" },
                { field: "beforeSleep", label: "睡覺前" },
              ] as const
            ).map(({ field, label }) => (
              <FormField
                key={field}
                control={form.control}
                name={field}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>{label}</FormLabel>
                      <FormControl>
                        <Input placeholder="mmol/L" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            ))}
            <FormField
              control={form.control}
              name="remarks"
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-col">
                    <FormLabel>備註</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <DialogFooter>
              <Button type="submit">
                {isSubmitting ? "提交中..." : "提交"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
