<script setup lang="ts">
import { ref } from "vue";
import img from "@assets/child.png";
import fon from "@assets/Fon.png";

import back from "@assets/icons/back.png";
import setting from "@assets/icons/setting.png";
import PagesTemplate from "@//components/shared/PagesTemplate.vue";
import { useRouter } from "vue-router";
import { createPatient } from "@//services/patients/createPatient";

const router = useRouter();

const newImg = ref(""); // Путь к изображению
const file = ref<File | null>(null); // Загруженный файл

const handleFile = (file: File) => {
  // Проверяем, что это изображение
  if (file.type.startsWith("image/")) {
    file = file;

    // Создаем URL для отображения изображения
    const reader = new FileReader();
    reader.onload = (e) => {
      newImg.value = e.target?.result as string; // Приведение типа
    };
    reader.readAsDataURL(file);
  } else {
    alert("Пожалуйста, перетащите изображение.");
  }
};

const handleDrop = (event: DragEvent) => {
  const files = event.dataTransfer?.files;
  if (files && files.length > 0) {
    handleFile(files[0]);
  }
};

// получение токена
const user = JSON.parse(localStorage.getItem("userData") ?? "");
const token = user?.auth_token;

const userData = ref({
  token,
  name: "",
  lastName: "",
  secondName: "",
  dateBirth: "",
  email: "",
  phone: "",
  gender: "",
});

const createPatientHandler = async () => {
  if (file.value) return;

  const { data, status } = await createPatient(userData.value, file.value);
  if (status === 200) {
    console.log(data);
  } else {
    console.log("Ошибка сервера");
  }
};
</script>

<template>
  <PagesTemplate class="pb-[80px]">
    <div class="h-[15vh]">
      <img :src="fon" class="mt-[43px] mx-auto" />
    </div>
    <div class="flex">
      <img
        :src="back"
        class="mx-auto w-[11px] h-[16px] translate-y-[-110px] translate-x-[-15px] cursor-pointer"
        @click="router.back()"
      />
      <!-- <div @dragover.prevent @drop.prevent="handleDrop" class="drop-area">
        <img
          :src="'../../assets/child.png' && img"
          alt="Ваше фото"
          class="mx-auto translate-y-[-70px] translate-x-[15px]"
        />
      </div> -->
      <img :src="img" class="mx-auto translate-y-[-70px] translate-x-[15px]" />
      <RouterLink
        to="/setting"
        class="mx-auto w-[43px] h-[40px] translate-y-[-110px] translate-x-[15px] cursor-pointer"
      >
        <img :src="setting" />
      </RouterLink>
    </div>

    <div class="flex justify-center">
      <div class="w-[354px] pb-[122px]">
        <div class="flex justify-between pb-[31px]">
          <RouterLink to="/lcpatient"
            ><p
              class="text-xl font-bold leading-6 text-[#A3A3A3] cursor-pointer"
            >
              Профиль
            </p></RouterLink
          >
          <a class="text-xl font-bold leading-6 text-[#006879] cursor-pointer"
            >Дети</a
          >
        </div>
        <input
          class="w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3"
          placeholder="Иван"
          v-model="userData.name"
        />
        <input
          class="w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3"
          placeholder="Иванов"
          v-model="userData.secondName"
        />
        <input
          class="w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3"
          placeholder="Иванович"
          v-model="userData.lastName"
        />
        <input
          class="w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3"
          placeholder="Дата рождения"
          v-model="userData.dateBirth"
        />
        <input
          class="w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3"
          placeholder="ivanov@mail.ru"
          v-model="userData.email"
        />
        <input
          class="w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3"
          type="number"
          placeholder="+ 7 (903) - 465 - 37 - 26"
          v-model="userData.phone"
        />
        <div>
          <p
            class="text-[#A4A5A5] text-sm font-medium leading-4 mt-[23px] ml-[34px]"
          >
            Пол
          </p>
          <div class="flex gap-[17px] mt-[16px] ml-[10px]">
            <div class="flex gap-[10px]">
              <input
                class="bg-[#E5F2FC]"
                type="radio"
                name="gender"
                @click="userData.gender = 'Женский'"
              />
              <p class="text-[#A4A5A5] text-sm font-medium leading-4">Жен.</p>
            </div>
            <div class="flex gap-[10px]">
              <input
                class="bg-[#E5F2FC]"
                type="radio"
                name="gender"
                @click="userData.gender = 'Мужской'"
              />
              <p class="text-[#A4A5A5] text-sm font-medium leading-4">Муж.</p>
            </div>
          </div>
        </div>
        <button
          class="mt-[20px] border-[#f00] border-[1px] p-3"
          @click="createPatientHandler"
        >
          очень красивая кнопочка создания, не благодарите
        </button>
      </div>
    </div>
  </PagesTemplate>
</template>
