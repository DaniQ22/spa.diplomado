<template>
    <div>
        <NavBar />

        <div class="bg-success bg-opacity-25">
            <div class="container p-2">
                <h4>Panel del administracion</h4>
            </div>
        </div>

        <div class="bg-success bg-opacity-25">
            <div class="container">
                <div class="p-1">
                    <div class="bg-white m-2 p-2 rounded-3">

                        <router-view></router-view>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
    name: 'App',
    components: {
        NavBar
    }
}
</script>
