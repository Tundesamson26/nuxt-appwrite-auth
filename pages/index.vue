<template>
  <section class="u-text-center" style="margin: 50px auto;">
    <h1 class="u-font-size-32 u-text-center">Nuxt Authentication app</h1>
    <div class="u-padding-block-12 u-cross-center">
        <p>Choose a service to sign in with.</p>
        <div class="u-cross-center">
          <NuxtLink to="/login" class="button" style="margin: 50px auto;">
            Sign in with appwrite
          </NuxtLink>
        </div>
    </div>
  </section>
</template>
<script>
import "@appwrite.io/pink"; // optionally, add icons import "@appwrite.io/pink-icons";
</script>