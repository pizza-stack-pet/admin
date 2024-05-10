import React from "react";
import { Admin, DataProvider, Loading, Resource } from "react-admin";
import buildHasuraProvider from "ra-data-hasura";
import { CssBaseline } from "@mui/material";

import { MenuList } from "@/modules/menu/components/menu-list/menu-list.component";
import { MenuEdit } from "@/modules/menu/components/menu-edit/menu-edit.component";
import { MenuCreate } from "@/modules/menu/components/menu-create/menu-create.component";

import { authProvider } from "@/core/auth-provider";
import { i18nProvider } from "./core/i18n";
import { apolloClient } from "@/core/apollo-client";

import { theme } from "@/core/theme";

function App() {
  const [dataProvider, setDataProvider] = React.useState<DataProvider | null>(
    null
  );

  React.useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider({
        client: apolloClient,
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
      <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        i18nProvider={i18nProvider}
        requireAuth
        theme={theme}
      >
        <Resource
          name="menu"
          list={MenuList}
          edit={MenuEdit}
          create={MenuCreate}
          // options={{
          //   label: "Меню"
          // }}
        />
      </Admin>
    </>
  );
}

export default App;
