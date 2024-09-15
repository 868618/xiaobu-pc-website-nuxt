<template>
  <section>
    <header
      class="header container mx-auto h-78 flex items-center justify-between"
    >
      <nav class="left inline-flex">
        <img src="~/assets/logo.png" class="h-54 cursor-pointer" />

        <ul
          class="flex space-x-40 ml-40 text-[#000] text-14 items-center font-normal"
        >
          <li
            class="cursor-pointer py-15 px-5"
            v-for="item in data.subNavs"
            :key="item.key"
          >
            {{ item.text }}
          </li>
        </ul>
      </nav>
      <nav class="right h-full">
        <ul class="flex items-center text-14 text-[#000] space-x-40 h-full">
          <li
            v-for="i in data.btns"
            :key="i.key"
            class="cursor-pointer"
            :class="
              i.active && 'bg-[#4B7FE5] px-15 py-5 rounded-2xl text-white'
            "
          >
            {{ i.text }}
          </li>
        </ul>
      </nav>
    </header>

    <slot />

    <footer class="py-100">
      <div
        class="container mx-auto border-b border-b-1 border-[#6A6A6A] pb-100 flex"
      >
        <section class="left w-1/2">
          <img src="~/assets/logo.png" class="h-54" />
        </section>

        <section class="right w-1/2 inline-flex space-x-200">
          <div>
            <ul class="text-[#666668] text-14 leading-42">
              <li
                v-for="(item, index) in data.subNavs"
                :key="item.key"
                class="cursor-pointer"
                :class="index == 0 ? 'text-[#4B7FE5]' : ''"
              >
                {{ item.text }}
              </li>
            </ul>
          </div>

          <div>
            <ul class="text-[#666668] text-14 leading-42">
              <li
                v-for="item in data.subNavs"
                :key="item.key"
                class="cursor-pointer"
              >
                {{ item.text }}
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  </section>
</template>

<script setup lang="ts">
const data = reactive({
  subNavs: [
    {
      text: "产品",
      key: "products",
    },
    {
      text: "解决方案",
      key: "solution",
    },
    {
      text: "行业",
      key: "trade",
    },
    {
      text: "公司",
      key: "company",
    },
  ],

  btns: [
    {
      text: "合作伙伴的优惠",
      key: "cooperate",
      active: false,
    },
    {
      text: "支持",
      key: "support",
      active: false,
    },
    {
      text: "联系销售人员",
      key: "contact",
      active: true,
    },
  ],
});
</script>

<style lang="scss" scoped>
.header {
  // background-color: red;
}
</style>
