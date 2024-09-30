<script setup lang="ts">
import { Props, FieldTypes } from "./model/interfaces";

import InputText from "primevue/inputtext";
import RadioButton from "primevue/radiobutton";
import Textarea from "primevue/textarea";

const { question, disabled } = defineProps<Props>();
const answer = defineModel("answer");
</script>

<template>
  <div class="question mb-[20px] text-[14px] px-[12px]">
    <p class="question__text font-bold mb-[4px]">{{ question.text }}</p>

    <div
      v-for="field in question.fields"
      :key="field.id"
      :class="{ 'inline mr-[10px]': field.field_type == FieldTypes.Radio }"
    >
      <Textarea
        v-if="field.field_type == FieldTypes.Textarea"
        v-model="answer"
        autoResize
        class="w-full text-[12px]"
        :disabled="disabled"
      />
      <InputText
        v-else-if="field.field_type == FieldTypes.Text"
        v-model="answer"
        class="w-full text-[12px]"
        :disabled="disabled"
      />
      <label v-else-if="field.field_type == FieldTypes.Radio">
        {{ field.text }}
        <RadioButton
            v-model="answer"
            :value="field.id"
            :disabled="disabled"
        />
      </label>
    </div>
  </div>
</template>
