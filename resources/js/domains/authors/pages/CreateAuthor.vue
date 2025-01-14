<script setup lang="ts">
import { ref, Ref } from 'vue';
import { router } from '../../../router';
import axios from 'axios';
import { addAuthor } from '../store';
import AuthorForm from '../components/AuthorForm.vue';
const newAuthor = ref({name: ""});

const errors: Ref<{}> = ref({});

const submitAuthor = async( author: any) => {
    try {
         await addAuthor(author);
        
        
         router.push('/');
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            //console.log(error.response?.data.errors);
            errors.value = {...error.response?.data.errors};
            //console.log(errors);
        }
       
        
    }
}
</script>

<template>
<h1>Create here a new author</h1>
<AuthorForm :author="newAuthor" @authorSubmit="submitAuthor"></AuthorForm>
<ul class="errors">
        <li  v-for="(error, key) in errors">{{ key }}: 

            <li class="validation-error" v-for="item in error">{{ item }}</li>
        </li>
    </ul>

</template>