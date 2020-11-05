export enum Objective {
  GHOST_TYPE,
  GHOST_EVENT,
  GHOST_PHOTO,
  DIRTY_WATER,
  EMF_READER,
  THERMOMETER,
  MOTION_SENSOR,
  SMUDGE_STICKS,
  CRUCIFIX
}

export function objectives(): Array<Objective> {
  let objectives: Array<Objective> = [];

  for(let objective in Objective) {
    // when iterating over enums it doubles the values. one for int -> string and one for string -> int
    if(!isNaN(Number(objective))) {
      let column: Objective = Objective[Objective[objective] as keyof typeof Objective];
      objectives.push(column);
    }
  }

  return objectives;
}
