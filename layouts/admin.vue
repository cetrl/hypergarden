<template>
  <div>
    <header>
      <div>
        <h1>Admin</h1>
        <nav>
          <button><NuxtLink to="./">Hypergarden</NuxtLink></button>
        </nav>
      </div>
    </header>

    <main>
      <div>
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>
