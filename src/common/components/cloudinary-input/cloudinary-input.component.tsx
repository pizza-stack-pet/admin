import React from "react";
import { CloudinaryInputUI } from "../cloudinary-input-ui/cloudinary-input-ui.component";
import { InputProps, useRecordContext } from "react-admin";
import { Menu } from "@/core/types";

export const CloudinaryInput: React.FC<InputProps> = ({ label, source }) => {
  const record = useRecordContext<Menu>();

  return (
    <CloudinaryInputUI
      label={source ?? String(label)}
      value={record.image}
    />
  );
};
