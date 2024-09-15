<template>
  <main class="h-458 w-full bg-[url('~/assets/main.png')] bg-cover">
    <div class="container mx-auto flex h-full">
      <section class="w-1/2 h-full flex items-center">
        <h1 class="text-white font-bold text-70">联系销售人员</h1>
      </section>

      <section class="w-1/2 h-full flex justify-center">
        <div class="h-1248 w-550 mt-229 shadow-2xl bg-white p-50">
          <h1 class="text-35 font-bold text-[#000] leading-50">
            与我们的现货销售团队取得联系
          </h1>

          <form>
            <ul>
              <li
                class="h-60 border-b border-[#4D4D57] flex items-center mb-10"
              >
                <b class="text-[#6A6A6A] text-16 w-120 text-right">名*</b>
                <input type="text" class="flex-1 outline-none peer pl-30" />
              </li>

              <li
                class="h-60 border-b border-[#4D4D57] flex items-center mb-10"
              >
                <b class="text-[#6A6A6A] text-16 w-120 text-right">姓*</b>
                <input type="text" class="flex-1 outline-none peer pl-30" />
              </li>

              <!-- <li
                class="h-60 border-b border-[#4D4D57] flex items-center mb-10 relative"
              >
                <input type="text" class="flex-1 outline-none peer pl-30" />

                <b
                  class="text-[#6A6A6A] text-16 peer-focus:text-red-700 peer-focus:-translate-y-full peer-focus:-bottom-5 peer-focus:left-10 absolute top-1/2 -translate-y-1/2 left-0 duration-100"
                  >姓*</b
                >
              </li> -->

              <li
                class="h-60 border-b border-[#4D4D57] flex items-center mb-10"
              >
                <b class="text-[#6A6A6A] text-16 w-120 text-right"
                  >公司电子邮箱*</b
                >
                <input type="text" class="flex-1 outline-none peer pl-30" />
              </li>

              <!-- <li
                class="h-60 border-b border-[#4D4D57] flex items-center mb-10"
              >
                <b class="text-[#6A6A6A] text-16">公司电子邮箱*</b>
                <input type="text" class="flex-1 pl-10 outline-none" />
              </li> -->

              <li
                class="h-60 border-b border-[#4D4D57] flex items-center mb-10"
              >
                <b class="text-[#6A6A6A] text-16 w-120 text-right">电话号码*</b>
                <input type="text" class="flex-1 outline-none peer pl-30" />
              </li>

              <!-- <li
                class="h-60 border-b border-[#4D4D57] flex items-center mb-10"
              >
                <b class="text-[#6A6A6A] text-16">电话号码*</b>
                <input type="text" class="flex-1 pl-10 outline-none" />
              </li> -->
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
