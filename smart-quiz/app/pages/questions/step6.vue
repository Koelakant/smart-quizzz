<template>
  <div style="background-image: url(/backgrounds/5_BG.webp)" class="hero">
    <div class="flex items-center justify-center h-screen">
      <div class="w-7/8 sm:w-4/6 bg-white rounded-4xl overflow-hidden">
        <div class="p-8">
          <div class="text-sm text-gray-400 mb-2">ВОПРОС № 6</div>

          <h2 class="text-2xl font-bold text-gray-800 mb-2">
            {{ currentQuestion.text }}
          </h2>

          <div class="flex items-center justify-center mb-2">
            <UProgress
              :max="Number(6)"
              v-model="currentQuestion.step"
              class="w-5/6"
            ></UProgress>
            <div class="flex justify-center w-1/6">
              {{ currentQuestion.step }}/{{ store.totalQuestions }}
            </div>
          </div>
          <UForm
            ref="form"
            :schema="schema"
            :state="customer"
            @submit="onSubmit"
            class="space-y-4"
          >
            <UFormField class="mb-1" label="ФИО" name="fio" required>
              <UInput
                v-model="customer.fio"
                placeholder="Иванов Иван Иванович"
                class="w-full"
              />
            </UFormField>

            <UFormField class="mb-1" label="Телефон" name="phone" required>
              <UInput
                v-model="customer.phone"
                placeholder="+7 123 456-78-90"
                class="w-full"
              />
            </UFormField>

            <UFormField class="mb-1" label="Email" name="email" required>
              <UInput
                v-model="customer.email"
                placeholder="ivan@example.com"
                class="w-full"
              />
            </UFormField>

            <UFormField class="mb-1" label="Комментарий" name="comment">
              <UTextarea
                v-model="customer.comment"
                placeholder="Ваш комментарий..."
                class="w-full"
              />
            </UFormField>

            <UFormField class="mb-1" name="agree">
              <UCheckbox v-model="customer.agree" />
              <label class="ml-2 text-sm">
                Я соглашаюсь на
                <a
                  href="#privacy"
                  class="text-blue-500 hover:underline"
                  target="_blank"
                  >обработку персональных данных</a
                >
                <span class="text-red-500">*</span>
              </label>
            </UFormField>

            <!-- Кнопки навигации -->
            <div class="flex items-center justify-between">
              <NuxtLink
                to="/questions/step5"
                class="text-gray-600 hover:text-gray-900"
              >
                ← Вернуться назад
              </NuxtLink>
              <UButton
                color="error"
                class="pl-4 pr-4 rounded-4xl"
                @click="onSubmit"
              >
                Получить консультацию
              </UButton>
            </div>
          </UForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuestionStore } from "~/models/composables/stores/useQuestionStore";
import { z } from "zod";
import { useCustomer } from "~/models/composables/stores/useCustomer";

const form = ref({});

const customer = ref({
  fio: "",
  phone: "",
  email: "",
  comment: "",
  agree: false,
});

const store = useQuestionStore();

const toast = useToast();

const { saveCustomer } = useCustomer();

console.log(store.value);

const currentQuestion = store.questions.q6;

const schema = z.object({
  fio: z
    .string()
    .min(2, "ФИО должно содержать минимум 2 символа")
    .max(100, "ФИО не должно превышать 100 символов")
    .regex(
      /^[а-яА-ЯёЁa-zA-Z\s-]+$/,
      "ФИО может содержать только буквы, пробелы и дефисы",
    )
    .min(1, "ФИО обязательно для заполнения"),

  phone: z
    .string()
    .transform((val) => val.replace(/\D/g, "")) // удаляем всё кроме цифр
    .pipe(z.string().max(12, "Телефон должен содержать 10-11 цифр")),

  email: z
    .string()
    .email("Введите корректный email адрес")
    .min(1, "Email обязателен для заполнения"),

  comment: z
    .string()
    .max(500, "Комментарий не должен превышать 500 символов")
    .optional()
    .nullable()
    .transform((val) => (val === null ? "" : val)),

  agree: z
    .boolean()
    .refine(
      (val) => val === true,
      "Необходимо согласие на обработку персональных данных",
    ),
});

const onSubmit = async (event) => {
  toast.add({
    title: "Инфо!",
    description: "Инфо.",
    color: "red",
  });

  try {
    const result = await form.value.validate();

    console.log("VALIDATIONG");
    console.log(result);

    console.log("Отправка данных:", customer.value);
    // store.questions.1
    saveCustomer({
      room_type: store.questions.q1.userAnswer,
      zones: store.questions.q2.userAnswer,
      area: store.questions.q3.userAnswer,
      style: store.questions.q4.userAnswer,
      budget: store.questions.q5.userAnswer,
      name: customer.value.fio,
      phone: customer.value.phone,
      email: customer.value.email,
      comment: customer.value.comment,
      page_url: window.location.origin,
      utm_source: "",
    });
  } catch (err) {
    console.log("Заполните форму:", customer.value);

    toast.add({
      title: "Ошибка!",
      description: "Заполните поля формы.",
      icon: "i-heroicons-check-circle-20-solid",
      color: "red",
    });
  }
};
</script>
