<script setup>
import shoppage from "../shoppage/shoppage.vue";
const route = useRoute();
const activeLink = ref(route.path);

const setActiveLink = (path) => {
  activeLink.value = path;
};
</script>

<template>
  <div class="sticky top-0 z-[1000] max-w-screen-2xl min-w-80">
    <section class="sec-1 w-full bg-white z-[1000] px-6 max-sm:p-0 sm:p-0">
      <nav
        class="w-1200 h-full m-auto grid sm:grid-col-1 md: grid-cols-2 md: grid-auto-flow-col bg-slate-50"
      >
        <div class="nav-expand h-full flex items-center p-4">
          <p class="hvr-underline-revea hvr-underline-from-left">OYTEE</p>
        </div>
        <div
          class="h-full flex items-center justify-between p-3 xl:hidden lg:hidden sm:visible max-sm:visible"
        >
          <ul>
            <li>
              <a href="" class="hover:text-green-500">
                <!-- <Icon name="" -->
              </a>
            </li>
          </ul>
        </div>
        <div
          class="nav-navbar h-full grid sm: grid-cols-1 max-sm:text-xs sm:grid-flow-col p-3"
        >
          <div class="menu w-full">
            <ul class="flex gap-5">
              <li
                :class="{ 'text-blue-600': activeLink === '/' }"
                class="hover:text-green-500"
              >
                <NuxtLink to="/" @click="setActiveLink('/')">homepage</NuxtLink>
              </li>
              <li
                :class="{
                  'text-blue-600': activeLink === '/shoppage/shoppage',
                }"
                class="hover:text-green-500"
              >
                <NuxtLink
                  to="/shoppage/shoppage"
                  @click="setActiveLink('/shoppage/shoppage')"
                  >Shop</NuxtLink
                >
              </li>
              <li
                :class="{
                  'text-blue-600': activeLink === '/plantcares/plantcare',
                }"
                class="hover:text-green-500"
              >
                <NuxtLink
                  to="/plantcares/plantcare"
                  @click="setActiveLink('/plantcares/plantcare')"
                  >Plantcare
                </NuxtLink>
              </li>
              <li
                :class="{ 'text-blue-600': activeLink === '/details/details' }"
                class="hover:text-green-500"
              >
                <NuxtLink
                  to="/details/details"
                  @click="setActiveLink('/details/details')"
                  >detail</NuxtLink
                >
              </li>
              <li
                :class="{ 'text-blue-600': activeLink === '/blog/blog' }"
                class="hover:text-green-500"
              >
                <NuxtLink to="/blog/blog" @click="setActiveLink('/blog/blog')"
                  >Blog</NuxtLink
                >
              </li>
              <!-- <li class="hover:text-green-500">
                <NuxtLink to=""> Blog</NuxtLink>
              </li> -->
            </ul>
          </div>

          <div
            class="profile w-[25%] items-center gap-2 h-full justify-around grid grid-cols-[60px_60px_1fr] max-lg:hidden"
          >
            <!-- shoping bag -->
            <div class="text-xl relative">
              <Icon name="uiw:shopping-cart" />
              <div
                class="notification w-[20px] h-[20px] rounded-full bg-green-400 absolute text-white flex items-center justify-center text-[7px] top-[-5px] left-[15px]"
                id="favorite"
              >
                1
              </div>
            </div>

            <!-- favorite -->
            <div class="text-xl relative">
              <Icon name="uiw:heart-on" />
              <div
                class="notification w-[20px] h-[20px] rounded-full bg-green-400 absolute text-white flex items-center justify-center text-[7px] top-[-5px] left-[15px]"
                id="favorite"
              >
                1
              </div>
            </div>

            <!-- user profile -->
            <NuxtLink to="/profile/profileMain">
              <div
                class="rounded-full w-[40px] h-[40px] bg-green-400 border-2 border-green-500 relative hover:Pfdropdown visible"
              >
                <img
                  src="https://www.meme-arsenal.com/memes/04a8b5db8363deefc63fd35461ce6c68.jpg"
                  class="w-full h-full object-cover border-green-500 rounded-full"
                  alt=""
                />
                <span
                  class="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"
                ></span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </nav>
    </section>
  </div>
</template>
