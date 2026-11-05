<script setup lang="ts">
function screenSizeLarge()
{
    if (window.innerWidth > 600) {
        return true;
    }
    else {
        return false;
    }
}
</script>

<template>
    <div v-if="screenSizeLarge()" class="flex font-garamond h-screen bg-taupe-200 items-center">
        <div class="grid grid-cols-8 g-5 w-screen">
            <div></div>
            <div class="flex justify-left col-span-3">
                <p class="pl-4 pb-4 text-5xl">Eemeli Myllymäki</p>
            </div>
            <div class="sm:col-span-1"></div>
            <div class="flex text-5xl col-span-2">
                <div class="flex pr-10 hover:text-taupe-700"><a href="https://www.linkedin.com/in/eemeli-myllym%C3%A4ki-256213231/"><i class="devicon-linkedin-plain"></i></a></div>
                <div class="flex pr-10 hover:text-taupe-700"><a href="https://github.com/PohjanPojka"><i class="devicon-github-original"></i></a></div>
            </div>
            <div></div>

            <div></div>
            <div class="h-px col-span-3 bg-taupe-500"></div>
            <div class="col-span-4"></div>
            <div></div>
            <div class="col-span-3">
                <p class="pl-4 pt-4 text-md font-thin italic">opiskelija</p>
            </div>
            <div class="col-span-4"></div>
            <div class="col-span-8 bg-taupe-200"></div>
            <div></div>
            <div class="flex col-span-3 p-4">
                <a class="pr-4 hover:underline text-green-600" href="https://www.eemelimyllymaki.fi">eemelimyllymaki.fi</a>
                <div class="w-px bg-taupe-500"></div>
                <a class="pl-4 hover:underline text-green-600" href="mailto:contact@eemelimyllymaki.fi">contact@eemelimyllymaki.fi</a>
            </div>
        </div>
    </div>
    <div v-if="!screenSizeLarge()" class="font-garamond h-screen w-screen bg-taupe-200">
        <div class="h-screen w-screen min-w-0">
            <div class="flex justify-center min-w-screen"><p class="pt-50 text-5xl text-center min-w-screen">Eemeli Myllymäki</p></div>
            <div class="p-4"><div class="h-px  bg-taupe-500"></div></div>
            <p class="pl-4 text-lg font-thin italic">opiskelija</p>
            <div class="flex justify-center p-4">
                <a class="pr-4 hover:underline text-green-600" href="https://www.eemelimyllymaki.fi">eemelimyllymaki.fi</a>
                <div class="w-px bg-taupe-500"></div>
                <a class="pl-4 hover:underline text-green-600" href="mailto:contact@eemelimyllymaki.fi">contact@eemelimyllymaki.fi</a>
            </div>
            <div class="flex pt-50 text-5xl text-center justify-center">
                <div class="flex pr-5 hover:text-taupe-700"><a href="https://www.linkedin.com/in/eemeli-myllym%C3%A4ki-256213231/"><i class="devicon-linkedin-plain"></i></a></div>
                <div class="flex pl-5 hover:text-taupe-700"><a href="https://github.com/PohjanPojka"><i class="devicon-github-original"></i></a></div>
            </div>
        </div>
    </div>
</template>
