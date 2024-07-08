<script setup lang="ts">

</script>
<template>
    <h3 class="text-[#2C3E4F] font-semibold text-lg leading-5 mt-[44px]">График работы</h3>
    <div class="flex gap-[19px] mt-[29px]">
        <div class="w-[34px] h-[23px] border flex justify-center items-center rounded-[6px] hover:bg-[#00B9C2] cursor-pointer">
            <p class=" font-normal text-[13px] leading-4 hover:text-white">Пн</p>
        </div>
        <div class="w-[34px] h-[23px] border flex justify-center items-center rounded-[6px] hover:bg-[#00B9C2] cursor-pointer">
            <p class=" font-normal text-[13px] leading-4 hover:text-white">Вт</p>
        </div>
        <div class="w-[34px] h-[23px] border flex justify-center items-center rounded-[6px] hover:bg-[#00B9C2] cursor-pointer">
            <p class=" font-normal text-[13px] leading-4 hover:text-white">Ср</p>
        </div>
        <div class="w-[34px] h-[23px] border flex justify-center items-center rounded-[6px] hover:bg-[#00B9C2] cursor-pointer">
            <p class=" font-normal text-[13px] leading-4 hover:text-white">Чт</p>
        </div>
        <div class="w-[34px] h-[23px] border flex justify-center items-center rounded-[6px] hover:bg-[#00B9C2] cursor-pointer">
            <p class=" font-normal text-[13px] leading-4 hover:text-white">Пт</p>
        </div>
        <div class="w-[34px] h-[23px] border flex justify-center items-center rounded-[6px] hover:bg-[#00B9C2] cursor-pointer">
            <p class=" font-normal text-[13px] leading-4 hover:text-white">Сб</p>
        </div>
        <div class="w-[34px] h-[23px] border flex justify-center items-center rounded-[6px] hover:bg-[#00B9C2] cursor-pointer">
            <p class=" font-normal text-[13px] leading-4 hover:text-white">Вс</p>
        </div>
    </div>
    <div class="flex justify-between mt-[29px]">
        <p class=" text-sm font-normal leading-[15px] flex items-center justify-center ">c</p>
        <input class="w-[127px] text-center border rounded-[6px]" placeholder="9:00">
        <p class=" text-sm font-normal leading-[15px] flex items-center justify-center ">до</p>
        <input class="w-[127px] text-center border rounded-[6px]" placeholder="18:00">
    </div>
</template>
