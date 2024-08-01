import { writable } from 'svelte/store';
import type { User } from 'types/user.types';

export const user = writable<User>(null);
