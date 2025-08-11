import { axiosWithAuth } from "@/api/interceptors";
import {
	ITimerSessionResponse,
	TypeTimerRoundFormState,
	TypeTimerSessionFormState,
} from "@/types/timer.types";

class TimerService {
	private BASE_URL = "user/timer";

	async getTodaySession() {
		const response = await axiosWithAuth.get<ITimerSessionResponse>(
			this.BASE_URL
		);
		return response;
	}

	async createSession() {
		const response = await axiosWithAuth.post<ITimerSessionResponse>(
			this.BASE_URL
		);
		return response;
	}

	async updateSession(id: string, data: TypeTimerSessionFormState) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data);
		return response;
	}

	async deleteSession(id: string) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`);
		return response;
	}

	async updateRound(id: string, data: TypeTimerRoundFormState) {
		const response = await axiosWithAuth.put(
			`${this.BASE_URL}/round/${id}`,
			data
		);
		return response;
	}
}

const timerService = new TimerService();
export default timerService;
