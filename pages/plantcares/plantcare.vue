<script setup>
import categorylist from "./categorylist.vue";
import search from "../search/search.vue";
import Footer from "../homepage/footer.vue";
import Navigation from "../navigationbar/navigation.vue";
import { ref } from "vue";
const Name = ref("OYTEE");
</script>
<template>
  <div>
    <Navigation />

    <section class="banner w-full bg-slate-100 gird p-4">
      <!-- skelaton -->
      <div
        role="status"
        class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
      >
        <div
          class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700"
        >
          <svg
            class="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path
              d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
            />
          </svg>
        </div>
        <div class="w-full">
          <div
            class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
          ></div>
          <div
            class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"
          ></div>
          <div
            class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"
          ></div>
          <div
            class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"
          ></div>
          <div
            class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"
          ></div>
          <div
            class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"
          ></div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>
    </section>

    <main>
      <section class="pt-4 grid grid-cols-1 sm:grid-cols-3 p-5">
        <!-- right side for block of content -->
        <!-- content guidline -->
        <div class="grid col-span-2">
          <!-- card of every giudline -->
          <div
            class="grid bg-slate-50 my-2 rounded-xl grid md:grid-cols-2"
            v-for="i in 10"
            :key="i"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div class="imgages grid grid-cols-subgrid grid-rows-subgrid p-2">
              <img
                src="https://hortology.co.uk/cdn/shop/files/Ficus-elastica-Melany-Rubber-Plant-14x45cm-Hadleigh-Plant-Pot-White-20x17.5cm_52335388-022e-4750-9c9f-54efbba9ea0a_1200x.jpg?v=1715183642"
                class="h-[300px] object-cover rounded-xl"
                alt=""
              />
            </div>
            <div class="text-area grid-cols-subgrid grid-rows-subgrid px-2">
              <!-- plant name -->
              <h1 class="font-bold text-2xl">Prayerplant</h1>
              <p class="line-clamp-2 md:line-clamp-none">
                Indoor gardening is still enjoying a surge in popularity, fed by
                Instagram’s greenery-inspired interior designs, plant-based
                podcasts, and online plant subscription services like Lazy Flora
                and Grounded. While social media trends are notorious for rapid
                flourish-and-fade lifecycles, indoor gardening may endure longer
                than most because of the many ways houseplants improve health
                and well-being.
              </p>
              <!-- block for large information -->
              <div class="block-text">
                <p class="text-xl">{{ sentence }}</p>
                <p>Date: Jun/ 06 / 2024</p>
                <p class="font-bold"><i>By Kokseng</i></p>
              </div>
            </div>
          </div>
        </div>
        <!-- right side for search and advertising -->
        <div class="col-4 h-full">
          <!-- search -->
          <div class="sticky top-[70px]">
            <search />
          </div>
          <!-- advertising -->
          <div class="h-full">
            <!-- content guidline -->
            <div class="content p-2">
              <!--  vertical card of every advertising -->
              <div class="card bg-slate-300 my-2 rounded-xl">
                <div class="imgages h-fullw-full p-2">
                  <img
                    src="https://i.pinimg.com/736x/5f/15/22/5f1522f818c3d06c3f429dc991da2d60.jpg"
                    class="h-full object-cover rounded-xl"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- right side for search and advertising -->
      </section>
    </main>
    <!-- footer -->
    <!-- <Footer :company_name="Name" /> -->

    <!-- menu list -->
    <!-- <categorylist /> -->
  </div>
</template>
