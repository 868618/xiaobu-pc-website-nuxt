<template>
  <section v-if="isShow">
    <header class="header container mx-auto h-78 flex items-center justify-between z-10 relative">
      <nav class="left inline-flex">
        <a href="/"><img src="~/assets/logo.png" class="h-54 cursor-pointer" /></a>

        <ul class="flex ml-40 text-[#000] text-14 items-center font-normal">
          <li class="cursor-pointer py-15 text-center w-80" :key="item.key" v-for="item in subNavs">
            <a :href="`/#${item.key}`">{{ item.text }}</a>
          </li>
        </ul>
      </nav>

      <nav class="right h-full">
        <ul class="flex items-center text-14 text-[#000] space-x-40 h-full">
          <li
            v-for="(i, index) in btns"
            :key="i.key"
            class="cursor-pointer"
            :class="index == activeNum && 'bg-[#4B7FE5] px-15 py-5 rounded-2xl text-white'"
            @click="toContactPage(i.key)"
          >
            {{ i.text }}
          </li>

          <li>
            <el-dropdown @command="handleCommand">
              <span class="select-none outline-none border-none text-14 text-[#292D34] group">
                <!-- 中文 -->
                {{ $t("language") }}
                <el-icon
                  class="group-hover:rotate-180 transition-transform ease-in-out duration-300 ml-10"
                  style="width: 10px"
                >
                  <ArrowDownBold style="width: 10px" />
                </el-icon>
              </span>

              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item :command="$t('language')" class="outline-none cursor-pointer">
                    {{ $t("selectLang") }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </li>
        </ul>
      </nav>
    </header>

    <slot />

    <footer class="py-100" id="ability">
      <div class="container mx-auto border-b border-b-1 border-[#6A6A6A] pb-100 flex">
        <section class="left w-1/2">
          <img src="~/assets/logo.png" class="h-54" />
        </section>

        <section class="right w-1/2 inline-flex space-x-200">
          <div>
            <ul class="text-[#666668] text-14 leading-42">
              <li
                v-for="(item, index) in subNavs"
                :key="item.key"
                class="cursor-pointer"
                :class="index == 0 ? 'text-[#4B7FE5]' : ''"
              >
                {{ item.text }}
              </li>
            </ul>
          </div>

          <!-- <div>
            <ul class="text-[#666668] text-14 leading-42">
              <li v-for="item in subNavs" :key="item.key" class="cursor-pointer">
                {{ item.text }}
              </li>
            </ul>
          </div> -->
        </section>
      </div>
    </footer>
  </section>
</template>

<script setup lang="ts">
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from "element-plus";
import { ArrowDownBold } from "@element-plus/icons-vue";

const router = useRouter();
const route = useRoute();
const { locale, t } = useI18n();

const isShow = ref(false);

const hash = computed(() => route.hash.slice(1));

const subNavs = computed(() => [
  {
    text: t("product"),
    key: "product",
  },
  {
    text: t("solution"),
    key: "solution",
  },
  {
    text: t("trade"),
    key: "trade",
  },
  {
    text: t("company"),
    key: "company",
  },

  {
    text: t("ability"),
    key: "ability",
  },
]);

const btns = computed(() => [
  {
    text: t("preferential"),
    key: "preferential",
    active: false,
  },
  {
    text: t("support"),
    key: "support",
    active: false,
  },
  {
    text: t("contact"),
    key: "contact",
    active: true,
  },
]);

onMounted(() => {
  isShow.value = true;
});

const activeNum = computed(() => {
  if (route.path == "/contact") {
    const index = btns.value.findIndex((i) => i.key == hash.value);
    return index > -1 ? index : btns.value.length - 1;
  }

  return -1;
});

const toContactPage = (key: string) => {
  router.push(`/contact#${key}`);
};

const handleCommand = (command: string) => {
  nextTick(() => {
    locale.value = command == "中文" ? "en" : "zh";
  });
};
</script>
