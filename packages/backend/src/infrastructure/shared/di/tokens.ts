/**
 * DI injection tokens for backend services.
 * Use these tokens with @inject() decorator.
 */
export const DI_TOKENS = {
  // Data Sources
  JsonlSource: 'JsonlSource',

  // Repositories
  IssueRepository: 'IssueRepository',
  LabelRepository: 'LabelRepository',
  ProjectRepository: 'ProjectRepository',

  // Use Cases
  ListIssuesUseCase: 'ListIssuesUseCase',
  GetIssueUseCase: 'GetIssueUseCase',
} as const;

export type DIToken = (typeof DI_TOKENS)[keyof typeof DI_TOKENS];
