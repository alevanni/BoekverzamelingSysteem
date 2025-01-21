<template>
  <nav class="app-vue-element app-nav">
    <RouterLink to="/">Overview of books</RouterLink>

    <RouterLink to="/createbook">Create a new book</RouterLink>

    <RouterLink to="/authors">Authors</RouterLink>

    <RouterLink to="/createauthor">Create a new author</RouterLink>
  </nav>



  <main class="app-vue-element">
    <h1>Hello World! Book collection system</h1>
    <RouterView />
  </main>
</template>