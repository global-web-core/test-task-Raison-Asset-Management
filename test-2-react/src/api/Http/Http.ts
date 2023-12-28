import { API_URL } from "./Http.constants";

export const create = (data: Record<string, any>) => {
	fetch(API_URL, {
			method: 'POST',
			headers: {
					'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
	})
	.then(response => {
			if (!response.ok) {
					throw new Error('Network response was not ok');
			}
			return response.json();
	})
	.then(data => {
			alert("Success!");
	})
	.catch(() => {
			alert("Error!");
	});
}