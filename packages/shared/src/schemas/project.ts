import { z } from 'zod';

export const projectIdSchema = z.string().min(1);

export const projectSchema = z.object({
  id: projectIdSchema,
  name: z.string().min(1),
  description: z.string(),
});

export const createProjectSchema = projectSchema.omit({ id: true });
export const updateProjectSchema = createProjectSchema.partial();

export type ProjectDto = z.infer<typeof projectSchema>;
export type CreateProjectDto = z.infer<typeof createProjectSchema>;
export type UpdateProjectDto = z.infer<typeof updateProjectSchema>;
