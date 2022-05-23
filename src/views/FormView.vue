<script setup lang="ts">
import {
  ButtonGroup,
  Button,
  Heading1,
  FormFieldset,
  FormFieldsetLegend,
  FormLabel,
  FormField,
  Textbox,
} from "@utrecht/component-library-vue";
</script>

<template>
  <form method="post">
    <Heading1>Schorsing melden</Heading1>
    <FormFieldset>
      <FormFieldsetLegend>Leerling</FormFieldsetLegend>
      <FormField>
        <FormLabel>Voornaam</FormLabel>
        <Textbox />
      </FormField>
      <FormField>
        <FormLabel>Achternaam</FormLabel>
        <Textbox />
      </FormField>
    </FormFieldset>
    <ButtonGroup>
      <Button type="submit" appearance="primary-action-button"
        >Verzenden</Button
      >
    </ButtonGroup>
  </form>
</template>

<style></style>
