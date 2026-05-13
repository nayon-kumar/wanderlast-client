"use client";
import { AlertDialog, Button } from "@heroui/react";
import { RiDeleteBinLine } from "react-icons/ri";

const DeleteModal = ({ destination }) => {
  return (
    <div>
      <AlertDialog>
        <Button
          variant="danger"
          className="rounded-none bg-white text-[#EF4444] border border-[#EF4444] "
        >
          <RiDeleteBinLine size={20} />
          <span>Delete</span>
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete destination permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete{" "}
                  <strong className="capitalize">
                    {destination.destinationName} Destination
                  </strong>{" "}
                  and all of its data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button slot="close" variant="danger">
                  Confirm Delete
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteModal;
