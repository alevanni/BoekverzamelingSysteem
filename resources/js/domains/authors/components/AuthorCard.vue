<script setup lang="ts">

import { Author } from '../../types';
import { fetchAuthors, getAuthorById } from '../store';
import { router } from '../../../router/index';
import axios from 'axios';
import { Ref, ref } from 'vue';
const props = defineProps<{author: Author}>();



</script>

<template>
    <h2 class="author">{{ author.name }}</h2>
    <button class="delete" > Delete Author </button>
    <RouterLink :to="{name: 'editAuthor', params: { id: author.id }}">Edit Author</RouterLink>
        
</template>