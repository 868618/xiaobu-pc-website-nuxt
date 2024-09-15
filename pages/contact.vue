<template>
  <main class="h-458 w-full bg-[url('~/assets/main.png')] bg-cover">
    <div class="container mx-auto flex h-full">
      <section class="w-1/2 h-full flex items-center">
        <h1 class="text-white font-bold text-70">联系销售人员</h1>
      </section>

      <section class="w-1/2 h-full flex justify-center">
        <div class="h-1248 w-550 mt-229 shadow-2xl bg-white p-50">
          <h1 class="text-35 font-bold text-[#000] leading-50">与我们的现货销售团队取得联系</h1>

          <form>
            <ul>
              <li class="h-60 border-b border-[#4D4D57] flex items-center mb-10">
                <b class="text-[#6A6A6A] text-16 text-right">名*</b>
                <input type="text" class="flex-1 outline-none peer pl-10" v-model="data.lastName" />
              </li>

              <li class="h-60 border-b border-[#4D4D57] flex items-center mb-10">
                <b class="text-[#6A6A6A] text-16 text-right">姓*</b>
                <input
                  type="text"
                  class="flex-1 outline-none peer pl-10"
                  v-model="data.firstName"
                />
              </li>

              <li class="h-60 border-b border-[#4D4D57] flex items-center mb-10">
                <b class="text-[#6A6A6A] text-16 text-right">公司电子邮箱*</b>
                <input type="email" class="flex-1 outline-none peer pl-10" v-model="data.email" />
              </li>

              <li class="h-60 border-b border-[#4D4D57] flex items-center mb-10">
                <b class="text-[#6A6A6A] text-16 text-right">电话号码*</b>
                <input type="text" class="flex-1 outline-none peer pl-10" v-model="data.phone" />
              </li>

              <li class="h-60 border-b border-[#4D4D57] flex items-center mb-10">
                <b class="text-[#6A6A6A] text-16 text-right">职称*</b>
                <input type="text" class="flex-1 outline-none peer pl-10" v-model="data.title" />
              </li>

              <li class="h-60 border-b border-[#4D4D57] flex items-center mb-10">
                <b class="text-[#6A6A6A] text-16 text-right">国家*</b>

                <select class="outline-none flex-1 pl-10" v-model="data.country">
                  <option value="china">中国</option>
                  <option value="japan">日本</option>
                </select>
              </li>

              <li class="h-60 border-b border-[#4D4D57] flex items-center mb-10">
                <b class="text-[#6A6A6A] text-16 text-right">州/地区*</b>

                <select class="outline-none flex-1 pl-10" v-model="data.area">
                  <option value="volvo">北京</option>
                  <option value="saab">上海</option>
                  <option value="opel">南京</option>
                </select>
              </li>

              <li class="h-60 border-b border-[#4D4D57] flex items-center mb-10">
                <b class="text-[#6A6A6A] text-16 text-right">员工数量*</b>

                <input
                  type="text"
                  class="flex-1 outline-none peer pl-10"
                  v-model="data.employees"
                />
              </li>

              <li class="h-60 border-b border-[#4D4D57] flex items-center mb-10">
                <b class="text-[#6A6A6A] text-16 text-right">行业*</b>

                <input type="text" class="flex-1 outline-none peer pl-10" v-model="data.trade" />
              </li>

              <!-- <li class="h-60 border-b border-[#4D4D57] flex items-center mb-10">
                <b class="text-[#6A6A6A] text-16 text-right">用例*</b>

                <input type="text" class="flex-1 outline-none peer pl-10" v-model="data.useCase" />
              </li> -->

              <li class="h-60 border-b border-[#4D4D57] flex items-center mb-10">
                <b class="text-[#6A6A6A] text-16 text-right">您预期应用于什么*</b>

                <input type="text" class="flex-1 outline-none peer pl-10" v-model="data.useFor" />
              </li>

              <li class="h-60 flex items-center mb-10 text-[#4D4D57] text-11 mt-30">
                小布公司致力于保护你的隐私。我们不会与任何第三方共享您的数据。我们使用您提供的信息向您发送产品新闻和更新、活动信息和其它公告。您可以随时取消订阅这些通讯。有关更多信息，请查看我们的隐私政策。
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
                <label class="ml-10 cursor-pointer" for="subscribe">我同意接收公司的通信。</label>
              </li>

              <li class="h-38 mt-30">
                <div
                  @click="submit"
                  class="w-full h-full border-2 border-[#4B7FE5] rounded-full flex items-center justify-center text-[#4B7FE5] text-13 cursor-pointer hover:opacity-75 select-none"
                >
                  提交
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
        <h1 class="font-bold text-40">使用小布开始您的旅程</h1>
        <div class="text-16 max-w-612 leading-30 mt-60 block">
          小布疫病检测预警机器人对多种动物疫病实时监测，通过有效的风险预警助力动物疫病的防控。
          <br />
          一、智能引领 <br />
          应用于实验室、养殖场、疫苗生产车间等场景，底盘采用SLAM技术，可进行多地图、多位点导航，自主规划路线，主动避障行走，精准定位。<br />
          二、自动采样 <br />
          利用生物气溶胶采样技术，每分钟空气采集量不低于300
          L,100倍浓缩富集于3ml液体样本，采用机械手旋盖加样，采样与加样过程全自动化。
          <br />
          三、一站式检测预警
          <br />
          核酸提取、荧光定量检测、数据分析一站式服务，30分钟内报告检测结果，一次检测可覆盖3种疫病病原，多任务定点定时自动执行，为用户提供定制化全方位疫病检测预警。
          <br />
          四、智能交互
          <br />
          利用SDK提供的接口与机器人底盘交互，网络技术与机器人通信，基于安卓系统的计算和控制软件，实现多模块的智能交互。
           
          <br />

          <p class="mt-50"><b>如有疑问</b>，请联系我们的销售团队。</p>

          <p class="mt-50">
            <b>如需联系我们的媒体团队</b>，请参阅
            <span class="underline cursor-pointer">媒体问询</span>。
          </p>
        </div>
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
  // useCase: string;
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

const submit = () => {
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

  // const isAllOk = Object.values(data).every((i) => Boolean(i));
  // console.log("AT-[ isAllOk &&&&&********** ]", isAllOk);

  for (const [k, v] of Object.entries(data)) {
    if (!v) {
      alert(maps.get(k));
      break;
    }
  }

  // Object.entries(data).find(([k, v]) => {
  //   if (!v) {
  //     alert(maps.get(k));
  //   }
  //   return v;
  // });
};
</script>
