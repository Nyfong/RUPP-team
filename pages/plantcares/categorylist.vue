<script setup>
import { ref } from 'vue';
const categoryList = ref([
{
    img:"https://cdni.iconscout.com/illustration/premium/thumb/plant-10715415-8610526.png",
    title:" Plants and Care"
},
{
    img:"https://static.vecteezy.com/system/resources/thumbnails/024/859/837/small_2x/monstera-plant-in-ceramic-pot-illustration-ai-generative-png.png",
    title:" Plants and Care"
},
{
    img:"https://static.vecteezy.com/system/resources/previews/010/833/673/original/3d-earth-planet-illustration-free-png.png",
    title:" Plants and Care"
},
{
    img:"https://img.pikbest.com/png-images/world-water-day-little-girl-illustration_5856437.png!sw800",
    title:" Plants and Care"
},
{
    img:"https://cdni.iconscout.com/illustration/premium/thumb/plant-10715415-8610526.png",
    title:" Plants and Care"
},
{
    img:"https://cdni.iconscout.com/illustration/premium/thumb/plant-10715415-8610526.png",
    title:" Plants and Care"
}
])
</script>
<template>
    <div>
        <section class="w-full">
            <div class="category w-[1200px] m-auto  max-sm:w-[290px] sm:w-[300px] max-md:w-[700px] md:w-[850px] xl:w-[1200px]">
                <div class="row w-full h-full flex gap-3 flex-wrap">
                    <div class="col-12 w-full mb-2  h-[10px] max-sm:w-full sm:w-full max-md:w-full md:w-full  max-lg:w-full lg:w-full">
                        <p class="font-bold">Categories</p>
                    </div>
                    <div class="col-3 w-[300px] h-[100px] bg-green-200   rounded-2xl boxshadow" v-for="category in categoryList" :key="category">
                        <div class="card flex gap-1 items-center ">
                            <!-- image -->
                            <div>
                                <img :src=" category.img"
                                class=" w-[100px] object-cover"
                                alt="">
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
    </div>
</template>