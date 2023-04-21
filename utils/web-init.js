import { Client, Account } from "appwrite";

export const client = new Client();
export const account = new Account(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("643fee63b2b5b506495c");

export const anonymous = account.createAnonymousSession().then(
  (response) => {
    console.log(response);
  },
  (error) => {
    console.log(error);
  }
);
