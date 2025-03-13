export class VolumeController {
    constructor(device) {
        this.device = device;
    }

    increaseVolume() {
        this.device.increaseVolume();
    }

    decreaseVolume() {
        this.device.decreaseVolume();
    }
}

export class AdvancedVolumeController extends VolumeController {
    mute() {
        this.device.mute();
    }
}
