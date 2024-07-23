<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div class="form-group">
    <label for="email">Email</label>
    <input
      id="email"
      type="email"
      placeholder="you@example.com"
      name="email"
      class="form-input"
    />
  </div>

  <div class="form-group">
    <label for="password">Password</label>
    <input
      id="password"
      type="password"
      placeholder="password"
      name="password"
      class="form-input"
    />
  </div>

  <button type="submit" class="submit-button">Submit</button>
</template>
