<script setup>
import { ref } from "vue";
const router = useRouter();

const txt = ref("duma");
import payment from "./pages/shoppage/payment.vue";
import Navigation from "./pages/navigationbar/navigation.vue";
</script>
<template>
  <div>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <Planttcare /> -->
    <!-- <test1 /> -->
    <!-- <Profile /> -->
    <!-- <homepage /> -->
    <!-- <Details /> -->
    <!-- <Shopage /> -->

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
