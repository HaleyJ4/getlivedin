export default function Home() {
return (
<main className="min-h-screen bg-slate-50 text-slate-900">
<section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
<p className="mb-4 text-sm font-medium uppercase tracking-widest text-slate-500">
Canadian Home Intelligence
</p>

<h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
Find a home,
<br />
not just a house.
</h1>

<p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
LivedIn reveals what listings leave out:
<br />
real neighborhood life, true ownership cost,
and how to win your offer.
</p>

<div className="mt-10 flex w-full max-w-xl rounded-2xl bg-white p-2 shadow-lg">
<input
type="text"
placeholder="Enter a Canadian address"
className="flex-1 rounded-xl px-5 py-4 text-slate-900 outline-none"
/>

<button className="rounded-xl bg-slate-900 px-6 py-4 font-medium text-white">
Generate Report
</button>
</div>

<p className="mt-4 text-sm text-slate-500">
$25 per address · No subscription
</p>
</section>
</main>
);
}
