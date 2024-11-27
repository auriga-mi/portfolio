<template>
  <header>
    <div class="nav">
      <n-menu :options="menuOptions" mode="horizontal" exact/>
    </div>
    <RouterView />
  </header>
</template>

<script>
import { defineComponent, h } from "vue";
import { NIcon } from "naive-ui";
import { RouterLink } from "vue-router";
import {
  Home as HomeIcon,
  Hammer as WorkIcon,
  Mail as ContactIcon
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: "home"
        }
      },
      { default: () => "About me" }
    ),
    key: "go-home",
    icon: renderIcon(HomeIcon)
  },
  {
    label: () => h(
      RouterLink,
      {
        to: {
          path: "/work"
        }
      },
      { default: () => "My work" }
    ),
    key: "go-work",
    icon: renderIcon(WorkIcon)
  },
  {
    label: () => h(
      RouterLink,
      {
        to: {
          path: "/contact"
        }
      },
      { default: () => "Contact" }
    ),
    key: "go-contact",
    icon: renderIcon(ContactIcon)
  }
];

export default defineComponent({
  setup() {
    return {
      menuOptions
    };
  }
});
</script>