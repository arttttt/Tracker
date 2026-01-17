// Branded types
export { IssueId, LabelId, ProjectId } from './types/index.js';

// Domain models
export type {
  Issue,
  IssueStatus,
  IssuePriority,
  IssueType,
  Label,
  Project,
} from './models/index.js';

// Validation schemas
export {
  // Issue
  issueIdSchema,
  issueStatusSchema,
  issuePrioritySchema,
  issueTypeSchema,
  issueSchema,
  createIssueSchema,
  updateIssueSchema,
  type IssueDto,
  type CreateIssueDto,
  type UpdateIssueDto,
  // Label
  labelIdSchema,
  labelSchema,
  createLabelSchema,
  updateLabelSchema,
  type LabelDto,
  type CreateLabelDto,
  type UpdateLabelDto,
  // Project
  projectIdSchema,
  projectSchema,
  createProjectSchema,
  updateProjectSchema,
  type ProjectDto,
  type CreateProjectDto,
  type UpdateProjectDto,
} from './schemas/index.js';
