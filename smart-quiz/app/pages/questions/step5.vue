<template>
  <div style="background-image: url(/backgrounds/5_BG.webp)" class="hero">
    <div class="flex items-center justify-center h-screen">
      <div class="w-7/8 sm:w-4/6 bg-white rounded-4xl overflow-hidden">
        <div class="p-6 step5-main-color-fade-light">
          <div class="text-sm text-gray-400 mb-2">ВОПРОС № 5</div>

          <h2 class="text-2xl font-bold text-gray-800 mb-2">
            {{ currentQuestion.text }}
          </h2>

          <div class="flex items-center justify-center mb-2">
            <UProgress
              :max="Number(6)"
              v-model="currentQuestion.step"
              class="w-5/6"
              :ui="{
                indicator: 'step5-main-color'
              }"
            ></UProgress>
            <div class="flex justify-center w-1/6">
              {{ currentQuestion.step }}/{{ store.totalQuestions }}
            </div>
          </div>

          <div clasFs="text-sm text-gray-400 mb-2">
            {{ currentQuestion.selectionText }}
          </div>

          <div class="space-y-3 mb-10">
            <URadioGroup
              v-model="selectedAnswer"
              color="error"
              variant="card"
              :items="currentQuestion.options"
              :ui="{
                fieldset: 'grid grid-cols-1 grid-cols-1 sm:grid-cols-2 gap-4',
                item: 'rounded-3xl step5-main-color-fade'
              }"
              indicator="end"
            />
          </div>

          <div class="flex items-center justify-between">
            <NuxtLink class="text-base text-gray-700 leading-relaxed" to="/questions/step4"> ← Вернуться назад </NuxtLink>
            <UButton :disabled="!isSelected" color="error" class="pl-4 pr-4 rounded-4xl step5-main-color">
              <NuxtLink class="text-base text-gray-300 leading-relaxed" :to="isSelected ? '/questions/step6' : null"> Далее </NuxtLink>
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

const currentQuestion = store.questions.q5;

const selectedAnswer = currentQuestion.userAnswer
  ? currentQuestion.userAnswer
  : ref("");

const isSelected = computed(() => {

  if(selectedAnswer.value == null) {
    return false;
  }

  currentQuestion.isAnswered = true;
  currentQuestion.userAnswer = selectedAnswer.value;

  return !(selectedAnswer.value.trim() === "");
});

</script>
<style>
.step5-main-color {
  background-color: rgb(201, 124, 89) ;
}
.step5-main-color-fade {
  background-color: rgb(201, 124, 89, 0.2) ;
}
.step5-main-color-fade-light {
  background-color: rgb(243, 255, 243, 1) ;
}
.step5-main-color-outline {
  outline: rgb(201, 124, 89) ;
}
</style>
