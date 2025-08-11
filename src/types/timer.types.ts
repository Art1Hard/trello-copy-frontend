import { IBase } from "./root.types";

export interface ITimerSessionResponse extends IBase {
	isCompleted?: boolean;
	rounds?: ITimerRoundResponse[];
}

export interface ITimerRoundResponse extends IBase {
	totalSeconds: number;
	isCompleted?: boolean;

	pomodoroSessionId: string;
	pomodoroSession?: ITimerSessionResponse;
}

export type TypeTimerSessionFormState = Partial<
	Omit<ITimerSessionResponse, "id" | "createdAt" | "updatedAt">
>;

export type TypeTimerRoundFormState = Partial<
	Omit<ITimerRoundResponse, "id" | "createdAt" | "updatedAt">
>;
