<script setup lang="ts">
import MainTemplate from "@//components/shared/MainTemplate.vue";
import { ref } from "vue";
import img from "@assets/Auth.png";
import { useToast } from "primevue/usetoast";
import {
  sendEmailCode,
  checkCode,
  changePassword,
} from "@//services/resetAuth/resetAuth";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const code = ref("");
const password = ref("");
const isCodeSent = ref(false);
const toast = useToast();

const sendEmailCodeHandler = async () => {
  try {
    const response = await sendEmailCode(email.value);
    if (response.status === 200) {
      isCodeSent.value = true;
      toast.add({
        severity: "success",
        summary: "Код отправлен",
        detail: "Код отправлен на вашу почту",
        life: 3000,
      });
    }
  } catch (error) {
    toast.add({
      severity: "error",
      summary: "Ошибка",
      detail: "Ошибка при отправке кода",
      life: 3000,
    });
  }
};

const checkCodeAndChangePassword = async () => {
  try {
    const checkResponse = await checkCode(code.value);
    if (checkResponse.status === 200) {
      const passwordResponse = await changePassword(
        email.value,
        password.value,
        code.value
      );
      if (passwordResponse.status === 200) {
        toast.add({
          severity: "success",
          summary: "Пароль изменен",
          detail: "Пароль успешно изменен",
          life: 3000,
        });
        router.push("/auth");
      }
    }
  } catch (error) {
    toast.add({
      severity: "error",
      summary: "Ошибка",
      detail: "Ошибка при изменении пароля",
      life: 3000,
    });
  }
};
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
    Восстановление пароля
  </h3>
  <div class="flex justify-center">
    <div class="pt-[66px] w-[290px] pb-[40px]">
      <input
        v-model="email"
        class="w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3 focus:outline-none focus:ring-2 focus:ring-[#00B9C2]"
        placeholder="Введите вашу почту"
        :disabled="isCodeSent"
      />

      <input
        v-if="isCodeSent"
        v-model="code"
        class="w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3 focus:outline-none focus:ring-2 focus:ring-[#00B9C2]"
        placeholder="Введите код"
      />

      <input
        v-if="isCodeSent"
        v-model="password"
        type="password"
        class="w-full h-10 bg-[#E5F2FC] mt-[18px] rounded-[10px] pl-3 focus:outline-none focus:ring-2 focus:ring-[#00B9C2]"
        placeholder="Введите новый пароль"
      />

      <div
        class="w-full h-[55px] rounded-[30px] bg-[#00B9C2] flex items-center justify-center mt-[27px] cursor-pointer"
        @click="
          isCodeSent ? checkCodeAndChangePassword() : sendEmailCodeHandler()
        "
      >
        <p class="text-[20px] leading-[24px] font-bold text-white">
          {{ isCodeSent ? "Подтвердить и сменить пароль" : "Отправить код" }}
        </p>
      </div>
    </div>
  </div>
</template>
