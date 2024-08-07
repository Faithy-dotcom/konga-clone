import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-white p-8 rounded-lg mt-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          <section className="col-span-1">
            <h2 className="text-xl font-bold">Help Center</h2>
            <p>Visit our help center at <a href="https://help.konga.com" className="text-blue-500">help.konga.com</a></p>
          </section>
          <section className="col-span-1">
            <h2 className="text-xl font-bold">Phone Support</h2>
            <p>Call us at 0809 460 5555</p>
          </section>
          <section className="col-span-1">
            <h2 className="text-xl font-bold">WhatsApp Us</h2>
            <p>Reach us on WhatsApp at 09070038400, 08094605555</p>
          </section>
          <section className="col-span-1">
            <h2 className="text-xl font-bold">Get Latest Deals</h2>
            <p>Our best promotions sent to your inbox.</p>
            <input type="email" placeholder="Email Address" className="bg-gray-700 p-2 rounded w-full" />
            <button className="mt-2 p-2 bg-blue-500 rounded w-full">Subscribe</button>
          </section>
          <section className="col-span-1">
            <h2 className="text-xl font-bold">About Konga</h2>
            <ul className="list-disc ml-5">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Forum</li>
              <li>Careers</li>
              <li>Our Blog</li>
              <li>Terms & Conditions</li>
            </ul>
          </section>
          <section className="col-span-1">
            <h2 className="text-xl font-bold">Payment</h2>
            <ul className="list-disc ml-5">
              <li>Kongapay</li>
              <li>Wallet</li>
              <li>Verve</li>
              <li>Mastercard</li>
              <li>Visa</li>
            </ul>
          </section>
          <section className="col-span-1">
            <h2 className="text-xl font-bold">Buying on Konga</h2>
            <ul className="list-disc ml-5">
              <li>Buyer Safety Centre</li>
              <li>FAQs</li>
              <li>Delivery</li>
              <li>Konga Return Policy</li>
              <li>Digital Services</li>
              <li>Bulk Purchase</li>
            </ul>
          </section>
          <section className="col-span-1">
            <h2 className="text-xl font-bold">More Info</h2>
            <ul className="list-disc ml-5">
              <li>Site Map</li>
              <li>Track My Order</li>
              <li>Privacy Policy</li>
              <li>Authentic Items</li>
            </ul>
          </section>
          <section className="col-span-1">
            <h2 className="text-xl font-bold">Make Money on Konga</h2>
            <p>Become a Konga Affiliate</p>
          </section>
          <section className="col-span-1">
            <h2 className="text-xl font-bold">Download & Shop on the Go</h2>
            <div className="flex flex-col space-y-2">
              <button className="p-2 bg-blue-600 rounded">Download on App Store</button>
              <button className="p-2 bg-green-600 rounded">Download on PlayStore</button>
            </div>
          </section>
          <section className="col-span-1">
            <h2 className="text-xl font-bold">Connect with Us</h2>
            <p>Stay connected with us through our social media channels.</p>
          </section>
          <footer className="col-span-6 text-center mt-8">
            <p>Copyright © 2024 Konga. All Rights Reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
