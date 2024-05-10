import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

import { MenuEditTitle } from "../menu-edit-title/menu-edit-title.component";

export const MenuEdit = () => {
  return (
    <Edit title={<MenuEditTitle />}>
      <SimpleForm>
        <TextInput source="id" disabled fullWidth />
        <TextInput source="title" fullWidth />
        <TextInput source="image" fullWidth />
        <TextInput source="ingredients" fullWidth />
        <NumberInput source="price" fullWidth />
        <NumberInput source="weight" fullWidth />
      </SimpleForm>
    </Edit>
  );
};
