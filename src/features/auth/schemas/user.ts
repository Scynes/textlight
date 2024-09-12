import { z } from 'zod';

/**
 * Defines the user schema for zod validation.
 */
export const UserSchema = z.object({

    // The user's display name.
    display_name: z.string().min(3).max(12),

    // The user's email address.
    email: z.string().email(),

    // The user's password.
    password: z.string().min(8).max(64),
});

/**
 * The type of the user schema.
 */
export type User = z.infer<typeof UserSchema>;