<script setup>
import { ref } from "vue";
import navigation from "../navigationbar/navigation.vue";
import Foot from "../homepage/footer.vue";
import { listItem, Name } from "./store";
</script>

<template>
  <div>
    <!-- nav bar -->
    <navigation />

    <!-- main -->
    <main>
      <section
        class="sec-2 w-[1200px] m-auto my-10 flex max-sm:w-full sm:w-full max-md:w-[700px] md:w-[850px] xl:w-[1200px] px-0"
      >
        <div class="input-fill w-[600px] p-10 rounded-lg bg-slate-50">
          <ol class="flex items-center w-full mb-4 sm:mb-5">
            <li
              class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800"
            >
              <div
                class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0"
              >
                <svg
                  class="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path
                    d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"
                  />
                </svg>
              </div>
            </li>
            <li
              class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700"
            >
              <div
                class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"
              >
                <svg
                  class="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 14"
                >
                  <path
                    d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 12V6h16v6H2Z"
                  />
                  <path
                    d="M6 8H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0H9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Z"
                  />
                </svg>
              </div>
            </li>
            <li class="flex items-center w-full">
              <div
                class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"
              >
                <svg
                  class="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path
                    d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"
                  />
                </svg>
              </div>
            </li>
          </ol>

          <h1
            class="text-xl font-bold leading-tight mb-10 tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Payment
          </h1>
          <form>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >First name</label
                >
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Last name</label
                >
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                />
              </div>

              <div>
                <label
                  for="website"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >card number</label
                >
                <input
                  type="url"
                  id="website"
                  class="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123-456-789-000"
                  required
                  disabled
                  readonly
                />
              </div>
              <div>
                <label
                  for="website"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >CVV</label
                >
                <input
                  type="url"
                  id="website"
                  class="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123"
                  required
                  disabled
                  readonly
                />
              </div>
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Email address</label
              >
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="nyfong@gmail.com"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="confirm_password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Confirm password</label
              >
              <input
                type="password"
                id="confirm_password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
              />
            </div>
            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >I agree with the
                <a
                  href="#"
                  class="text-blue-600 hover:underline dark:text-blue-500"
                  >terms and conditions</a
                >.</label
              >
            </div>
            <div
              type="submit"
              class="text-white cursor-not-allowed bg-blue-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </div>
            <div
              class="p-4 mt-3 mb-4 text-sm text-yellow-800 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-yellow-300"
              role="alert"
            >
              <span class="font-medium">Warning alert!</span> you need to
              <NuxtLink to="/Login/login" class="underline text-blue-700"
                >sign-in</NuxtLink
              >
              first to use to service
            </div>
          </form>
        </div>
        <div class="container-2 w-[700px] flex max-sm:hidden">
          <!-- aside photo -->
          <div class="aside-photo w-full h-full rounded-xl gap-4 flex">
            <!-- preview -->
            <div class="left_side w-[15%] h-full rounded-xl flex flex-col">
              <div
                class="pic_1 w-full h-[120px] mt-2 p-1 border-2 border-black hvr-reveal"
              >
                <img
                  src="https://www.easytogrowbulbs.com/cdn/shop/products/Plumeria_Pink_Rainbow_374561026.SHUT.jpg?v=1571439584&width=1946"
                  class="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div
                class="pic_1 w-full h-[120px] mt-2 border-2 border-black p-1 hvr-reveal"
              >
                <img
                  src="https://unbeleafable.ph/wp-content/uploads/2020/09/sweet-basil.png"
                  class="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div
                class="pic_1 w-full h-[120px] mt-2 border-2 border-black p-1 hvr-reveal"
              >
                <img
                  src="https://nurserylive.com/cdn/shop/products/nurserylive-g-plants-rose-dark-pink-plant-in-grower-round-black-pot-922015_600x600.jpg?v=1679751054"
                  class="w-full h-full object-cover"
                  alt="Plant"
                />
              </div>
            </div>
            <!-- main selected -->
            <div class="mainphoto w-[85%] h-full rounded-xl p-2 relative">
              <img
                src="https://foli.ca/cdn/shop/products/CPCo-0366_b4e112b7-aab7-44bd-b65f-ad033ba9bc88.jpg?v=1718033619&width=4096"
                class="w-full h-full rounded-xl object-cover"
                alt=" hi"
              />

              <div
                class="show_height absolute w-[200px] h-[50px] bg-orange-50 bottom-[30px] rounded-2xl flex items-center justify-evenly"
              >
                <i class="fa-solid fa-seedling"></i>
                <p>Trending</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- fottter -->
    <Foot :company_name="Name" />
  </div>
</template>
