import { TV } from "./TV.js";
import { Speaker } from "./Speaker.js";
import { VolumeController, AdvancedVolumeController } from "./VolumeController.js";

const tv = new TV();
const speaker = new Speaker();

const tvController = new AdvancedVolumeController(tv);
tvController.increaseVolume();
tvController.decreaseVolume();
tvController.mute();

const speakerController = new VolumeController(speaker);
speakerController.increaseVolume(); 
// speakerController.mute(); // Error: mute is not supported by VolumeController
