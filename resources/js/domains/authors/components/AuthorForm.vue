<script setup lang="ts">
import { ref } from 'vue';

const { author } = defineProps(['author']);
const authorCopy = ref({ ...author });


const emit = defineEmits(['authorSubmit']);

const submitForm = () => {

    emit('authorSubmit', authorCopy.value)
}

</script>


<template>
    <form class="app-form" @submit.prevent="submitForm">
        <table>
            <tr>
                <td><label for="name">Author Name</label></td>
                <td><input v-model=authorCopy.name id="name" type="text"></td>
            </tr>

            <tr>
                <td><label for="submit">Submit</label></td>
                <td><input id="submit" type="submit" :value="author.name == '' ? 'Add author' : 'Edit author'"></td>
            </tr>
        </table>
    </form>

</template>