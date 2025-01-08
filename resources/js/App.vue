<template>
    <nav class="app-vue-element">
      <RouterLink to="/">Overview of books</RouterLink>
    
      <RouterLink to="/createbook">Create a new book</RouterLink>

      <RouterLink to="/authors">Authors</RouterLink>

      <RouterLink to="/createauthor">Create a new author</RouterLink>
    </nav>

    <h1 class="app-vue-element">Hello World! Book collection system</h1>
    
    <main>
      <RouterView />
    </main>
</template>