<template>
  <div style="background-image: url(/backgrounds/2_BG.webp)" class="hero">
    <div class="flex items-center justify-center h-screen">
      <div class="w-7/8 sm:w-4/6 bg-white rounded-4xl overflow-hidden">
        <div class="p-8 main-color-fade-light">
          <div class="text-sm text-gray-400 mb-2">ВОПРОС № 2</div>

          <h2 class="text-2xl font-bold text-gray-800 mb-2">
            {{ currentQuestion.text }}
          </h2>

          <div class="flex items-center justify-center mb-2">
            <UProgress
              :max="Number(6)"
              v-model="currentQuestion.step"
              class="w-5/6"
              :ui="{
                indicator: 'main-color'
              }"
            ></UProgress>
            <div class="flex justify-center w-1/6">
              {{ currentQuestion.step }}/{{ store.totalQuestions }}
            </div>
          </div>

          <div class="text-sm text-gray-400 mb-3">
            {{ currentQuestion.selectionText }}
          </div>

          <div class="space-y-3 mb-4">
            <UCheckboxGroup
              v-model="selectedAnswers"
              color="error"
              variant="card"
              :items="currentQuestion.options"
              :ui="{
                fieldset: 'grid grid-cols-2',
                item: 'rounded-3xl main-color-fade ',
                base: 'main-color-outline'
              }"
              indicator="end"
              :uiRadio="{
                wrapper: 'main-color-outline'
              }"
            />
          </div>

          <div class="flex items-center justify-between">
            <NuxtLink class="text-base text-gray-500 dark:text-gray-300 leading-relaxed" to="/questions/step1"> ← Вернуться назад </NuxtLink>
            <UButton
              :disabled="!isSelected"
              color="error"
              class="pl-4 pr-4 rounded-4xl main-color"
            >
              <NuxtLink class="text-base text-gray-300 leading-relaxed" :to="isSelected ? '/questions/step3' : null"> Далее </NuxtLink>
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

const currentQuestion = store.questions.q2;
  console.log(currentQuestion);

const selectedAnswers = currentQuestion.userAnswer
  ? currentQuestion.userAnswer
  : ref([]);

const isSelected = computed(() => {

  if(selectedAnswers.value == []) {
    return false;
  }

  if(!selectedAnswers.value) {
    return false;
  }

  currentQuestion.isAnswered = true;
  currentQuestion.userAnswer = selectedAnswers.value;

  return !(Object.keys(selectedAnswers.value).length === 0);
});

</script>
<!-- Акценты
1 – AE2448
2 – 0A5272
3 – 1DAC9C
4 – 522682
5 – 097C59
6 – AA5B18 
Цвета блоков
1 – FFF3F6
2 – F4F3FF
3 – F3FFFD
4 – FEF3FF
5 – F3FFF3
6– FFFAF3 -->
<style>
.main-color {
  background-color: rgb(10, 82, 114) ;
}
.main-color-fade {
  background-color: rgb(10, 82, 114, 0.2) ;
}
.main-color-fade-light {
  background-color: rgb(10, 82, 114, 0.1) ;
}
.main-color-outline {
  outline: rgb(10, 82, 114) ;
}
</style>
