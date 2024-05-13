import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Skeleton,
  Typography,
} from "@mui/material";
import { useTranslate } from "react-admin";

interface CloudinaryInputUIProps {
  label: string;
  value?: string;
}

export const CloudinaryInputUI: React.FC<CloudinaryInputUIProps> = ({
  label,
  value,
}) => {
  const translate = useTranslate();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onUploadClick = () => {
    inputRef.current?.click();
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={inputRef}
      />
      <Card variant="outlined">
        <CardHeader title={label} />
        <CardContent>
          {value ? (
            <img
              src={value}
              alt={`${label} upload`}
              width={384}
              height={240}
              style={{ objectPosition: "center", objectFit: "cover" }}
            />
          ) : (
            <Skeleton variant="rectangular" width={384} height={247} />
          )}
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={onUploadClick}>
            <Typography>{translate("root.upload", { _: "Upload" })}</Typography>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
