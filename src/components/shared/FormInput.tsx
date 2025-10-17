/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface props {
  name: string;
  placeholder?: string;
  control: any;
  type: string;
  description?: string;
  label: string;
  inputClassName?: string;
  labelClassName?: string;
  itemClassName?: string;
  hidden?: boolean;
}

export default function FormInput({
  name,
  placeholder,
  control,
  description,
  type,
  label,
  inputClassName,
  labelClassName,
  itemClassName,
  hidden,
}: props) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={`grid gap-2 ${itemClassName}`}>
          <FormLabel className={` ${labelClassName} ${hidden && "hidden"}`}>
            {label}
          </FormLabel>
          <FormControl>
            <Input
              hidden={hidden}
              type={type}
              className={` ${inputClassName}`}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
