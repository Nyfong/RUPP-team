<script setup>
//compostion api
import { ref } from "vue";

import navigation from "../navigationbar/navigation.vue";
import search from "../search/search.vue";
import Foot from "./footer.vue";
const Name = ref("OYTEE");
const placehoder = ref("How can i help you?.....");
const trending = ref("Trending");

const listItem = ref([
  {
    img: "https://hortology.co.uk/cdn/shop/files/Ficus-elastica-Melany-Rubber-Plant-14x45cm-Hadleigh-Plant-Pot-White-20x17.5cm_52335388-022e-4750-9c9f-54efbba9ea0a_1200x.jpg?v=1715183642",
    title: "Olive",
    price: 13.85,
  },
  {
    img: "https://foli.ca/cdn/shop/products/CPCo-0366_b4e112b7-aab7-44bd-b65f-ad033ba9bc88.jpg?v=1718033619&width=4096",
    title: "Green",
    price: 19.9,
  },
  {
    img: "https://nurserylive.com/cdn/shop/products/nurserylive-g-plants-rose-dark-pink-plant-in-grower-round-black-pot-922015_600x600.jpg?v=1679751054",
    title: "rose",
    price: 25.13,
  },
  {
    img: "https://hortology.co.uk/cdn/shop/files/Ficus-elastica-Melany-Rubber-Plant-14x45cm-Hadleigh-Plant-Pot-White-20x17.5cm_52335388-022e-4750-9c9f-54efbba9ea0a_1200x.jpg?v=1715183642",
    title: "Olive",
    price: 13.85,
  },
  {
    img: "https://foli.ca/cdn/shop/products/CPCo-0366_b4e112b7-aab7-44bd-b65f-ad033ba9bc88.jpg?v=1718033619&width=4096",
    title: "Green",
    price: 19.9,
  },
  {
    img: "https://nurserylive.com/cdn/shop/products/nurserylive-g-plants-rose-dark-pink-plant-in-grower-round-black-pot-922015_600x600.jpg?v=1679751054",
    title: "rose",
    price: 25.13,
  },
  {
    img: "https://foli.ca/cdn/shop/products/CPCo-0366_b4e112b7-aab7-44bd-b65f-ad033ba9bc88.jpg?v=1718033619&width=4096",
    title: "Green",
    price: 19.9,
  },
  {
    img: "https://nurserylive.com/cdn/shop/products/nurserylive-g-plants-rose-dark-pink-plant-in-grower-round-black-pot-922015_600x600.jpg?v=1679751054",
    title: "rose",
    price: 25.13,
  },
]);
const categoryList = ref([
  {
    img: "https://cdni.iconscout.com/illustration/premium/thumb/plant-10715415-8610526.png",
    title: " Plants and Care",
  },
  {
    img: "https://static.vecteezy.com/system/resources/thumbnails/024/859/837/small_2x/monstera-plant-in-ceramic-pot-illustration-ai-generative-png.png",
    title: " Plants and Care",
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/010/833/673/original/3d-earth-planet-illustration-free-png.png",
    title: " Plants and Care",
  },
  {
    img: "https://img.pikbest.com/png-images/world-water-day-little-girl-illustration_5856437.png!sw800",
    title: " Plants and Care",
  },
  {
    img: "https://cdni.iconscout.com/illustration/premium/thumb/plant-10715415-8610526.png",
    title: " Plants and Care",
  },
  {
    img: "https://cdni.iconscout.com/illustration/premium/thumb/plant-10715415-8610526.png",
    title: " Plants and Care",
  },
]);
</script>
<template>
  <div>
    <!-- navbar -->
    <navigation />

    <!-- intropage -->
    <!-- reading post / blog -->
    <section
      class="bg-cover bg-center h-[500px] grid grid-cols-1"
      style="
        background-image: url('https://media.istockphoto.com/id/1422753295/photo/young-woman-working-in-a-garden-shop.jpg?s=2048x2048&w=is&k=20&c=ICDN5X7DX6uaYKETG9acgwNMZ6HeHEMOfh-yvuPw-wk=');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
      "
    >
      <div class="bg-black bg-opacity-50 h-full flex items-center">
        <div class="container mx-auto text-center">
          <h2 class="text-4xl text-white font-bold">
            Plants give us oxygen for the lungs and for the soul
          </h2>
          <p class="text-white mt-2">
            Discover tips and tricks for a flourishing garden
          </p>
        </div>
      </div>
    </section>
    <!-- show slide bar -->
    <section
      class="sec-banner w-[1200px] h-[300px] m-auto overflow-hidden flex gap-2 justify-start p-3 mt-[40px] rounded-md bg-slate-300 max-sm:hidden sm:w-[390px] md:w-[600px] lg:w-[1200px]"
    >
      <!-- Swiper -->
      <div class="swiper mySwiper rounded-xl w-[800px] h-full max-sm:w-[300px]">
        <div class="w-full h-full swiper-wrapper">
          <div class="w-full h-full swiper-slide">
            <img
              src="https://www.shutterstock.com/image-vector/promo-sale-banner-houseplants-store-260nw-1950506587.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <!-- Swiper -->
      <div class="swiper VerSwiper rounded-xl w-[400px] max-sm:hidden">
        <div class="swiper-wrapper">
          <div class="swiper-slide max-md:p-0">
            <img
              src="https://png.pngtree.com/png-vector/20231015/ourmid/pngtree-potted-house-plant-png-image_10164369.png"
              alt=""
            />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>

    <!--product-->
    <section
      class="sec-2 w-full bg-slate-100 my-20 py-10 max-sm:w-full sm:w-full max-md:w-full lg:w-full"
    >
      <!-- contain container asaid and show product -->
      <div
        class="w-[1200px] m-auto flex max-sm:w-[290px] sm:w-[300px] max-md:w-[700px] md:w-[850px] xl:w-[1200px]"
      >
        <div class="content w-full rounded-lg flex">
          <!-- content-show Prodoct -->
          <div
            class="content-1 w-[950px] rounded-lg max-sm:w-[300px] sm:w-full"
          >
            <!-- search bar -->

            <search />

            <!-- Products -->
            <div
              class="row flex flex-wrap gap-2 max-sm:w-[300px] sm:justify-around justify-start"
            >
              <!-- colummn -->
              <div
                class="col-product w-[290px] border-2 rounded-xl bg-slate-50 relative max:sm:w-full sm:w-[320px] m-a md:w-[290px] overflow-hidden"
                v-for="(images, i) in listItem"
                :key="i"
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
                      class="w-full h-full transition duration-300 ease-in-out hover:scale-110"
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
                    <p>$ {{ images.price }}</p>
                    <div
                      class="Addtocart flex w-[100px] h-[50px] p-2 items-center justify-between rounded-xl bg-white overflow-hidden hvr-sweep-to-right"
                      id="addtocart"
                    >
                      <i class="fa-solid fa-basket-shopping"></i>
                      <p class="text-[10px] flex items-center justify-center">
                        Add to Cart
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!-- end show product -->
        </div>
      </div>
    </section>
    <!-- Categories -->
    <section class="w-full">
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
    <!-- fottter -->
    <Foot :company_name="Name" />
  </div>
</template>
<style src="@/assets/css/client.css"></style>
