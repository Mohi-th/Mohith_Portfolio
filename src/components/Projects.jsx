export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-3xl font-semibold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((p) => (
          <div
            key={p}
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >
            <div className="h-40 bg-gray-100 rounded-lg mb-4"></div>
            <h3 className="font-semibold text-lg">Project Title</h3>
            <p className="text-gray-600 text-sm mt-2">
              Short description of the project.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
