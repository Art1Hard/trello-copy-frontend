import { axiosWithAuth } from "@/api/interceptors";
import {
	ITimeBlockResponse,
	TypeTimeBlockForm,
} from "@/types/time-block.types";

class TimeBlockService {
	private BASE_URL = "/user/time-blocks";

	async getTimeBlocks() {
		const response = await axiosWithAuth.get<ITimeBlockResponse[]>(
			this.BASE_URL
		);
		return response;
	}

	async createTimeBlock(data: TypeTimeBlockForm) {
		const response = await axiosWithAuth.post<ITimeBlockResponse[]>(
			this.BASE_URL,
			data
		);
		return response;
	}

	async updateOrderTimeBlock(ids: string[]) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/update-order`, {
			ids,
		});
		return response;
	}

	async updateTimeBlock(id: string, data: TypeTimeBlockForm) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data);
		return response;
	}

	async deleteTimeBlock(id: string) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`);
		return response;
	}
}

const timeBlockService = new TimeBlockService();
export default timeBlockService;
