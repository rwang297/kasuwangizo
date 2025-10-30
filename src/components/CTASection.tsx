import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-teal-700">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl text-teal-100 mb-8">
          Join thousands of MSMEs already growing their businesses on our platform
        </p>

        <Link
          href="/signup"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full text-lg transition mb-8"
        >
          Start Your Free Account →
        </Link>

        <div className="flex flex-col sm:flex-row justify-center gap-8 pt-8 border-t border-teal-500">
          <div className="flex items-center justify-center gap-2">
            <span className="text-green-300 text-xl">✓</span>
            <span>No Setup Fees</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-green-300 text-xl">✓</span>
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-green-300 text-xl">✓</span>
            <span>Free Training</span>
          </div>
        </div>
      </div>
    </section>
  );
}
