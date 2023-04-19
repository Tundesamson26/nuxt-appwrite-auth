<template>
  <section class="section">
    <div
      class="card u-cross-center u-width-full-line u-max-width-400"
      style="margin: 100px auto"
    >
      <div class="u-flex u-main-space-between u-cross-center">
        <h6 class="heading-level-6">Welcome back!</h6>
        <button class="icon-x"></button>
      </div>

      <!-- <Notification :message="error" v-if="error"/> -->

      <form
        method="post"
        @submit.prevent="login"
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
                v-model="email"
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
                v-model="password"
              />
            </div>
          </li>
        </ul>

        <div class="form-footer">
          <div class="u-flex u-main-end u-gap-12">
            <button class="button" type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
// import Notification from '~/components/Notification';
import "@appwrite.io/pink"; 
import "@appwrite.io/pink-icons";

export default {
  //   components: {
  //     Notification,
  //   },
  data() {
    return {
      email: "",
      password: "",
      //   error: null,
    };
  },
  methods: {},
};
</script>
