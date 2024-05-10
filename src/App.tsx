import React from "react";
import { Admin, DataProvider, Loading, Resource } from "react-admin";
import buildHasuraProvider from "ra-data-hasura";
import { CssBaseline } from "@mui/material";

import { MenuList } from "@/modules/menu/components/menu-list/menu-list.component";
import { MenuEdit } from "@/modules/menu/components/menu-edit/menu-edit.component";
import { MenuCreate } from "@/modules/menu/components/menu-create/menu-create.component";

function App() {
  const [dataProvider, setDataProvider] = React.useState<DataProvider | null>(
    null
  );

  React.useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider({
        clientOptions: { uri: "http://localhost:8080/v1/graphql" },
      });

      setDataProvider(() => dataProvider);
    };

    buildDataProvider();
  }, []);

  if (!dataProvider) {
    return <Loading />;
  }

  return (
    <>
      <CssBaseline />
      <Admin dataProvider={dataProvider}>
        <Resource name="menu" list={MenuList} edit={MenuEdit} create={MenuCreate} />
      </Admin>
    </>
  );
}

export default App;
