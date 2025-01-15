<script setup lang="ts">
//import { deleteReview } from "../store";
import { Review } from "../../types";
import { fetchAuthors, getAuthorById } from "../../authors/store";
import { router } from "../../../router/index";
import axios from "axios";
import { Ref, ref } from "vue";
defineProps<{ review: Review }>();


</script>

<template>

    <h2 class="title">{{ review.vote }}</h2>


    <p>
        {{ review.body }}
    </p>

</template>