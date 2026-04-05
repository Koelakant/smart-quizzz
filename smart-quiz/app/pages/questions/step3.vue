<template>
  <div style="background-image: url(/backgrounds/3_BG.webp)" class="hero">
    <div class="flex items-center justify-center h-screen">
      <div class="w-7/8 sm:w-4/6 bg-white rounded-4xl overflow-hidden">
        <div class="p-6 step3-main-color-fade-light">
          <div class="text-sm text-gray-400 mb-2">ВОПРОС № 3</div>

          <h2 class="text-2xl font-bold text-gray-800 mb-2">
            {{ currentQuestion.text }}
          </h2>

          <div class="flex items-center justify-center mb-2">
            <UProgress
              :max="Number(6)"
              v-model="currentQuestion.step"
              class="w-5/6"
              :ui="{
                indicator: 'step3-main-color'
              }"
            ></UProgress>
            <div class="flex justify-center w-1/6">
              {{ currentQuestion.step }}/{{ store.totalQuestions }}
            </div>
          </div>

          <div class="space-y-3 mb-10">
            <div class="flex justify-center text-base text-gray-700 leading-relaxed">
              <h2>Площадь: {{ selectedAnswer }} м2</h2>
            </div>
              <USlider
                v-model="selectedAnswer"
                :min="20"
                :step="5"
                :max="300"
                :default-value="60"
                :ui="{
                  range: 'step3-main-color',
                  thumb: 'step3-main-color',
                }"
              ></USlider>
          </div>

          <div class="flex items-center justify-between">
            <NuxtLink class="text-base text-gray-700 leading-relaxed" to="/questions/step2"> ← Вернуться назад </NuxtLink>
            <UButton
              color="error"
              class="pl-4 pr-4 rounded-4xl step3-main-color"
            >
              <NuxtLink class="text-base text-gray-700 leading-relaxed" to="/questions/step4"> Далее </NuxtLink>
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuestionStore } from "~/models/composables/stores/useQuestionStore";

const store = useQuestionStore();

const currentQuestion = store.questions.q3;

const selectedAnswer = currentQuestion.userAnswer
  ? currentQuestion.userAnswer
  : ref(60);

watch(selectedAnswer, (newValue) => {
  currentQuestion.isAnswered = true;
  currentQuestion.userAnswer = selectedAnswer.value;
}, { immediate: true });

</script>
<style>
.step3-main-color {
  background-color: rgb(29, 172, 156) ;
}
.step3-main-color-fade {
  background-color: rgb(29, 172, 156, 0.2) ;
}
.step3-main-color-fade-light {
  background-color: rgb(243, 255, 253, 1) ;
}
.step3-main-color-outline {
  outline: rgb(29, 172, 156) ;
}
</style>
