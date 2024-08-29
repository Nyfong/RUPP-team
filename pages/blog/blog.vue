<script setup>
import navigation from "../navigationbar/navigation.vue";
import Footer from "../homepage/footer.vue";
import intropage from "../homepage/intropage.vue";
import { listItem, Name } from "../shoppage/store";
</script>

<template>
  <div>
    <navigation />
    <intropage />
    <main>
      <!-- Author side -->
      <section
        class="max-w-screen-2xl min-w-80 grid container px-3 mx-auto mt-8 flex grid grid-cols-1 sm:grid-cols-3"
      >
        <!-- Blog Posts -->
        <main class="sm:grid col-span-2">
          <h2 class="text-3xl font-bold mb-4">Latest Posts</h2>

          <!-- Post  -->
          <article
            class="mb-6 bg-slate-50 p-3 rounded-md"
            v-for="i in 6"
            :key="i"
          >
            <div>
              <img
                src="https://media.post.rvohealth.io/wp-content/uploads/2020/09/Male_Indoor_Plants_732x549-thumbnail.jpg"
                alt=""
                class="h-[400px] w-full object-cover rounded-md"
              />
            </div>
            <h3 class="text-xl font-bold mt-2">Plants Dragon</h3>
            <p class="mt-2">Short excerpt from the post...</p>
            <NuxtLink href="#" class="text-green-600 hover:text-green-700"
              >Read more</NuxtLink
            >
          </article>
        </main>

        <!-- Sidebar -->
        <aside class="ml-4">
          <!-- author1 -->
          <div class="bg-white p-4 rounded-lg shadow-md mb-6">
            <h3 class="text-xl font-bold mb-2">About the Author</h3>
            <img
              src="..//..//components/image/fong.jpg"
              class="w-16 h-16 object-cover rounded-full mb-2"
            />
            <p>
              <b>Ny fong</b> is a perfessornal of plant.
              <span>
                <details>
                  he enjoys exploring nature and experimenting with new plant
                  species
                </details>
              </span>
              . Follow Jane for inspiring gardening stories, practical advice,
              and a deep appreciation for the green world around us.
            </p>
          </div>
          <!-- author 2 -->
          <div class="bg-white p-4 rounded-lg shadow-md mb-6">
            <h3 class="text-xl font-bold mb-2">About the Author</h3>
            <img src="" class="w-16 h-16 object-cover rounded-full mb-2" />
            <p>
              <b> Bro ngol</b> is a perfessornal of plant.
              <span class="bg-yellow-300">
                he enjoys exploring nature and experimenting with new plant
                species </span
              >. Follow Jane for inspiring gardening stories, practical advice,
              and a deep appreciation for the green world around us.
            </p>
          </div>
          <!-- author 3 -->
          <div class="bg-white p-4 rounded-lg shadow-md mb-6">
            <h3 class="text-xl font-bold mb-2">About the Author</h3>
            <img src="" class="w-16 h-16 object-cover rounded-full mb-2" />
            <p>
              <b> Kai Seng </b> is a perfessornal of plant.
              <br />
              <span class="bg-green-400 p-1 text-white"
                >Founder of Plants Shop</span
              >
              . he enjoys exploring nature and experimenting with new plant
              species. Follow Jane for inspiring gardening stories, practical
              advice, and a deep appreciation for the green world around us.
            </p>
          </div>

          <!-- popular post -->
          <div class="bg-white p-4 rounded-lg shadow-md mb-6">
            <h3 class="text-xl font-bold mb-2">Popular Posts</h3>
            <ul>
              <li>
                <NuxtLink to="#" class="text-green-600 hover:text-green-700"
                  >Popular Post 1</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="#" class="text-green-600 hover:text-green-700"
                  >Popular Post 2</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="#" class="text-green-600 hover:text-green-700"
                  >Popular Post 3</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-2">Subscribe</h3>
            <form>
              <input
                type="email"
                placeholder="Your email"
                class="w-96% p-2 border rounded mb-2"
              />
              <button class="w-96% bg-green-700 text-white p-2 rounded">
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </section>
      <!-- pagenation -->
      <div class="flex translate-x-1/2 hidden">
        <!-- Previous Button -->
        <a
          href="#"
          class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Previous
        </a>

        <!-- Next Button -->
        <a
          href="#"
          class="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </a>
      </div>
    </main>
    <Footer :company_name="Name" />
  </div>
</template>
