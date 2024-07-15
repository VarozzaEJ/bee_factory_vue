
import App from "../App.vue";
import { AppState } from "../AppState.js"
class ClickService {

    mine() {
        AppState.pollen += AppState.clickPower
        console.log("Pollen increasing", AppState.pollen);

    }
    buyClickUpgrade(upgradeName) {
        const foundUpgrade = AppState.clickUpgrades.find((upgrade) => upgrade.name == upgradeName)
        if (AppState.pollen >= foundUpgrade.price) {
            AppState.clickPower += foundUpgrade.clickPower
            console.log(upgradeName, AppState.clickPower);
            AppState.pollen -= foundUpgrade.price
        }
    }

    buyAutoUpgrade(upgradeName) {
        const foundUpgrade = AppState.autoUpgrades.find((upgrade) => upgrade.name == upgradeName)
        if (AppState.pollen >= foundUpgrade.price) {
            foundUpgrade.quantity++
            AppState.autoClickPower += foundUpgrade.multiplier
            AppState.pollen -= foundUpgrade.price
        }
    }

    autoUpgradeTicks() {
        AppState.pollen += AppState.autoClickPower
    }
}

export const clickService = new ClickService()