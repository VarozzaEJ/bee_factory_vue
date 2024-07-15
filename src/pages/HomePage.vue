<script setup>
import { computed, onMounted, ref } from 'vue'
import { clickService } from '../services/ClickService.js';
import { AppState } from '../AppState.js';
import App from '../App.vue';


const pollen = computed(() => AppState.pollen)
const clickUpgrades = computed(() => AppState.clickUpgrades)
const autoUpgrades = computed(() => AppState.autoUpgrades)
const clickPower = computed(() => AppState.clickPower)
const autoClickPower = computed(() => AppState.autoClickPower)


function mine() {
  clickService.mine()
}

function buyClickUpgrade(upgradeName) {
  clickService.buyClickUpgrade(upgradeName)
}

function buyAutoUpgrade(upgradeName) {
  clickService.buyAutoUpgrade(upgradeName)
}

function autoUpgradeTicks() {
  clickService.autoUpgradeTicks()
}

onMounted(() => {
  setInterval(autoUpgradeTicks, 1000)
})


</script>

<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class=" col-12">
            <h1 class="pacifico bg-warning text-warning-emphasis d-flex justify-content-center m-3 p-3">Bee
              Factory</h1>
          </div>
        </div>
      </div>
    </header>

    <div class="container">
      <div class="row ">
        <div class="col-12 d-flex justify-content-center my-5 py-3">
          <img @click="mine()" src="https://i.pinimg.com/originals/6b/28/d7/6b28d7fb925370efd08537f2cf29be78.png"
            alt="Clickable Flower" class="img-fluid flower-img">
        </div>
      </div>
    </div>
    <div class="row justify-content-center d-flex ">
      <div class="col-7  text-light pacifico text-shadow justify-content-center">
        <div class="row">
          <div class="col-4 d-flex justify-content-center">
            <span class="font-big"><i class="mdi mdi-cursor-pointer"></i>:
              <span class="font-big" id="totalClickPower">{{ clickPower }}</span>
            </span>
          </div>
          <div class="col-4 justify-content-center d-flex text-light pacifico">
            <p class="font-big"><i class="mdi mdi-flower-pollen"></i>:</p>
            <p class="font-big" id="totalFlowerPollen">{{ pollen }}</p>

          </div>
          <div class="col-4 d-flex justify-content-center">
            <span class="font-big"><i class="mdi mdi-timer"></i>:
              <span class="font-big" id="totalIntervalPower">{{ autoClickPower }}</span>
            </span>
          </div>
        </div>
      </div>
      <!-- ANCHOR Upgrade Buttons -->
      <div class="col-6  flex-column bee-yellow">
        <div class="row">
          <div class="col-3 d-flex flex-column justify-content-start">

            <button :disabled="AppState.pollen <= 50" @click="buyClickUpgrade('Bee')" class="btn btn-warning my-3"><span
                id="beePrice">50</span> <i class="mdi mdi-flower-pollen"></i></button>
            <button :disabled="AppState.pollen <= 250" @click="buyClickUpgrade('Hive')"
              class="btn btn-warning my-3"><span id="hivePrice">250</span>
              <i class="mdi mdi-flower-pollen"></i></button>
          </div>
          <div class="col-3">
            <p class="py-3">Bee +1<i class="mdi mdi-bee"></i></p>
            <p class="py-3">Hive +5<i class="mdi mdi-beehive-outline"></i></p>
          </div>
          <div class="col-3 d-flex flex-column">
            <button :disabled="AppState.pollen <= 1000" @click="buyAutoUpgrade('Superbee')"
              class="btn btn-danger my-3"><span id="superbeePrice">1k</span>
              <i class="mdi mdi-flower-pollen"></i></button>
            <button :disabled="AppState.pollen <= 5000" @click="buyAutoUpgrade('Queenbee')"
              class="btn btn-danger my-3"><span id="queenbeePrice">5k</span>
              <i class="mdi mdi-flower-pollen"></i></button>
          </div>
          <div class="col-3 d-flex flex-column justify-content-around">
            <p class="pt-2">SuperBee +20/s<i class="mdi mdi-bee"></i></p>
            <p class="pb-2">QueenBee +30/s<i class="mdi mdi-beehive-outline"></i></p>
          </div>
        </div>
        <!-- ANCHOR Upgrade Counts -->
      </div>
      <div class="col-6 bee-yellow">
        <div class="row">
          <div class="col-6 d-flex flex-column justify-content-between">
            <div class="pacifico mb-2 fs-4">Click Stats</div>

            <div class="d-flex justify-content-between align-items-center mb-3">
              <span class="fs-4 border border-light rounded px-2" id="bee-quantity">0</span>
              <span class="fs-5 ps-4">Bees</span>
              <span class="fs-4"> <i class="mdi mdi-arrow-right"></i></span>
              <span class="fs-4 ms-4 border border-light rounded px-2" id="click-power">0</span>
            </div>

            <div class="d-flex justify-content-between align-items-center mb-3">
              <span class="fs-4 border border-light rounded px-2" id="hive-quantity">0</span>
              <span class="fs-5 ps-4">Hives</span>
              <span class="fs-4"> <i class="mdi mdi-arrow-right"></i></span>
              <span class="fs-4 ms-4 border border-light rounded px-2" id="hive-power">0</span>
            </div>

          </div>

          <div class="col-6 d-flex flex-column justify-content-between">
            <div class="pacifico mb-2 fs-4">Auto Stats</div>

            <div class="d-flex justify-content-between align-items-center mb-3">
              <span class="fs-4 border border-light rounded px-2" id="superbee-quantity">0</span>
              <span class="fs-5 ps-4">SuperBees</span>
              <span class="fs-4"> <i class="mdi mdi-timer"></i></span>
              <span class="fs-4 ms-4 border border-light rounded px-2" id="superbee-power">0</span>
            </div>

            <div class="d-flex justify-content-between align-items-center mb-3">
              <span class="fs-4 border border-light rounded px-2" id="queenbee-quantity">0</span>
              <span class="fs-5 ps-4">QueenBees</span>
              <span class="fs-4"> <i class="mdi mdi-timer"></i></span>
              <span class="fs-4 ms-4 border border-light rounded px-2" id="queenbee-power">0</span>
            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
