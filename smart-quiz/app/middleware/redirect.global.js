import { useQuestionStore } from "~/models/composables/stores/useQuestionStore";

export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === '/') {
        return navigateTo('/questions/step1')
    }

    if(to.path == '/questions/step1') {
        return;
    }

    const ident = 'q';

    const stepPattern = /\/questions\/step(\d+)/

    const match = to.path.match(stepPattern)

    if (match) {
        let stepId = match[1]

        const store = useQuestionStore();
        
        const currentIdent = ident + stepId;

        let prevIdent = ident + (stepId - 1);

        if(!store.questions[currentIdent]){
            return navigateTo('/questions/step1');
        }

        if(!store.questions[currentIdent].isAnswered) {
            if(!store.questions[prevIdent]){
                return navigateTo('/questions/step1');
            }

            if(!store.questions[prevIdent].isAnswered){
                return navigateTo('/questions/step1');
            } 
        }

    } else {
        return navigateTo('/questions/step1')
    }
})
