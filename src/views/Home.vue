<script setup>
import { ref } from 'vue';
import { useDrag } from '@vueuse/gesture'
import { useMotionProperties, useSpring } from '@vueuse/motion'
const demo = ref(null)

// Get the element.
const demoElement = ref()

// Bind to the element or component reference
// and init style properties that will be animated.
const { motionProperties } = useMotionProperties(demo, {
  cursor: 'grab',
  x: 0,
  y: 0,
})

// Bind the motion properties to a spring reactive object.
const { set } = useSpring(motionProperties)

// Animatable values will be animated, the others will be changed immediately.
const eventHandler = () => set({ x: 250, y: 200, cursor: 'default' })

// Find more about `set()` on the "Motion Integration" page

const dragHandler = ({ movement: [x, y], dragging }) => {
  if (!dragging) {
    set({ x: 0, y: 0, cursor: 'grab' })
    return
  }

  set({
    cursor: 'grabbing',
    x,
    y,
  })
}

// Composable usage
useDrag(dragHandler, {
  domTarget: demo,
})
</script>

<template>
    <section class="h-screen w-full">
        <div class="px-8 container max-w-5xl mx-auto h-full w-full  flex items-center justify-center">
            <div ref="demo" class="animate__animated animate__fadeIn text-center sm:text-left">
                <h1 class="text-6xl lg:text-8xl font-black text-black text-outline-white">{{ $t("home.heading") }}</h1>
                <h2 class="text-4xl lg:text-6xl font-black text-white">{{ $t("home.subheading") }}</h2>
            </div>
        </div>
    </section>
</template>