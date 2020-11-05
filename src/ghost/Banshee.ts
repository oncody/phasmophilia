import {Ghost} from './Ghost';
import {HardEvidence} from '../HardEvidence';
import {SoftEvidence} from '../SoftEvidence';

export default class Banshee implements Ghost {
  getName(): string {
    return 'Banshee';
  }

  getAbbreviation(): string {
    return 'B';
  }

  getHardEvidence(): Array<HardEvidence> {
    return [
      HardEvidence.EMF_LEVEL_5,
      HardEvidence.FINGERPRINTS,
      HardEvidence.FREEZING_TEMPERATURES
    ];
  }

  getSoftEvidence(): Array<SoftEvidence> {
    return [
      SoftEvidence.EARLY_HUNT
    ];
  }
}
