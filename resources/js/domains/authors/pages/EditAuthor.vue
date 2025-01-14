<script setup lang="ts">
import { useRoute } from 'vue-router';
import axios from 'axios';
import { ref, Ref } from 'vue';
import { Author } from '../../types';
import { router } from '../../../router';
import AuthorForm from '../components/AuthorForm.vue';
import { fetchAuthors, getAuthorById, updateAuthor } from '../store';

const errors = ref<Ref<{}>>();

fetchAuthors();

const authorToEdit = getAuthorById(+useRoute().params.id);

const editAuthor = async (author: Author) => {
    console.log(author.id);
    try {
         await updateAuthor(author);
         router.push('/authors');
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
<h1>Edit author</h1>
<AuthorForm v-if="authorToEdit && authorToEdit.name != 'Anonymous'" :author="authorToEdit" @author-submit="editAuthor"></AuthorForm>
<p v-if="authorToEdit.name == 'Anonymous'">You cannot edit the placeholder author</p>
<ul class="errors">
        <li  v-for="(error, key) in errors">{{ key }}: 

            <li class="validation-error" v-for="item in error">{{ item }}</li>
        </li>
    </ul>
</template>