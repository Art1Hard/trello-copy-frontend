export interface IUser {
	id: string;
	email: string;
	name?: string;

	workInterval?: number;
	breakInterval?: number;
	intervalsCount?: number;
}

export type TypeUserForm = Partial<Omit<IUser, "id">>;
