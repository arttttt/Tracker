import 'reflect-metadata';
import { container } from 'tsyringe';
import { DI_TOKENS } from './tokens.js';
import { JsonlSource } from '@data/sources/filesystem/JsonlSource.js';
import { IssueRepositoryImpl } from '@data/repositories/IssueRepositoryImpl.js';
import { ListIssuesUseCase } from '@domain/usecases/ListIssuesUseCase.js';
import { GetIssueUseCase } from '@domain/usecases/GetIssueUseCase.js';
import { IssuesHandler } from '@presentation/http/IssuesHandler.js';

/**
 * Backend DI container instance.
 *
 * Usage:
 * - Register implementations in this file
 * - Use @injectable() on classes
 * - Use @inject(TOKEN) for constructor injection
 */

// Data Sources
container.register(DI_TOKENS.JsonlSource, { useClass: JsonlSource });

// Repositories
container.register(DI_TOKENS.IssueRepository, { useClass: IssueRepositoryImpl });

// Use Cases
container.register(DI_TOKENS.ListIssuesUseCase, { useClass: ListIssuesUseCase });
container.register(DI_TOKENS.GetIssueUseCase, { useClass: GetIssueUseCase });

// Handlers
container.register(IssuesHandler, { useClass: IssuesHandler });

export { container };
