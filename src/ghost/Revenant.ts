import {Ghost} from './Ghost';
import {HardEvidence} from '../HardEvidence';
import {SoftEvidence} from '../SoftEvidence';

export default class Revenant implements Ghost {
  getName(): string {
    return 'Revenant';
  }

  getAbbreviation(): string {
    return 'R';
  }

  getHardEvidence(): Array<HardEvidence> {
    return [
      HardEvidence.EMF_LEVEL_5,
      HardEvidence.FINGERPRINTS,
      HardEvidence.GHOST_WRITING
    ];
  }

  getSoftEvidence(): Array<SoftEvidence> {
    return [];
  }
}
