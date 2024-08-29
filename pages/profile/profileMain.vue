<script setup>
import navigation from "../navigationbar/navigation.vue";
import Footer from "../homepage/footer.vue";
import { listItem, Name } from "../shoppage/store";
import { ref } from "vue";
const Hello = ref("Hello User");
const userName = ref("Seng Sethoeurt");
const userAddressName = ref("@NuxtJS");
const lastesBuy = ref("My lates buy");
const goToCard = ref("Go to cart");
const shopNow = ref("Shop Now");
</script>

<!-- component -->

<template>
  <navigation />
  <div class="max-w-screen-2xl min-w-80">
    <div class="antialiased text-gray-800 md:bg-white">
      <div>
        <!-- section body top nav -->
        <nav class="grid grid-cols-5 gap-4 bg-white">
          <!-- top bar left -->
          <span class="grid col-span-5 p-3 sm:col-span-2">
            <ul
              aria-label="top bar left"
              aria-orientation="horizontal"
              class="flex"
            >
              <!-- add button -->
              <li class="group relative z-10">
                <button
                  aria-controls="add"
                  aria-expanded="false"
                  aria-haspopup="listbox"
                  class="flex items-center text-sm"
                >
                  <i>
                    <svg
                      class="fill-current w-3 h-3 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 10h-10v-10h-2v10h-10v2h10v10h2v-10h10z" />
                    </svg>
                  </i>
                  <span class="ml-2">Add</span>
                </button>
                <span class="absolute p-1 hidden group-hover:block">
                  <ul
                    id="add"
                    role="listbox"
                    class="outline-none py-2 bg-white border rounded-md w-screen max-w-md w-dropdown-large shadow-lg focus:outline-none leading-relaxed"
                  >
                    <li role="separator" class="mb-2">
                      <label class="block px-4 py-3 font-semibold"> New </label>
                      <hr />
                    </li>
                    <li
                      role="option"
                      class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer"
                    >
                      Ticket
                    </li>
                    <li
                      role="option"
                      class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer"
                    >
                      User
                    </li>
                    <li
                      role="option"
                      class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer"
                    >
                      Organization
                    </li>
                    <li
                      role="option"
                      class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer"
                    >
                      Search
                    </li>
                    <li role="separator" class="mb-2">
                      <label class="block px-4 py-3 font-semibold"
                        >Recently Viewed</label
                      >
                      <hr />
                    </li>
                    <li
                      role="option"
                      class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer"
                    >
                      <div class="flex">
                        <div class="pr-2">
                          <span
                            style="padding: 2px 5px; font-size: 0.7rem"
                            class="font-mono rounded-sm bg-red-600 text-white leading-none"
                            >O</span
                          >
                        </div>
                        <div class="flex-1">
                          <p>Vertias - ams opps issue</p>
                          <p class="text-gray-600">
                            <span>#ticket/14352</span>
                            <span class="mx-1 font-black">&#183;</span>
                            <span>Nico Braun</span>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li
                      role="option"
                      class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer"
                    >
                      <div class="flex">
                        <div class="pr-2">
                          <span
                            style="padding: 2px 5px; font-size: 0.7rem"
                            class="font-mono rounded-sm bg-yellow-400 text-black leading-none"
                            >N</span
                          >
                        </div>
                        <div class="flex-1">
                          <p>Vertias - ams opps issue</p>
                          <p class="text-gray-600">
                            <span>#ticket/14352</span>
                            <span class="mx-1 font-black">&#183;</span>
                            <span>Nico Braun</span>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li
                      role="option"
                      class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer"
                    >
                      <div class="flex">
                        <div class="pr-2">
                          <span
                            style="padding: 2px 5px; font-size: 0.7rem"
                            class="font-mono rounded-sm bg-gray-500 text-white leading-none"
                            >S</span
                          >
                        </div>
                        <div class="flex-1">
                          <p>Vertias - ams opps issue</p>
                          <p class="text-gray-600">
                            <span>#ticket/14352</span>
                            <span class="mx-1 font-black">&#183;</span>
                            <span>Nico Braun</span>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li
                      role="option"
                      class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer"
                    >
                      <div class="flex">
                        <div class="pr-2">
                          <span
                            style="padding: 2px 5px; font-size: 0.7rem"
                            class="font-mono rounded-sm bg-blue-600 text-white leading-none"
                            >P</span
                          >
                        </div>
                        <div class="flex-1">
                          <p>Vertias - ams opps issue</p>
                          <p class="text-gray-600">
                            <span>#ticket/14352</span>
                            <span class="mx-1 font-black">&#183;</span>
                            <span>Nico Braun</span>
                          </p>
                        </div>
                      </div>
                    </li>

                    <li
                      role="option"
                      class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer"
                    >
                      <div class="flex">
                        <div class="pr-2">
                          <span
                            style="padding: 2px 5px; font-size: 0.7rem"
                            class="font-mono rounded-sm bg-gray-800 text-white leading-none"
                            >H</span
                          >
                        </div>
                        <div class="flex-1">
                          <p>Vertias - ams opps issue</p>
                          <p class="text-gray-600">
                            <span>#ticket/14352</span>
                            <span class="mx-1 font-black">&#183;</span>
                            <span>Nico Braun</span>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </span>
              </li>
            </ul>
          </span>

          <!-- to bar right  -->
          <span class="grid col-span-5 sm:col-span-3">
            <ul
              aria-label="top bar right"
              aria-orientation="horizontal"
              class="px-8 flex justify-between items-center"
            >
              <li class="relative">
                <input
                  title="Search Bar"
                  aria-label="search bar"
                  role="search"
                  class="pr-8 pl-4 py-2 rounded-md cursor-pointer transition-all duration-300 ease-in-out focus:border-black focus:cursor-text w-4 focus:w-64 placeholder-transparent focus:placeholder-gray-500"
                  type="text"
                  placeholder="Search / Support"
                />
                <i
                  class="pointer-events-none absolute top-0 right-0 h-full flex items-center pr-3"
                >
                  <svg
                    class="fill-current w-4 h-4 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"
                    />
                  </svg>
                </i>
              </li>

              <li class="h-8 w-8 ml-3">
                <button
                  title="Notifications"
                  aria-label="notifications"
                  class="w-full h-full text-white bg-gray-600 rounded-md focus:outline-none focus:shadow-outline"
                >
                  <i>
                    <svg
                      class="fill-current w-4 h-4 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z"
                      />
                    </svg>
                  </i>
                </button>
              </li>

              <li class="h-8 w-8 ml-3">
                <button
                  title="v2 REPL"
                  aria-label="repl"
                  class="w-full h-full text-white bg-gray-600 rounded-md focus:outline-none focus:shadow-outline"
                >
                  <i>
                    <svg
                      class="fill-current w-4 h-4 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z"
                      />
                    </svg>
                  </i>
                </button>
              </li>

              <li class="h-8 w-8 ml-3">
                <button
                  title="Products"
                  aria-label="chi desk products"
                  class="w-full h-full rounded-md focus:outline-none focus:shadow-outline"
                >
                  <i class="text-gray-600">
                    <svg
                      class="fill-current w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11 11h-11v-11h11v11zm13 0h-11v-11h11v11zm-13 13h-11v-11h11v11zm13 0h-11v-11h11v11z"
                      />
                    </svg>
                  </i>
                </button>
              </li>
            </ul>
          </span>
        </nav>

        <!-- section body header -->
        <header
          aria-label="page caption"
          class="flex-none flex h-16 bg-gray-100 border-t px-4 items-center"
        >
          <h1 id="page-caption" class="font-semibold text-lg">
            <span class="text-sm">{{ Hello }}</span
            >👋 {{ userName }}
          </h1>
        </header>

        <!-- main content -->
        <main class="grid grid-cols-1 md:grid-cols-5 min-h-0 border-t p-4">
          <!-- section update to tickets -->
          <section class="grid col-span-1 sm:col-span-2 xl:col-span-1 p-4">
            <h1 class="font-semibold mb-3">Updates to your tickets</h1>
            <ul>
              <li v-for="i in 4" :key="i">
                <article
                  tabindex="0"
                  class="cursor-pointer border rounded-md p-3 bg-white flex text-gray-700 mb-2 hover:border-green-500 focus:outline-none focus:border-green-500"
                >
                  <span class="flex-none pt-1 pr-2">
                    <img
                      class="h-8 w-8 rounded-md"
                      src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/avatar.png"
                    />
                  </span>
                  <div class="flex-1">
                    <header class="mb-1">
                      Tarun T <span class="font-semibold">commented</span> on
                      <h1 class="inline">"RE: WPMS issue".</h1>
                    </header>
                    <p class="text-gray-600">
                      Hi Mazhar, Please note this issue comes when user is not
                      closing or logout sy…
                    </p>
                    <footer class="text-gray-500 mt-2 text-sm">
                      Friday 22:16
                    </footer>
                  </div>
                </article>
              </li>
            </ul>
          </section>
          <!-- section content -->
          <section class="grid col-span-1 sm:col-span-3 xl:col-span-4">
            <div class="bg-white rounded shadow-xl w-full overflow-hidden">
              <div
                class="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500 bg-center bg-cover bg-[url('https://images.hdqwalls.com/wallpapers/anime-girl-sitting-on-the-top-and-watching-the-city-site-b9.jpg')]"
              ></div>
              <div class="px-5 py-2 flex flex-col gap-3 pb-6">
                <div
                  class="h-[90px] shadow-md w-[90px] rounded-full border-4 overflow-hidden -mt-14 border-white"
                >
                  <img
                    src="https://www.meme-arsenal.com/memes/04a8b5db8363deefc63fd35461ce6c68.jpg"
                    class="w-full h-full rounded-full object-center object-cover"
                  />
                </div>
                <div class="">
                  <!-- userName -->
                  <h3
                    class="text-xl text-slate-900 relative font-bold leading-6"
                  >
                    {{ userName }}
                  </h3>
                  <p class="text-sm text-gray-600">
                    {{ userAddressName }}
                  </p>
                </div>
                <div class="flex gap-3 flex-wrap">
                  <span
                    class="rounded-sm bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800"
                    >Developer</span
                  ><span
                    class="rounded-sm bg-green-100 px-3 py-1 text-xs font-medium text-green-800"
                    >Design</span
                  ><span
                    class="rounded-sm bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800"
                    >Managements</span
                  ><span
                    class="rounded-sm bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800"
                    >Love plants</span
                  >
                </div>
                <div class="flex gap-2">
                  <button
                    type="button"
                    class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 active:bg-white hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  >
                    <span>
                      <NuxtLink to="/Login/login">
                        {{ goToCard }}
                      </NuxtLink>
                    </span></button
                  ><button
                    type="button"
                    class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-blue-700 px-3 py-2 text-sm font-medium text-white transition hover:border-blue-300 hover:bg-blue-600 active:bg-blue-700 focus:blue-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <span>
                      <NuxtLink to="/shoppage/shoppage">
                        {{ shopNow }}
                      </NuxtLink>
                    </span>
                  </button>
                </div>
                <h4 class="text-md font-medium leading-3">About</h4>
                <p class="text-sm text-stone-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facere dolores aliquid sequi sunt iusto ipsum earum natus
                  omnis asperiores architecto praesentium dignissimos pariatur,
                  ipsa cum? Voluptate vero eius at voluptas?
                </p>
                <!-- late buy -->
                <h4 class="text-md font-medium leading-3">
                  {{ lastesBuy }}
                  <span>
                    <NuxtLink to="/Login/login"> 🛍️ </NuxtLink>
                  </span>
                </h4>
                <!-- lates buy -->
                <div class="flex flex-col gap-3 blur-[2px]">
                  <div
                    class="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="h-8 w-8 text-slate-500"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                      ></path>
                    </svg>
                    <div class="leading-3">
                      <p class="text-sm font-bold text-slate-700">
                        Ui Designer
                      </p>
                      <span class="text-xs text-slate-600">5 years</span>
                    </div>
                    <p class="text-sm text-slate-500 self-start ml-auto">
                      As Ui Designer on Front Page
                    </p>
                  </div>
                  <div
                    class="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="h-8 w-8 text-slate-500"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                      ></path>
                    </svg>
                    <div class="leading-3">
                      <p class="text-sm font-bold text-slate-700">
                        Ui Designer
                      </p>
                      <span class="text-xs text-slate-600">5 years</span>
                    </div>
                    <p class="text-sm text-slate-500 self-start ml-auto">
                      As Ui Designer on Front Page
                    </p>
                  </div>
                  <div
                    class="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="h-8 w-8 text-slate-500"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                      ></path>
                    </svg>
                    <div class="leading-3">
                      <p class="text-sm font-bold text-slate-700">
                        Ui Designer
                      </p>
                      <span class="text-xs text-slate-600">5 years</span>
                    </div>
                    <p class="text-sm text-slate-500 self-start ml-auto">
                      As Ui Designer on Front Page
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
    <Footer :company_name="Name" />
  </div>
</template>

<style scoped>
html {
  font-size: 14px;
  line-height: 1.285;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif;
}

/* can be configured in tailwind.config.js */
.group:hover .group-hover\:block {
  display: block;
}

.focus\:cursor-text:focus {
  cursor: text;
}

.focus\:w-64:focus {
  width: 16rem;
}

/* zendesk styles */
.h-16 {
  height: 50px;
}
.bg-teal-900 {
  background: #03363d;
}
.bg-gray-100 {
  background: #f8f9f9;
}
.hover\:border-green-500:hover {
  border-color: #78a300;
}
</style>
