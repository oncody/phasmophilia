export enum SoftEvidence {
  TEAMMATE_MANIFESTATION,
  OBJECT_MANIPULATION,
  ELECTRONICS_MANIPULATION,
  LIGHT_EXTINGUISH,
  LIGHT_FLICKER,
  SHY,
  SOCIAL,
  EARLY_HUNT,
  AGGRESSIVE
}

export function softEvidence(): Array<SoftEvidence> {
  let allEvidence: Array<SoftEvidence> = [];

  for(let evidence in SoftEvidence) {
    // when iterating over enums it doubles the values. one for int -> string and one for string -> int
    if(!isNaN(Number(evidence))) {
      let column: SoftEvidence = SoftEvidence[SoftEvidence[evidence] as keyof typeof SoftEvidence];
      allEvidence.push(column);
    }
  }

  return allEvidence;
}
