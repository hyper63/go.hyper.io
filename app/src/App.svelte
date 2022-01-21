<script>
	import Logo from "./logo.svelte";

	function handleSubmit(e) {
		fetch("/graphql", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query: `mutation { 
					createShortcut(code: "${e.target.code.value}", href: "${e.target.url.value}") { 
						ok
					} 
				}`,
			}),
		})
			.then((res) => res.json())
			.then(({ data }) => {
				e.target.reset();
				alert("Added Shortcut!");
			})
			.catch((err) => console.log(err));
	}
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="text-center hero-content">
		<div class="max-w-md">
			<div class="flex justify-center items-center">
				<Logo />
			</div>
			<h1 class="mb-5 text-5xl font-bold flex justify-center items-center">
				Hyper URL Shortener
			</h1>
			<p class="mb-5">Create a shortcut code for any URL:</p>
			<form on:submit|preventDefault={handleSubmit}>
				<div class="form-control w-32">
					<label class="label" for="code">
						<span class="label-text">Code</span>
					</label>
					<input
						id="code"
						type="text"
						placeholder="enter code"
						class="input input-bordered"
						name="code"
					/>
				</div>
				<div class="form-control">
					<label class="label" for="url">
						<span class="label-text">URL</span>
					</label>
					<input
						id="url"
						type="text"
						placeholder="enter URL"
						class="input input-bordered"
						name="url"
					/>
				</div>
				<button type="submit" class="mt-8 btn btn-primary"
					>Create Shortcut</button
				>
			</form>
		</div>
	</div>
</div>
