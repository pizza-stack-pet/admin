import {
  Datagrid,
  EditButton,
  FunctionField,
  List,
  TextField,
  TextInput,
} from "react-admin";

import { MenuListExpand } from "../menu-list-iexpand/menu-list-expand";
import { Menu } from "@/core/types";

const filters = [<TextInput source="title" label="root.searchByName" />];

export const MenuList = () => {
  return (
    <List filters={filters}>
      <Datagrid expand={MenuListExpand} rowClick="expand">
        <TextField source="title" />
        <FunctionField
          source="price"
          render={(record: Menu) => `${record.price} грн`}
        />
        <EditButton />
      </Datagrid>
    </List>
  );
};
