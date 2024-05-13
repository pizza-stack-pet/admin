import {
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
  useTranslate,
} from "react-admin";

import { MenuEditTitle } from "../menu-edit-title/menu-edit-title.component";
import { CloudinaryInput } from "@/common/components/cloudinary-input/cloudinary-input.component";

export const MenuEdit = () => {
  const traslate = useTranslate();

  return (
    <Edit title={<MenuEditTitle />}>
      <SimpleForm>
        <TextInput source="id" disabled fullWidth />
        <TextInput source="title" fullWidth />
        <CloudinaryInput source={traslate("resources.menu.fields.image")} />
        <TextInput source="image" fullWidth />
        <TextInput source="ingredients" fullWidth />
        <NumberInput source="price" fullWidth />
        <NumberInput source="weight" fullWidth />
      </SimpleForm>
    </Edit>
  );
};
