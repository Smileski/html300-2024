<script setup>
    import { defineProps, ref } from 'vue'

    const props = defineProps({
        id: Number,
        author: String,
        title: String,
        likes: Number,
        category: String,
        excerpt: String
    })

    const likes = ref(props.likes)

    const incerementLikes = () => {
        likes.value++
    }
</script>
<template>
    <div>
        <h2>{{ title }}</h2>
        <p>By: {{ author }}</p>
        <p>Category: {{ category }}</p>
        <p>{{ excerpt }}</p>
        <p>Likes: {{ likes }}</p>
        <button @click="incerementLikes">Like</button>
    </div>
</template>
<style scoped>
.post{
    border: 1px solid #ccc;
    padding: 1rem;
    margin: 1rem 0;
}
</style>
