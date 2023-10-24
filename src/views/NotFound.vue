<template>
    <div>
        <div class="container m-5 text-center mx-auto">
            <div class="">
                <div class="w-100">
                    <p class="text-400">404</p>
                    <p class="text-nf">Page not found</p>
                    <router-link to="/" class="text-volver">Return to home</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.text-400 {
    color: black;
    font-weight: bold;
    font-size: 10rem;
    line-height: 10rem;
}

.text-nf {
    color: black;
}

.text-volve {
    color: black;
    font-weight: bolder;
}
</style>