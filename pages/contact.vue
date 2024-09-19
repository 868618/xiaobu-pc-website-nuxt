<template>
  <main class="h-458 w-full bg-[url('~/assets/main.png')] bg-cover">
    <div class="container mx-auto flex h-full">
      <section class="w-1/2 h-full flex items-center">
        <h1 class="text-white font-bold text-70">
          {{ $t("contact") }}
        </h1>
      </section>

      <section class="w-1/2 h-full flex justify-center">
        <div class="h-1248 w-550 mt-229 shadow-2xl bg-white p-50">
          <h1 class="text-35 font-bold text-[#000] leading-50">
            {{ $t("contactTeam") }}
          </h1>

          <form>
            <ul>
              <li class="h-60 border-b border-[#4D4D57] flex items-center mb-10">
                <b class="text-[#6A6A6A] text-16 text-right"> {{ $t("lastName") }}*</b>
                <input type="text" class="flex-1 outline-none peer pl-10" v-model="data.lastName" />
              </li>

              <li class="h-60 border-b border-[#4D4D57] flex items-center mb-10">
                <b class="text-[#6A6A6A] text-16 text-right">{{ $t("firstName") }}*</b>
                <input type="text" class="flex-1 outline-none peer pl-10" v-model="data.firstName" />
              </li>

              <li class="h-60 border-b border-[#4D4D57] flex items-center mb-10">
                <b class="text-[#6A6A6A] text-16 text-right"> {{ $t("email") }}*</b>
                <input type="email" class="flex-1 outline-none peer pl-10" v-model="data.email" />
              </li>

              <li class="h-60 border-b border-[#4D4D57] flex items-center mb-10">
                <b class="text-[#6A6A6A] text-16 text-right">{{ $t("phone") }}*</b>
                <input type="text" class="flex-1 outline-none peer pl-10" v-model="data.phone" />
              </li>

              <li class="h-60 border-b border-[#4D4D57] flex items-center mb-10">
                <b class="text-[#6A6A6A] text-16 text-right"> {{ $t("job") }}*</b>
                <input type="text" class="flex-1 outline-none peer pl-10" v-model="data.title" />
              </li>

              <li class="h-60 border-b border-[#4D4D57] flex items-center mb-10">
                <b class="text-[#6A6A6A] text-16 text-right">{{ $t("country") }}*</b>
                <input type="text" class="flex-1 outline-none peer pl-10" v-model="data.country" />

                <!-- <select class="outline-none flex-1 pl-10" v-model="data.country">
                  <option value="china">中国</option>
                  <option value="japan">日本</option>
                </select> -->
              </li>

              <li class="h-60 border-b border-[#4D4D57] flex items-center mb-10">
                <b class="text-[#6A6A6A] text-16 text-right">{{ $t("area") }}*</b>
                <input type="text" class="flex-1 outline-none peer pl-10" v-model="data.area" />

                <!-- <select class="outline-none flex-1 pl-10" v-model="data.area">
                  <option value="volvo">北京</option>
                  <option value="saab">上海</option>
                  <option value="opel">南京</option>
                </select> -->
              </li>

              <li class="h-60 border-b border-[#4D4D57] flex items-center mb-10">
                <b class="text-[#6A6A6A] text-16 text-right">{{ $t("employees") }}*</b>

                <input type="text" class="flex-1 outline-none peer pl-10" v-model="data.employees" />
              </li>

              <li class="h-60 border-b border-[#4D4D57] flex items-center mb-10">
                <b class="text-[#6A6A6A] text-16 text-right">{{ $t("industry") }}*</b>

                <input type="text" class="flex-1 outline-none peer pl-10" v-model="data.trade" />
              </li>

              <li class="h-60 border-b border-[#4D4D57] flex items-center mb-10">
                <b class="text-[#6A6A6A] text-16 text-right">{{ $t("expect") }}*</b>

                <input type="text" class="flex-1 outline-none peer pl-10" v-model="data.useFor" />
              </li>

              <li class="h-60 flex items-center mb-10 text-[#4D4D57] text-11 mt-30">
                {{ $t("desc") }}
              </li>

              <li class="h-60 text-[#666668] text-12 flex items-center select-none">
                <input
                  type="checkbox"
                  id="subscribe"
                  class="cursor-pointer"
                  name="subscribe"
                  :checked="data.checked"
                  disabled
                />
                <label class="ml-10 cursor-pointer" for="subscribe">{{ $t("agree") }}</label>
              </li>

              <li class="h-38 mt-30">
                <div
                  @click="submit"
                  class="w-full h-full border-2 border-[#4B7FE5] rounded-full flex items-center justify-center text-[#4B7FE5] text-13 cursor-pointer hover:opacity-75 select-none"
                >
                  {{ $t("submit") }}
                </div>
              </li>
            </ul>
          </form>
        </div>
      </section>
    </div>
  </main>

  <main>
    <section class="container mx-auto pt-100 pb-300">
      <div class="w-1/2 text-[#000]">
        <h1 class="font-bold text-40">{{ $t("title") }}</h1>
        <div v-html="$t('articleHtml')"></div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
type IData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string | number;
  title: string;
  country: string;
  area: string;
  employees: string | number;
  trade: string;
  useFor: string;
  checked: boolean;
};

const data = reactive<IData>({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  title: "",
  country: "",
  area: "",
  employees: "",
  trade: "",
  useFor: "",
  checked: true,
});

const submit = async () => {
  const maps = new Map([
    ["firstName", "请输入姓"],
    ["lastName", "请输入名"],
    ["email", "请输入邮箱"],
    ["phone", "请输入电话号码"],
    ["title", "请输入职称"],
    ["country", "请输入国家"],
    ["area", "请输入州/地区"],
    ["employees", "请输入员工数量"],
    ["trade", "请输入行业"],
    ["useFor", "请输入您预期应用"],
  ]);

  for (const [k, v] of Object.entries(data)) {
    if (!v) {
      alert(maps.get(k));
      break;
    }
  }

  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });

  const res = await $fetch("/api/collect", {
    method: "POST",
    body: data,
  });

  loading.close();

  console.log("res", res);
};
</script>
