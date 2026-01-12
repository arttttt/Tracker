import { LabelId } from '../types/LabelId.js';

export interface Label {
  readonly id: LabelId;
  readonly name: string;
  readonly color: string;
}
