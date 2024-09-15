<template>
  <div class="index">
    <main
      class="h-458 w-full bg-[url('~/assets/main.png')] bg-cover flex items-center"
    >
      <section class="container mx-auto flex">
        <section class="w-741 grid grid-cols-1 gap-y-50">
          <h1 class="text-67 text-white font-bold text-nowrap">
            小布疫病监测预警机器人
          </h1>

          <article class="text-20 text-white leading-normal inline-block">
            小布疫病检测预警机器人对多种动物疫病实时监测，通过有效的风险预警助力动物疫病的防控。它采用SLAM技术进行自主导航和避障，并利用生物气溶胶采样技术，实现全自动化的采样和加样。
          </article>

          <ShowMoreBtn />
        </section>

        <section class="flex-1 relative">
          <img
            src="~/assets/robot.png"
            class="w-425 absolute -top-150 right-0"
            alt=""
          />
        </section>
      </section>
    </main>

    <main class="h-458 bg-white flex items-center">
      <section class="container mx-auto flex relative">
        <section class="grid grid-cols-1 gap-y-50">
          <h1 class="text-60 font-bold text-nowrap">你的队友，你的工具</h1>

          <article
            class="text-19 leading-normal inline-block max-w-374 text-[#4D4D57]"
          >
            小布机器人在疫病检测中是您的得力助手，集成智能导航、自动采样和一站式检测功能，提供精准高效的动物疫病防控支持，成为用户可靠的伙伴和工具。
          </article>

          <ShowMoreBtn black />
        </section>

        <section class="flex-1">
          <img
            src="~/assets/panel.png"
            class="w-600 absolute bottom-0 right-0 translate-y-2/3"
            alt=""
          />
        </section>
      </section>
    </main>

    <main class="h-600 w-full bg-[url('~/assets/main.png')] bg-cover">
      <section class="container mx-auto flex gap-x-100 pt-250">
        <div>
          <img src="~/assets/machine.png" class="w-425 rounded-[15px]" alt="" />
        </div>

        <div class="flex-1 inline-flex justify-center">
          <div>
            <section class="w-540 grid grid-cols-1 gap-y-30">
              <h1 class="text-67 text-white font-bold text-nowrap">
                一站式智能检测
              </h1>

              <article class="text-20 text-white leading-normal inline-block">
                机器人集成核酸提取、荧光检测与数据分析，30分钟内生成报告，支持多种疫病的同时检测。通过网络技术和安卓系统进行智能交互，提供定制化的疫病检测与预警服务。
              </article>

              <div>
                <ShowMoreBtn />
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>

    <main class="bg-white pt-150">
      <div class="container mx-auto">
        <h1 class="text-59 text-black font-bold leading-59">
          现实世界的解决方案
        </h1>

        <p class="text-19 text-[#6A6A6A] leading-19 mt-20">
          为您的团队提供工具
        </p>

        <section class="grid grid-cols-3 gap-40 mt-100">
          <div class="w-full">
            <img src="~/assets/grid1.png" class="w-full cursor-pointer" />
          </div>
          <div class="w-full">
            <img src="~/assets/grid2.png" class="w-full cursor-pointer" />
          </div>
          <div class="w-full">
            <img src="~/assets/grid3.png" class="w-full cursor-pointer" />
          </div>
          <div class="w-full">
            <img src="~/assets/grid4.png" class="w-full cursor-pointer" />
          </div>
          <div class="w-full">
            <img src="~/assets/grid5.png" class="w-full cursor-pointer" />
          </div>
          <div class="w-full">
            <img src="~/assets/grid6.png" class="w-full cursor-pointer" />
          </div>
        </section>
      </div>

      <div
        class="container mx-auto bg-[#CDE9F4] h-296 mt-100 flex items-center justify-center px-80"
      >
        <section class="w-full">
          <h2 class="text-40 font-bold text-[#000] leading-40">
            使用小布开始您的旅程

            <ShowMoreBtn black class="float-right" text="登记" />
          </h2>

          <p class="text-19 text-[#4D4D57] mt-20 max-w-600">
            小布疫病检测预警机器人对多种动物疫病实时监测，通过有效的风险预警助力动物疫病的防控。
          </p>
        </section>
      </div>
    </main>

    <main class="h-567 bg-[url('~/assets/teammate.png')] bg-cover mt-50">
      <section class="flex items-stretch h-full">
        <div class="w-1/2"></div>
        <div class="w-1/2 flex items-center justify-center">
          <section class="inline-flex flex-col items-center">
            <h1 class="text-59 text-white font-bold mb-50">
              你的队友，你的工具
            </h1>
            <ShowMoreBtn white-circle />
          </section>
        </div>
      </section>
    </main>
  </div>
</template>

<style></style>
