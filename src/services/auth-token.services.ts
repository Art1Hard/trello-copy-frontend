import Cookies from "js-cookie";

export enum EnumTokens {
	"ACCESS_TOKEN" = "accessToken",
	"REFRESH_TOKEN" = "refreshToken",
}

export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);
	return accessToken || null;
};

export const saveTokenStorage = (accessToken: string) => {
	Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
		domain: "localhost",
		sameSite: "lax",
		expires: new Date(Date.now() + 60 * 60 * 1000),
	});
};

export const removeFromStorage = () => {
	Cookies.remove(EnumTokens.ACCESS_TOKEN);
};
