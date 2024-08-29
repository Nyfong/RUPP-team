<script setup>
import blog from "../blog/blog.vue";
import navigation from "../navigationbar/navigation.vue";
import search from "../search/search.vue";
import Foot from "../homepage/footer.vue";
import { listItem, Name } from "./store";

import { ref } from "vue";
const placehoder = ref("How can i help you?.....");
const trending = ref("Trending");
</script>

<template>
  <div>
    <!-- navigation -->
    <navigation />
    <!-- main -->
    <main>
      <section class="sec-2 px-10">
        <!-- contain container show product -->

        <!-- content-show Prodoct -->
        <div class="content-1">
          <!-- search bar -->

          <search />

          <!-- Products -->
          <div
            class="grid gap-1 mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            <!-- colummn -->
            <div
              class="col-product border-2 rounded-xl bg-slate-50 relative overflow-hidden"
              v-for="(images, i) in listItem"
              :key="i"
              data-aos="zoom-in"
            >
              <!-- heart   -->
              <div
                class="heart-tapped absolute top-[10px] right-[10px] bg-pink-300 w-[30px] h-[30px] rounded-full flex items-center justify-center z-[100]"
                id="heart-1"
              >
                <Icon name="uiw:heart-on" class="text-white" />
              </div>
              <!-- flag -->
              <div
                class="flag absolute top-[10px] left-0 w-[90px] h-[30px] text-white text-xs p-2 bg-green-400 flex justify-between items-center rounded-r-xl z-[100]"
              >
                <p>{{ trending }}</p>
                <Icon name="bi:alipay" class="text-xs" />
              </div>
              <!-- card -->
              <div class="card-product w-full overflow-hidden">
                <div class="w-full h-[300px]">
                  <img
                    :src="images.img"
                    class="w-full h-full transition object-cover block duration-300 ease-in-out hover:scale-110"
                    alt=""
                  />
                </div>

                <div
                  class="card-details flex flex-col justify-between gap-3 h-[100px] w-full p-2"
                >
                  <div class="name">
                    <p>{{ images.title }}</p>
                  </div>
                  <div class="flex gap-1 text-yellow-400">
                    <Icon name="uiw:star-on" />
                    <Icon name="uiw:star-on" />
                    <Icon name="uiw:star-on" />
                    <Icon name="uiw:star-on" />
                  </div>
                </div>
                <div
                  class="card-details flex justify-between items-center w-full 0 p-2"
                >
                  <p>
                    $ {{ images.price }}
                    <span class="line-through text-red-400">
                      {{ images.oldprice }}</span
                    >
                  </p>
                  <NuxtLink to="/shoppage/payment">
                    <div
                      class="Addtocart flex w-[100px] h-[50px] p-2 bg-slate-300 items-center justify-between rounded-xl bg-white overflow-hidden hvr-sweep-to-right"
                      id="addtocart"
                    >
                      <i class="fa-solid fa-basket-shopping"></i>
                      <span class="flex items-center text-sm justify-center">
                        Add to Cart
                      </span>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>

            <!-- end col -->
          </div>

          <!-- end row -->
        </div>
        <!-- end show product -->
      </section>
      <!-- Categories -->
      <section class="hidden">
        <div
          class="category w-[1200px] m-auto max-sm:w-[290px] sm:w-[300px] max-md:w-[700px] md:w-[850px] xl:w-[1200px]"
        >
          <div class="row w-full h-full flex gap-3 flex-wrap">
            <div
              class="col-12 w-full mb-2 h-[10px] max-sm:w-full sm:w-full max-md:w-full md:w-full max-lg:w-full lg:w-full"
            >
              <p class="font-bold">Categories</p>
            </div>
            <div
              class="col-3 w-[300px] h-[100px] bg-green-200 rounded-2xl boxshadow"
              v-for="category in categoryList"
              :key="category"
            >
              <div class="card flex gap-1 items-center">
                <!-- image -->
                <div>
                  <img
                    :src="category.img"
                    class="w-[100px] object-cover"
                    alt=""
                  />
                </div>
                <!-- description -->
                <div>
                  <p class="text-slate-500">
                    {{ category.title }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <!-- fottter -->
    <!-- <Foot :company_name="Name" /> -->
  </div>
</template>
