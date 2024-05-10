import { Typography } from "@mui/material";
import { useRecordContext } from "react-admin";
import { useTranslate } from "react-admin";

import { Menu } from "@/core/types";



export const MenuListExpand = () => {
  const translate = useTranslate();
  const menuItem = useRecordContext<Menu>();

  return (
    <div style={{display: 'flex', flexDirection: "column", gap: "8px"}}>
      <div className="">
        <Typography variant="subtitle2">{translate("resources.menu.fields.ingredients")}</Typography>
        <Typography variant="body2">{menuItem.ingredients}</Typography>
      </div>
      <div className="">
        <Typography variant="subtitle2">{translate("resources.menu.fields.weight")}</Typography>
        <Typography variant="body2">{menuItem.weight}</Typography>
      </div>
    </div>
  );
};
