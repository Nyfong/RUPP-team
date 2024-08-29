<script setup>
import { listItem, Name } from "../shoppage/store";
import Foot from "../homepage/footer.vue";
import Navigation from "../navigationbar/navigation.vue";
import { ref } from "vue";
const placehoder = ref("what you want to plants?.....");
const trending = ref("Trending");
</script>

<template>
  <div>
    <!-- navigation         -->
    <Navigation />
    <!-- main -->
    <main>
      <section class="sec-2 w-full bg-slate-100" v-for="i in 10" :key="i">
        <!-- contain container asaid and show product -->
        <div
          class="w-[1200px] m-auto py-3 border-b-2 border-green-300 max-sm:w-[290px] sm:w-[300px] max-md:w-[700px] md:w-[850px] xl:w-[1200px] px-0"
          v-for="product in 1"
          :key="product"
        >
          <!-- container -->
          <div class="container w-full flex p-3 flex-wrap mt-[30px]">
            <!-- aside photo -->
            <div
              class="aside_photo rounded-xl gap-4 flex max-sm:w-full sm:w-full max-md:w-full md:w-[55%] max-lg:w-[55%] lg:w-[55%]"
            >
              <!-- preview -->
              <div
                class="left_side w-[25%] h-full rounded-xl flex flex-col max-sm:hidden"
              >
                <div
                  class="pic_1 w-full h-[120px] mt-2 p-1 border-2 border-black hvr-reveal"
                  v-for="i in 3"
                  :key="i"
                >
                  <img
                    src="https://imgix.be.green/63640479d5c27125542305.jpg"
                    class="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <!-- main selected -->
              <div
                class="mainphoto w-[75%] h-full rounded-xl p-2 relative max-sm:w-[290px] sm:w-[300px] max-md:w-[700px] md:w-[850px] xl:w-[1200px]"
              >
                <img
                  src="https://imgix.be.green/63640479d5c27125542305.jpg"
                  class="w-full h-full rounded-xl"
                  alt=""
                />

                <div
                  class="show_height absolute w-[200px] h-[50px] bg-green-400 bottom-[30px] rounded-r-2xl flex items-center justify-evenly"
                >
                  <i class="fa-solid fa-seedling"></i>
                  <p class="text-white">Height 120cm</p>
                </div>
              </div>
            </div>

            <!-- description details and price add number .. -->
            <div
              class="aside_payment flex flex-col gap-3 h-[700px] rounded-xl p-6 max-sm:w-full sm:w-full max-md:w-full md:w-[45%] max-lg:w-[45%] lg:w-[45%]"
            >
              <!-- name and price -->
              <div class="row-1 w-fill p-1">
                <div class="name_price flex p-3 justify-between items-cneter">
                  <p>Ficus elastica tineke XL</p>
                  <p>43.99$</p>
                </div>
                <div class="name_price flex p-3 justify-between items-cneter">
                  <p class="font-bold text-xs">Ficus elastica tineke XL</p>
                  <p class="text-red-500">FREE DERIVERRY</p>
                </div>
              </div>
              <!-- choese pot -->
              <div class="row-2 w-fill p-1">
                <div
                  class="w-full flex p-3 items-cneter border-t-2 border-b-green-300"
                >
                  <p>Choose your pot</p>
                </div>
                <div class="pot_photos flex p-3 gap-2">
                  <!-- photos of pot-->

                  <div
                    class="photo_1 w-[250px] h-[150px] flex flex-col items-center p-1 hvr-reveal max-sm:hidden"
                  >
                    <img
                      src="https://be.green/build/images/product/product-pot.jpg"
                      class="w-[80%] h-[80%] rounded-2xl"
                      alt=""
                    />
                    <p class="text-green-500">10.22$</p>
                  </div>
                  <div
                    class="photo_1 w-[250px] h-[150px] flex flex-col items-center p-1 hvr-reveal max-sm:hidden"
                  >
                    <img
                      src="https://imgix.be.green/61fd018f1114f043629253.jpg?&w=220&h=220"
                      class="w-[80%] h-[80%] rounded-2xl"
                      alt=""
                    />
                    <p class="text-green-500">10.22$</p>
                  </div>
                  <div
                    class="photo_1 w-[250px] h-[150px] flex flex-col items-center p-1 hvr-reveal"
                  >
                    <img
                      src="https://imgix.be.green/639c4b6239dd7878991430.jpg?&w=220&h=220"
                      class="w-[80%] h-[80%] rounded-2xl"
                      alt=""
                    />
                    <p class="text-green-500">10.22$</p>
                  </div>
                  <div
                    class="photo_1 w-[250px] h-[150px] flex flex-col items-center p-1 hvr-reveal relative"
                  >
                    <img
                      src="https://imgix.be.green/639b58d2be901412456183.jpg?&w=220&h=220"
                      class="w-[80%] h-[80%] rounded-2xl"
                      alt=""
                    />
                    <p class="text-green-500">10.22$</p>

                    <!-- cover more -->
                    <div
                      class="more absolute w-full h-full flex items-center justify-center bg-black opacity-50"
                    ></div>
                    <span
                      class="absolute wi-full h-full flex items-center justify-center text-white"
                    >
                      More
                    </span>
                  </div>
                </div>
              </div>

              <!-- deleverry country -->

              <div
                class="delivery flex justify-between p-2 items-center w-full border-2 border-green-500"
              >
                <!-- icons and name of country -->
                <div class="w-[80%] flex text-green-500 items-center gap-5">
                  <i class="fa-solid fa-truck"></i>
                  <p>Delrivery country</p>
                  <p class="max-sm:hidden">cambodia</p>
                </div>
                <!-- change contry -->
                <div class="w-[20%] flex text-green-500 items-center gap-5">
                  <i class="fa-solid fa-location-dot"></i>
                  <u class="max-sm:hidden">cambodia</u>
                </div>
              </div>
              <!-- at plant to cart -->
              <div
                class="w-full h-[40px] flex items-center justify-center font-bold text-white bg-green-400 hover:bg-green-600"
              >
                <p>Add plants to cart</p>
              </div>
              <!-- pay with VISA card -->
              <button
                type="button"
                class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2"
              >
                <svg
                  aria-hidden="true"
                  class="w-10 h-3 me-2 -ms-1"
                  viewBox="0 0 660 203"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996"
                    fill="#0E4595"
                  />
                  <path
                    d="M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718"
                    fill="#F2AE14"
                  />
                </svg>
                Pay with Visa
              </button>
              <!-- pay with ETH -->
              <button
                type="button"
                class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
              >
                <svg
                  class="w-4 h-4 me-2 -ms-1 text-[#626890]"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="ethereum"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                  ></path>
                </svg>
                Pay with Ethereum
              </button>
              <!-- pay with apple -->
              <button
                type="button"
                class="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2"
              >
                <svg
                  class="w-5 h-5 me-2 -ms-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="apple"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  ></path>
                </svg>
                Check out with Apple Pay
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <section></section>
    <!-- fottter -->
    <Foot :company_name="Name" />
  </div>
</template>
