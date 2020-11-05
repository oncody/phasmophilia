import {Ghost} from './Ghost';
import {HardEvidence} from '../HardEvidence';
import {SoftEvidence} from '../SoftEvidence';

export default class Yurei implements Ghost {
  getName(): string {
    return 'Yurei';
  }

  getAbbreviation(): string {
    return 'Y';
  }

  getHardEvidence(): Array<HardEvidence> {
    return [
      HardEvidence.GHOST_ORB,
      HardEvidence.GHOST_WRITING,
      HardEvidence.FREEZING_TEMPERATURES
    ];
  }

  getSoftEvidence(): Array<SoftEvidence> {
    return [];
  }
}
