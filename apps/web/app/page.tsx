export default function Home() {
return (
<main className="min-h-screen bg-slate-50">

<section className="mx-auto max-w-6xl px-6 py-24">

<h1 className="text-6xl font-bold text-slate-900">
Find a home,
<br />
not just a house.
</h1>

<p className="mt-6 max-w-xl text-xl text-slate-600">
LivedIn reveals what listings leave out:
real neighbourhood life, true ownership costs,
and how to win your offer.
</p>

<div className="mt-10 rounded-xl bg-white p-6 shadow">

<input
className="w-full rounded-lg border p-4"
placeholder="Enter a Canadian address..."
/>

<button className="mt-4 rounded-lg bg-teal-700 px-6 py-3 text-white">
Generate Report
</button>

</div>

</section>

</main>
);
}
