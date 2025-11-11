import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // 🔹 User Register (signup)
    userRegister: build.mutation({
      query: ({ name, email, password, bio }) => ({
        query: `
          mutation Signup($name: String!, $email: String!, $password: String!, $bio: String) {
            signup(name: $name, email: $email, password: $password, bio: $bio) {
              token
              userError
            }
          }
        `,
        variables: { name, email, password, bio },
      }),
      invalidatesTags: [tagTypes.user],
    }),
    // 🔹 Login Mutation
    userLogin: build.mutation({
      query: ({ email, password }) => ({
        query: `
          mutation Signin($email: String!, $password: String!) {
            signin(email: $email, password: $password) {
              token
              userError
            }
          }
        `,
        variables: { email, password },
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useUserRegisterMutation, useUserLoginMutation } = authApi;
