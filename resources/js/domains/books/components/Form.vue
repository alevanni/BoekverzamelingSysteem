<script setup lang="ts">
import { ref } from 'vue'
import { fetchAuthors, getAllAuthors } from '../../authors/store';
const props = defineProps(['book']);
const bookCopy = ref({...props.book});
fetchAuthors();
const emit = defineEmits(['bookSubmit']);

const submitForm = () => {
    emit('bookSubmit', bookCopy.value)
}
</script>

<template>
    <form @submit.prevent="submitForm">
       <table>
         <tr> <td><label for="author">Author</label></td> <td>
            <select v-model="bookCopy.author_id"  id="author">
                  <option v-for="author in getAllAuthors()" :value="author.id">
                      {{ author.name }}
                  </option>
            </select>
        
        </td></tr>
         <tr> <td><label for="title">Title</label></td> <td><input v-model=bookCopy.title id="title" type="text" ></td></tr>
         <tr> <td><label for="plot">Plot</label></td> <td><input v-model=bookCopy.plot id="plot" type="textarea" style="height:200px; width:400px" ></td></tr>
         <tr><td><label for="submit">Submit</label></td><td><input id="submit" type="submit" :value=" book.title == '' ? 'Add book' : 'Edit Book' "></td></tr>
       </table>

    </form>
</template>