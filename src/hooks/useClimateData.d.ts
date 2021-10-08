export interface ISelect {
  country: string;
  period: string;
  variable: string;
}

export interface IClimateData {
  selected: ISelect;
  data: Object;
}

type selectPropTypes = 'selected' | 'data';

type getClimateDataProps<T extends selectPropTypes> = T extends 'selected'
  ? ISelect
  : Object;
export function getClimateData(): IClimateData;
export function getClimateData<T extends selectPropTypes>(
  select?: T
): getClimateDataProps<T>;

export function setClimateData(select: selectPropTypes, value: Object): boolean;
export function hasClimateData(hash: string): boolean;
