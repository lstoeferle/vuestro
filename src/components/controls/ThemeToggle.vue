<script setup lang="ts">
import IcSun from "~icons/ri/sun-fill"
import IcMoon from "~icons/ri/moon-clear-fill"
import { useTheme } from "@/composables/useTheme"

const { isDark } = useTheme()
</script>

<template>
  <label class="btn btn-ghost swap swap-rotate">
    <input
      v-model="isDark"
      type="checkbox"
    >
    <IcSun class="swap-on fill-current text-yellow-400 w-6 h-6" />
    <IcMoon class="swap-off fill-current text-black w-6 h-6" />
  </label>
</template>
