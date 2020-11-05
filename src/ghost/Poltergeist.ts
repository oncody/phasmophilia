import {Ghost} from './Ghost';
import {HardEvidence} from '../HardEvidence';
import {SoftEvidence} from '../SoftEvidence';

export default class Poltergeist implements Ghost {
  getName(): string {
    return 'Poltergeist';
  }

  getAbbreviation(): string {
    return 'Po';
  }

  getHardEvidence(): Array<HardEvidence> {
    return [
      HardEvidence.SPIRIT_BOX,
      HardEvidence.FINGERPRINTS,
      HardEvidence.GHOST_ORB
    ];
  }

  getSoftEvidence(): Array<SoftEvidence> {
    return [
      SoftEvidence.OBJECT_MANIPULATION,
      SoftEvidence.LIGHT_EXTINGUISH,
      SoftEvidence.LIGHT_FLICKER,
      SoftEvidence.ELECTRONICS_MANIPULATION
    ];
  }
}
