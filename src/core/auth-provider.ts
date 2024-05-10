import { apolloClient } from "./apollo-client";

import AdminLoginQueryGQL from "@/core/graphql/admin-login.gql";
import AdminGetMeQueryGQL from "@/core/graphql/admin-get-me.gql";

import {
  AdminGetMeQuery,
  AdminGetMeQueryVariables,
  AdminLoginQuery,
  AdminLoginQueryVariables,
} from "./types";
import { JWT_ADMIN_TOKEN } from "./constants";

export const authProvider = {
  login: async (variables: AdminLoginQueryVariables) => {
    const { data } = await apolloClient.query<
      AdminLoginQuery,
      AdminLoginQueryVariables
    >({
      query: AdminLoginQueryGQL,
      variables,
    });

    if (!data.adminLogin?.accessToken) {
      return Promise.reject();
    }

    localStorage.setItem(JWT_ADMIN_TOKEN, data.adminLogin.accessToken);
  },

  logout: () => {
    localStorage.removeItem(JWT_ADMIN_TOKEN);
    return Promise.resolve();
  },

  checkAuth: () => {
    if (!localStorage.getItem(JWT_ADMIN_TOKEN)) {
      return Promise.reject();
    }

    return Promise.resolve();
  },

  checkError: (error: any) => {
    return Promise.resolve();
  },

  getIdentity: async () => {
    const { data } = await apolloClient.query<
      AdminGetMeQuery,
      AdminGetMeQueryVariables
    >({
      query: AdminGetMeQueryGQL,
    });

    return Promise.resolve({
      id: data.adminGetMe!.id,
      fullName: data.adminGetMe!.username,
    });
  },

  getPermissions: () => Promise.resolve(""),
};
