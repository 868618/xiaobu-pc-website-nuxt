<template>
  <div class="index">
    <main class="h-458 w-full bg-[url('~/assets/main.png')] bg-cover flex items-center" id="product">
      <section class="container mx-auto flex">
        <section class="w-741 grid grid-cols-1 gap-y-50">
          <h1 class="text-67 text-white font-bold text-nowrap">{{ $t("mainTitle") }}</h1>

          <article class="text-20 text-white leading-normal inline-block">
            {{ $t("mainArticle") }}
          </article>

          <ShowMoreBtn />
        </section>

        <section class="flex-1 relative">
          <img src="~/assets/robot.png" class="w-425 absolute -top-150 right-0" alt="" />
        </section>
      </section>
    </main>

    <main class="h-458 bg-white flex items-center" id="solution">
      <section class="container mx-auto flex relative">
        <section class="grid grid-cols-1 gap-y-50">
          <h1 class="text-60 font-bold text-nowrap">{{ $t("team") }}</h1>

          <article class="text-19 leading-normal inline-block max-w-374 text-[#4D4D57]">
            {{ $t("teamDesc") }}
          </article>

          <ShowMoreBtn black />
        </section>

        <section class="flex-1">
          <img src="~/assets/panel.png" class="w-600 absolute bottom-0 right-0 translate-y-2/3" alt="" />
        </section>
      </section>
    </main>

    <main class="h-600 w-full bg-[url('~/assets/main.png')] bg-cover" id="trade">
      <section class="container mx-auto flex gap-x-100 pt-250">
        <div>
          <img src="~/assets/machine.png" class="w-425 rounded-[15px]" alt="" />
        </div>

        <div class="flex-1 inline-flex justify-center">
          <div>
            <section class="w-540 grid grid-cols-1 gap-y-30">
              <h1 class="text-67 text-white font-bold text-nowrap">{{ $t("jiance") }}</h1>

              <article class="text-20 text-white leading-normal inline-block">
                {{ $t("jianceDesc") }}
              </article>

              <div>
                <ShowMoreBtn />
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>

    <main class="bg-white pt-150" id="company">
      <div class="container mx-auto">
        <h1 class="text-59 text-black font-bold leading-59">{{ $t("fangan") }}</h1>

        <p class="text-19 text-[#6A6A6A] leading-19 mt-20">{{ $t("fanganDesc") }}</p>

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

      <div class="container mx-auto bg-[#CDE9F4] h-296 mt-100 flex items-center justify-center px-80">
        <section class="w-full">
          <h2 class="text-40 font-bold text-[#000] leading-40">
            {{ $t("title") }}

            <ShowMoreBtn black class="float-right" :text="$t('registration')" />
          </h2>

          <p class="text-19 text-[#4D4D57] mt-20 max-w-600">
            {{ $t("indexDesc") }}
          </p>
        </section>
      </div>
    </main>

    <main class="h-567 bg-[url('~/assets/teammate.png')] bg-cover mt-50">
      <section class="flex items-stretch h-full">
        <div class="w-1/2"></div>
        <div class="w-1/2 flex items-center justify-center">
          <section class="inline-flex flex-col items-center">
            <h1 class="text-59 text-white font-bold mb-50">{{ $t("team") }}</h1>
            <ShowMoreBtn white-circle />
          </section>
        </div>
      </section>
    </main>
  </div>
</template>

<style></style>
