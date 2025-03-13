import { Device } from "./Device.js";

export class Speaker extends Device {
    constructor() {
        super();
        this.volume = 15;
    }

    increaseVolume() {
        this.volume++;
        console.log(`Speaker volume increased to ${this.volume}`);
    }

    decreaseVolume() {
        this.volume--;
        console.log(`Speaker volume decreased to ${this.volume}`);
    }

    mute() {
        this.volume = 0;
        console.log(`Speaker is muted`);
    }
}
