<template>
    <div class="flex items-center opacity-50 h-screen">
        <div class="cube">
            <div class="face front bg-red-400"></div>
            <div class="face back bg-red-400"></div>
            <div class="face left bg-green-400"></div>
            <div class="face right bg-green-400"></div>
            <div class="face top bg-blue-400"></div>
            <div class="face bottom bg-blue-400"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CubeAnimation",
};
</script>

<style scoped>
.cube {
    position: relative;
    width: 400px;
    height: 400px;
    transform-style: preserve-3d;
    animation: rotateCube 10s infinite linear;
}

.face {
    position: absolute;
    width: 400px;
    height: 400px;
    border: 4px solid rgba(255, 255, 255, 0.8);
}

.front {
    transform: rotateY(0deg) translateZ(200px);
}

.back {
    transform: rotateY(180deg) translateZ(200px);
}

.left {
    transform: rotateY(-90deg) translateZ(200px);
}

.right {
    transform: rotateY(90deg) translateZ(200px);
}

.top {
    transform: rotateX(90deg) translateZ(200px);
}

.bottom {
    transform: rotateX(-90deg) translateZ(200px);
}

@keyframes rotateCube {
    0% {
        transform: rotateX(0deg) rotateY(0deg);
    }
    100% {
        transform: rotateX(360deg) rotateY(360deg);
    }
}
</style>