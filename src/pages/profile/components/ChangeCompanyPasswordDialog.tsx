import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ChangeCompanyPasswordForm from "./ChangeCompanyPasswordForm";

export default function ChangeCompanyPasswordDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Change Company Password</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>

        <ChangeCompanyPasswordForm />
      </DialogContent>
    </Dialog>
  );
}
