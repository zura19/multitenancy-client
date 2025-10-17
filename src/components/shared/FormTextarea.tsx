/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

interface props {
  name: string;
  placeholder?: string;
  control: any;
  description?: string;
  label: string;
  textareaClassName?: string;
  labelClassName?: string;
  itemClassName?: string;
}

export default function FormTextarea({
  name,
  placeholder,
  control,
  description,
  label,
  textareaClassName,
  labelClassName,
  itemClassName,
}: props) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={`grid gap-2 ${itemClassName}`}>
          <FormLabel className={` ${labelClassName}`}>{label}</FormLabel>
          <FormControl>
            <Textarea
              rows={1}
              className={`resize-none  ${textareaClassName}`}
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
