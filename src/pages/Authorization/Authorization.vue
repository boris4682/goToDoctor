<script setup lang="ts">
import MainTemplate from "@//components/shared/MainTemplate.vue";
import img from "@assets/Auth.png";
import { ref, onMounted } from "vue";
import { loginUser } from "../../services/Auth/LoginService";
import { useRouter } from "vue-router";
import {useToast} from "primevue/usetoast";
import { updateDeviceToken } from "@/services/User/updateDeviceToken";

const userData = ref({
  login: "",
  password: "",
});

const router = useRouter();

const toast = useToast();

const fetchLogin = async () => {
  const { data, status } = await loginUser(userData.value);
  if (status === 200) {
    if (data.success) {
      localStorage.setItem("userData", JSON.stringify(data.user));
      updateDeviceToken();
      router.push("/mainpage");
    }
    else {
      toast.add({
        severity: "error",
        summary: "Ошибка",
        detail: data.error,
        life: 3000,
      });
    }
  }
};

onMounted(() => {
  const user = localStorage.getItem("userData");
  if (user) {
    router.push("/mainPage");
  }
});
</script>

<template>
  <MainTemplate>
    <div class="h-[15vh]"></div>
    <div class="px-4">
      <img :src="img" class="w-[225px] h-[248px] mx-auto" />
    </div>
  </MainTemplate>
  <h3
    class="flex text-lg font-semibold leading-5 text-[#006879] justify-center"
  >
    Авторизация
  </h3>
  <div class="flex justify-center">
    <div class="pt-[66px] w-[290px] pb-[40px]">
      <input
        class="w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3"
        type="email"
        v-model="userData.login"
        placeholder="Email"
      />
      <input
        class="w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3"
        type="password"
        placeholder="Пароль"
        v-model="userData.password"
      />
      <div class="flex mt-[16px] pb-[50px]">
        <input class="bg-[#E5F2FC]" type="checkbox" />
        <p class="text-[#A4A5A5] text-[13px] font-medium leading-4 pl-[13px]">
          Запомнить меня
        </p>
      </div>
      <div
        class="w-full h-[55px] rounded-[30px] bg-[#00B9C2] flex items-center justify-center"
        @click="fetchLogin"
      >
        <p
          class="text-[20px] leading-[24px] font-bold text-white cursor-pointer"
        >
          Войти
        </p>
      </div>
      <a
        class="text-[#A4A5A5] text-4 font-medium leading-4 pl-[13px] cursor-pointer flex justify-center items-center mt-10"
        >Забыли пароль?</a
      >
      <RouterLink
        to="/reg"
        class="text-[13px] font-semibold leading-4 text-black mt-[46px] flex justify-center items-center"
        >Нет аккаунта?
        <a
          class="ml- cursor-pointer font-bold text-[#00B9C2] text-[15px] leading-[18px] ml-1"
          >Зарегистрироваться</a
        >
      </RouterLink>
    </div>
  </div>
</template>
