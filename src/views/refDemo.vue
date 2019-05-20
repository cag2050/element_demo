<template>
    <div>
        <div ref="A" @click="click" class="init_class">A</div>
        <div ref="B" @click="click" class="init_class">B</div>
        <div ref="C" @click="click" class="init_class">C</div>
        <div ref="D" @click="click" class="init_class">D</div>
    </div>
</template>

<script>
    export default {
        name: 'refDemo',
        methods: {
            click () {
                this.$refs.A.className = 'success_class'
                this.$refs.B.className = 'error_class'
                console.log(this.$refs.A.className)
            }
        }
    }
</script>

<style scoped>
    .init_class {
        background-color: white;
    }
    .success_class {
        background-color: rgb(137, 231, 137);
    }
    .error_class {
        background-color: rgb(255, 137, 137);
    }

</style>
