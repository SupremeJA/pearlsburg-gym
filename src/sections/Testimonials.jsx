import data from "../data/data.json";

function Testimonials() {
  return (
    <section className="bg-black text-white px-3 py-9">
      <h2 className="text-2xl font-semibold font-poppins text-center mb-8">
        Testimonials
      </h2>
      <div className="flex flex-col gap-6">
        {data.testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white  text-black p-4 rounded-lg">
            <p className="italic">"{testimonial.message}"</p>
            <div className="mt-2">
              <p className="font-semibold">- {testimonial.name}</p>
              <p className="text-yellow-400">
                {"★".repeat(testimonial.rating)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
