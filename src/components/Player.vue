<template>
    <div class="player-wrapper">
        <div class="player-card">
            <div class="player-photo">
                <img :src="photo" :alt="name" :id="name">
            </div>
            <h4 :style="style">{{name}}</h4>
        </div>
       <ProgressiveBar :id="`progress_${name}`" :points="points"/>

       <Control :alvo="alvo" :jogador="jogador" />
    </div>
</template>

<script>
export default {
    props: ["name", "photo", "style", "points", "alvo", "jogador"],
    components: {
      ProgressiveBar: () => import("@/components/ProgressiveBar.vue"),
      Control: () => import("@/components/Control.vue")
    }
}
</script>

<style scoped>
.player-wrapper {
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.player-card {
    background-color: #333232;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem;
    width: 300px;
    height: 400px;
    margin-bottom: 2rem;
}

.player-photo {
    width: 300px;
    padding: 1rem 2rem;
}

.player-card img {
    width: 100%;
    display: block;
    position: relative;
    left: 25px;
}

.player-card h4 {
    font-family: 'Rammetto One', cursive;
    font-size: 2rem;
}


</style>>

</style>
