import { ProjectId } from '../types/ProjectId.js';

export interface Project {
  readonly id: ProjectId;
  readonly name: string;
  readonly description: string;
}
