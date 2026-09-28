function ContactPage() {
  return (
    <div className="bg-primary/5 h-screen py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative mx-auto mb-12 w-fit sm:mb-16 lg:mb-24">
          <h2 className="text-base-content text-2xl font-bold md:text-3xl lg:text-4xl">
            Contact Us
          </h2>
          <span className="from-primary/40 to-primary/5 absolute inset-s-0 top-9 h-1 w-full rounded-full bg-gradient-to-r" />
        </div>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Contact form Section */}

          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>

          {/* Contact Info Section */}
          <div>
            {/* Section Title */}
            <h3 className="text-base-content mb-6 text-2xl font-semibold">
              Happy to help you!
            </h3>
            <p className="text-base-content/80 mb-10 text-lg font-medium">
              FlyonUI gives you the blocks and components you need to create a
              truly professional website, landing page or admin panel for your
              SaaS and gives the blocks.
            </p>
            {/* Contact Info Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Office Hours */}
              <div className="card shadow-none">
                <div className="card-body items-center gap-3">
                  <div className="avatar avatar-placeholder">
                    <div className="border-primary/20 text-primary w-9 rounded-full border">
                      <span className="icon-[tabler--clock] text-primary size-6" />
                    </div>
                  </div>
                  <h4 className="text-base-content text-lg font-medium">
                    Office Hours
                  </h4>
                  <div className="text-center">
                    <p className="text-base-content/80">Monday-Friday</p>
                    <p className="text-base-content/80">8:00 am to 5:00 pm</p>
                  </div>
                </div>
              </div>
              {/* Our Address */}
              <div className="card shadow-none">
                <div className="card-body items-center gap-3">
                  <div className="avatar avatar-placeholder">
                    <div className="border-primary/20 text-primary w-9 rounded-full border">
                      <span className="icon-[tabler--map-pin] text-primary size-6" />
                    </div>
                  </div>
                  <h4 className="text-base-content text-lg font-medium">
                    Our Address
                  </h4>
                  <address className="text-base-content/80 text-center not-italic">
                    802 Pension Rd,Maine
                    <br />
                    96812, USA
                  </address>
                </div>
              </div>
              {/* Office 2 */}
              <div className="card shadow-none">
                <div className="card-body items-center gap-3">
                  <div className="avatar avatar-placeholder">
                    <div className="border-primary/20 text-primary w-9 rounded-full border">
                      <span className="icon-[tabler--briefcase] text-primary size-6" />
                    </div>
                  </div>
                  <h4 className="text-base-content text-lg font-medium">
                    Office 2
                  </h4>
                  <address className="text-base-content/80 text-center not-italic">
                    802 Pension Rd,Maine
                    <br />
                    96812, USA
                  </address>
                </div>
              </div>
              {/* Get in Touch */}
              <div className="card shadow-none">
                <div className="card-body items-center gap-3">
                  <div className="avatar avatar-placeholder">
                    <div className="border-primary/20 text-primary w-9 rounded-full border">
                      <span className="icon-[tabler--phone] text-primary size-6" />
                    </div>
                  </div>
                  <h4 className="text-base-content text-lg font-medium">
                    Get in Touch
                  </h4>
                  <div className="text-center">
                    <p className="text-base-content/80">+1-316-688-5685</p>
                    <p className="text-base-content/80">+1-316-477-0169</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
