<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import {
  Document,
  Link,
  Page,
  PageHeader,
  PageFooter,
  PageContent,
} from "@utrecht/component-library-vue";
</script>

<template>
  <Document class="utrecht-theme">
    <Page>
      <PageHeader>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/stories">Stories</RouterLink>
          <RouterLink to="/form">Form</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </PageHeader>
      <PageContent>
        <RouterView />
      </PageContent>
      <PageFooter
        >This page is created with
        <Link href="http://vuejs.org" external>Vue.js</Link> and
        <Link href="https://www.nldesignsystem.nl/" external
          >NL Design System</Link
        >.</PageFooter
      >
    </Page>
  </Document>
</template>

<style src="@utrecht/component-library-vue/dist/style.css"></style>
<style src="@utrecht/design-tokens/dist/index.css"></style>
