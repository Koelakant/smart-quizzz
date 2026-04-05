<template>
  <div style="background-image: url(/backgrounds/1_BG.webp)" class="hero">
    <div class="flex items-center justify-center h-screen">
      <div class="w-7/8 sm:w-4/6 bg-white rounded-4xl overflow-hidden">
        <div class="p-6 step1-main-color-fade-light">
          <div class="text-sm text-gray-400 mb-2">ВОПРОС № 1</div>

          <h2 class="text-2xl font-bold text-gray-800 mb-2">
            {{ currentQuestion.text }}
          </h2>

          <div class="flex items-center justify-center mb-2">
            <UProgress
              :max="Number(6)"
              v-model="currentQuestion.step"
              class="w-5/6"
              :ui="{
                indicator: 'step1-main-color'
              }"
            ></UProgress>
            <div class="flex justify-center w-1/6">
              {{ currentQuestion.step }}/{{ store.totalQuestions }}
            </div>
          </div>

          <div class="text-sm text-gray-400 mb-2">
            {{ currentQuestion.selectionText }}
          </div>

          <div class="space-y-3 mb-10">
            <URadioGroup
              v-model="selectedAnswer"
              indicator="end"
              color="error"
              variant="card"
              :items="currentQuestion.options"
              :ui="{
                item: 'rounded-3xl step1-main-color-fade'
              }"
            />
          </div>

          <div class="flex items-center justify-end">
            <UButton
              :disabled="!isSelected"
              class="pl-6 pr-6 rounded-4xl step1-main-color"
            >
              <NuxtLink :to="isSelected ? '/questions/step2' : null">
                Далее
              </NuxtLink>
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

const currentQuestion = store.questions.q1;

const selectedAnswer = currentQuestion.userAnswer
  ? currentQuestion.userAnswer
  : ref("");

const isSelected = computed(() => {
  if (selectedAnswer.value == null) {
    return false;
  }

  currentQuestion.isAnswered = true;
  currentQuestion.userAnswer = selectedAnswer.value;

  return selectedAnswer.value.trim() != "";
});
</script>

<style>
.step1-main-color {
  background-color: rgb(174, 36, 72) ;
}
.step1-main-color-fade {
  background-color: rgb(174, 36, 72, 0.2) ;
}
.step1-main-color-fade-light {
  background-color: rgb(255, 243, 246, 1) ;
}
</style>
