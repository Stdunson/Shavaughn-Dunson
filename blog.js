const postList = document.querySelector("#post-list");

function isValidPostDate(date) {
	if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
		return false;
	}

	const parsed = new Date(`${date}T00:00:00Z`);
	return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === date;
}

function renderPosts(posts) {
	const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));
	const fragment = document.createDocumentFragment();

	sortedPosts.forEach((post) => {
		if (!post.title || !post.description || !post.url || !isValidPostDate(post.date)) {
			throw new Error("Every blog post needs a title, description, URL, and valid YYYY-MM-DD date.");
		}

		const link = document.createElement("a");
		link.className = "post-link";
		link.href = post.url;

		const date = document.createElement("time");
		date.className = "post-date";
		date.dateTime = post.date;
		date.textContent = new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
			timeZone: "UTC"
		}).format(new Date(`${post.date}T00:00:00Z`));

		const title = document.createElement("h2");
		title.textContent = post.title;

		const description = document.createElement("p");
		description.textContent = post.description;

		link.append(date, title, description);
		fragment.append(link);
	});

	postList.replaceChildren(fragment);
}

fetch(new URL("posts/posts.json", window.location.href))
	.then((response) => {
		if (!response.ok) {
			throw new Error(`Could not load blog posts (${response.status}).`);
		}
		return response.json();
	})
	.then((posts) => {
		if (!Array.isArray(posts)) {
			throw new Error("The blog post list must be a JSON array.");
		}
		renderPosts(posts);
	})
	.catch((error) => {
		console.error(error);
		postList.textContent = "Blog posts could not be loaded. Please try again later.";
	});
