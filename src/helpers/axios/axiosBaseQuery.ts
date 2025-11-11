/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosError } from "axios";
import { instance } from "./axiosInstance";

interface GraphQLQueryArgs {
  query: string;
  variables?: Record<string, any>;
  url?: string;
}

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<GraphQLQueryArgs, unknown, unknown> =>
  async ({ query, variables, url }) => {
    try {
      const response = await instance({
        url: baseUrl + (url || "/graphql"),
        method: "POST",
        data: {
          query,
          variables,
        },
        withCredentials: true,
      });

      if (response?.data?.errors) {
        return {
          error: {
            status: 400,
            data: response.data.errors,
          },
        };
      }

      return { data: response?.data?.data };
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        },
      };
    }
  };
