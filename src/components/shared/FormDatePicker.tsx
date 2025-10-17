/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { format } from "date-fns";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";

interface Props {
  name: string;
  control: any;
  label: string;
  description?: string;
  placeholder?: string;
  itemClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  hidden?: boolean;
}

export default function FormDatePicker({
  name,
  control,
  label,
  description,
  placeholder = "Select date",
  itemClassName = "",
  labelClassName = "",
  inputClassName = "",
  hidden = false,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={`grid gap-2 ${itemClassName}`}>
          <>
            <FormLabel
              className={`${labelClassName} ${hidden ? "hidden" : ""}`}
            >
              {label}
            </FormLabel>

            <FormControl>
              <div>
                <Popover open={open} onOpenChange={setOpen}>
                  <div className="flex items-center gap-2">
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={`justify-between w-full ${inputClassName}`}
                      >
                        <div className="flex-1 text-left truncate">
                          {field.value
                            ? format(new Date(field.value), "PPP")
                            : placeholder}
                        </div>
                        <CalendarIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                  </div>

                  <PopoverContent
                    side="bottom"
                    align="start"
                    className="w-auto p-0"
                  >
                    <div className="p-4">
                      <Calendar
                        mode="single"
                        selected={
                          field.value ? new Date(field.value) : undefined
                        }
                        onSelect={(date) => {
                          if (date) {
                            field.onChange(date.toISOString());
                          } else {
                            field.onChange(null);
                          }
                          setOpen(false);
                        }}
                      />
                    </div>
                  </PopoverContent>
                </Popover>

                <Input
                  readOnly
                  value={field.value ?? ""}
                  className="hidden"
                  aria-hidden
                />
              </div>
            </FormControl>

            {description ? (
              <FormDescription>{description}</FormDescription>
            ) : null}
            <FormMessage />
          </>
        </FormItem>
      )}
    />
  );
}
