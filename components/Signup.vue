<template>
  <section>
    <div
      class="card u-cross-center u-width-full-line u-max-width-400"
      style="margin: 40px auto"
    >
      <form
        method="post"
        @submit.prevent="signUp"
        class="form u-margin-block-start-24"
      >
        <ul class="form-list">
          <li class="form-item">
            <label class="label">Email</label>
            <div class="input-text-wrapper">
              <input
                type="email"
                class="input-text u-padding-inline-end-56"
                placeholder="email address"
                name="email"
                v-model.lazy="email"
              />
            </div>
          </li>
          <li class="form-item">
            <label class="label">Password</label>
            <div class="input-text-wrapper">
              <input
                type="password"
                class="input"
                placeholder="password"
                name="password"
                v-model.lazy="password"
              />
            </div>
          </li>
          <li class="form-item">
            <label class="label">Confirm Password</label>
            <div class="input-text-wrapper">
              <input
                type="password"
                class="input"
                placeholder="password"
                name="password"
                v-model.lazy="confirmPassword"
              />
            </div>
          </li>
        </ul>

        <div class="form-footer">
          <div class="u-flex u-main-end u-gap-12">
            <button class="button" type="submit">Signup</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import "@appwrite.io/pink";
import "@appwrite.io/pink-icons";
import { account, client } from "~/utils/web-init";

export default {
  data: () => ({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  }),
  methods: {
    signUp: async function () {
      if (this.password.length >= 8) {
        if (this.password === this.confirmPassword) {
          try {
            await account.create(
              "unique()",
              this.email,
              this.password,
              this.name
            );
            alert("account created successfully");
            window.location.href = "/signin";
          } catch (e) {
            console.log(e);
          }
        } else {
          alert("password do not match");
        }
      } else {
        alert("password length should be up to 8 characters");
      }
    },
  },
};
</script>
