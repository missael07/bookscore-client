<template>
    <div id="overlay">
        <div class="loader">
            <span class="loader__bar" style="--d: 200ms;"></span>
            <span class="loader__bar" style="--d: 400ms;"></span>
            <span class="loader__bar" style="--d: 600ms;"></span>
            <span class="loader__bar" style="--d: 800ms;"></span>
            <span class="loader__bar" style="--d: 1000ms;"></span>
        </div>
    </div>
</template>

<style scoped>
#overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    z-index: 9999; /* Asegura que el overlay esté por encima de otros elementos */
}
.loader {
    display: inline-flex;
    align-items: center;
    column-gap: 5px;
    position: absolute;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      z-index: 1;
      -webkit-transform: translate3d(0, -50%, 0);
      -moz-transform: translate3d(0, -50%, 0);
      -o-transform: translate3d(0, -50%, 0);
      -ms-transform: translate3d(0, -50%, 0);
      transform: translate3d(0, -50%, 0);
      text-align: center;
      border-radius: 50%;
      width: 45px;
      height: 45px;
      top: 50%; 
}

.loader__bar{
    display: inline-block;
    width: 3px;
    height: 10px;
    background-color: #2c3e50;
    opacity: .5;
    border-radius: 10px;
    animation: scale-up 1000ms var(--d) linear infinite;
}

.loader__bar:nth-child(even){
    height: 25px;
}

.loader__bar:nth-child(3){
    height: 40px;
}

@keyframes scale-up {
    25%{
        opacity: 1;
        scale: 1 1.5;
    }
    50%{
        scale: 1;
    }
}
</style>