<script setup>
import { ref } from "vue";
const slogan1 = ref(["life", "In love", "with Plants"]);
const buynow = ref("buy now");
</script>

<template>
  <div>
    <section
      class="w-full bg-green-600 h-[500px] relative max-sm:w-full max-md:w-full max-lg:w-full"
    >
      <div class="row w-full h-full flex justify-around">
        <!-- 3 clolumns  col-4-->
        <div class="col w-[400px] h-full flex p-4">
          <div class="card w-full h-full">
            <div
              class="slogan w-full h-[300px] font-bold text-5xl text-white flex justify-center items-center"
            >
              <h1>
                {{ slogan1[0] }}
                <br />
                {{ slogan1[1] }}
                <br />
                {{ slogan1[2] }}
              </h1>
            </div>
            <div class="btn flex justify-end">
              <button
                type="button"
                class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                {{ buynow }}
              </button>
            </div>
          </div>
        </div>
        <div class="col w-[600px] h-fullp-4">
          <div class="card">
            <img
              src="https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-home-plant-in-pot-cutout-png-image_11899655.png"
              class="top-[30%] left-1/2 object-cover absolute -translate-x-1/2"
              alt=""
            />
          </div>
        </div>
        <div
          class="col w-[400px] h-full flex items-center p-0 text-white max-sm:hidden max-md:visible"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
            similique, quae rem veniam a quidem, obcaecati distinctio id at
            soluta sit magnam nesciunt aliquid veritatis ea. Tempora ratione
            ipsa reiciendis.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
