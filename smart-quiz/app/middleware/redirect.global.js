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
// return;
    if (match) {
        let stepId = match[1]
        console.log("MATCH");

        const store = useQuestionStore();
        
        const currentIdent = ident + stepId;

        let prevIdent = ident + (stepId - 1);

        if(!store.questions[currentIdent]){
            console.log("NOT EXISTS STEP " + stepId);
            return navigateTo('/questions/step1');
        }

        if(!store.questions[currentIdent].isAnswered) {
            if(!store.questions[prevIdent]){
            console.log("NOT EXISTS STEP " + stepId);
                return navigateTo('/questions/step1');
            }

            if(!store.questions[prevIdent].isAnswered){
                console.log("NOT EXISTS STEP " + stepId);
                return navigateTo('/questions/step1');
            } 
        } else {
            console.log("UNSWERED");
        }

        // const questionsKeys = Object.keys(store.questions);
        // const questionsCount = Object.keys(store.questions).length;

        // if(stepId > questionsCount) {
        //     stepId = questionsCount;
        // }

        // for(let question of questionsKeys) {
        //     console.log(question);
        //     console.log(store.questions[question]);
        // }
    } else {
            console.log("NAVIGATE ON NO MATCH");

        return navigateTo('/questions/step1')
    }
})
