import client from "./client";

export const login = ({ email, accessToken, tokenId }) =>
	client.post('/account/login', { email, accessToken, tokenId });

export const register = ({ picture, nickname }) =>
	client.post('/account/signup', { picture, nickname });

export const check = () => client.get('/account/check');

export const logout = () => client.post('/account/logout');

