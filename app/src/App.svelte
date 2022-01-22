<script>
	import Logo from "./logo.svelte";

	let target = "";
	let error = "";

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
				target = window.location.href + e.target.code.value;
				e.target.reset();
			})
			.catch((err) => (error = err.message));
	}

	function reset() {
		target = "";
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
			{#if error}
				<div class="error">
					An error occured when trying to create the form
					{error}
				</div>
			{/if}
			{#if target}
				<p class="mt-8">
					Thank you for creating a shortcut, you can test it out by entering the
					URL/:code and it will redirect you to the shortcut target.
				</p>
				<div class="mt-8">
					<a class="underline" href={target} target="_blank">{target}</a>
				</div>
				<div class="mt-8">
					<button on:click={reset} class="btn btn-primary"
						>Create New Shortcut</button
					>
				</div>
			{:else}
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
							required
							autocomplete="off"
							maxlength="6"
						/>
						<div class="mt-3 mb-8 text-xs">
							Enter code no more than 6 digits...
						</div>
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
							required
							autocomplete="off"
						/>
					</div>
					<button type="submit" class="mt-8 btn btn-primary"
						>Create Shortcut</button
					>
				</form>
			{/if}
			<div class="mt-32">
				This is an open source demo application built using 🦕 Deno + 📈 GraphQL
				+ Svelte + ⚡️ hyper! Check out the repository at <a
					class="underline"
					href="https://github.com/hyper63/go.hyper.io">Github</a
				>
			</div>
		</div>
	</div>
</div>
