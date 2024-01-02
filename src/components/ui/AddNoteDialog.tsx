import { CreateNoteSchema, createNoteSchema } from "@/lib/validation/note";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";

interface AddNoteDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AddNoteDialog = ({ open, setOpen }: AddNoteDialogProps) => {
  const form = useForm<CreateNoteSchema>({
    resolver: zodResolver(createNoteSchema),
  });

  async function onSubmit(input: CreateNoteSchema) {
    alert(input);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Note</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddNoteDialog;
