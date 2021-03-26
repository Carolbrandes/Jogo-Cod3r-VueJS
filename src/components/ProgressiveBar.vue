<template>
   <div class="progress-bar">
            <div class="progress-bar-wrapper">
                <div class="progress-bar-control"></div>
            </div>
            <p :id="id" class="progress-bar-percent">100%</p>
        </div>
</template>

<script>
export default {
  props: ["id"]
}
</script>

<style scoped>
.progress-bar-wrapper {
    position: relative;
    border: 1px solid #fff;
    border-radius: 30px;
    width: 300px;
    height: 40px;
    margin-bottom: 0.5rem;
}

.progress-bar-control {
    position: absolute;
    left: 0;
    top: 0;
    width: 20%;
    height: 40px;
    background-color: #98FB98;
    border-radius: inherit;
}

.progress-bar-percent {
    color: #fff;
    font-size: 1.2rem;
}
</style>
