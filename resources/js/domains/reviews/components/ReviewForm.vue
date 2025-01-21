<script setup lang="ts">
import { ref } from 'vue'

const { review } = defineProps(['review']);

const reviewCopy = ref({ ...review });

const emit = defineEmits(['reviewSubmit']);

const submitForm = () => {
    emit('reviewSubmit', reviewCopy.value)
}

</script>

<template>
    <form class="app-form" @submit.prevent="submitForm">
        <table>
            <tr>
                <td><label for="vote">Vote</label></td>
                <td>
                    <input type="number" v-model="reviewCopy.vote" id="vote" min="0" max="10" step="0.1" />

                </td>
            </tr>
            <tr>
                <td><label for="body">Write your review here</label></td>
                <td><textarea v-model=reviewCopy.body id="body" type="textarea" rows="4" cols="50"></textarea></td>
            </tr>
            <tr>
                <td><label for="submit">Submit</label></td>
                <td><input id="submit" type="submit" :value="review.body == '' ? 'Add review' : 'Edit Review'"></td>
            </tr>
        </table>

    </form>

</template>