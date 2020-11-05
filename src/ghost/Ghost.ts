import {HardEvidence} from '../HardEvidence';
import {SoftEvidence} from '../SoftEvidence';

export interface Ghost {
  getName(): string;
  getAbbreviation(): string;
  getHardEvidence(): Array<HardEvidence>;
  getSoftEvidence(): Array<SoftEvidence>;
}
