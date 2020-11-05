import {Ghost} from './Ghost';
import {HardEvidence} from '../HardEvidence';
import {SoftEvidence} from '../SoftEvidence';

export default class Phantom implements Ghost {
  getName(): string {
    return 'Phantom';
  }

  getAbbreviation(): string {
    return 'Ph';
  }

  getHardEvidence(): Array<HardEvidence> {
    return [
      HardEvidence.EMF_LEVEL_5,
      HardEvidence.GHOST_ORB,
      HardEvidence.FREEZING_TEMPERATURES
    ];
  }

  getSoftEvidence(): Array<SoftEvidence> {
    return [
      SoftEvidence.TEAMMATE_MANIFESTATION
    ];
  }
}
