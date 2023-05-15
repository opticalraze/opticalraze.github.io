<template>
    <div class="plaque">
        <img src="/logo.svg" alt="Optical Raze">
        <h6>Developed by <b>Optical Raze</b></h6>
    </div>
</template>

<style scoped>
.plaque {
  @apply block w-24 bg-black p-4 text-white text-center border border-[#8A6E2F] rounded-lg hover:brightness-50 transition-all duration-300;
  background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
}
.plaque h6 {
  font-size: .5rem;
}
</style>