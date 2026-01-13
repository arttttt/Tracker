import { z } from 'zod';

export const labelIdSchema = z.string().min(1);

export const labelSchema = z.object({
  id: labelIdSchema,
  name: z.string().min(1),
  color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
});

export const createLabelSchema = labelSchema.omit({ id: true });
export const updateLabelSchema = createLabelSchema.partial();

export type LabelDto = z.infer<typeof labelSchema>;
export type CreateLabelDto = z.infer<typeof createLabelSchema>;
export type UpdateLabelDto = z.infer<typeof updateLabelSchema>;
