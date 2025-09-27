"use client";

import "./styles.css";

import {
  Truck,
  Home,
  Package,
  Shield,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Check,
  ArrowRight,
  Users,
  Award,
  Zap,
} from "lucide-react";

const LandingPage = () => {
  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Residential Moving",
      description:
        "Complete house and apartment moving services throughout Tokyo and surrounding areas.",
      features: [
        "Full packing service",
        "Furniture disassembly",
        "Safe transport",
        "Setup at new location",
      ],
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Storage Solutions",
      description:
        "Secure warehouse storage for short-term or long-term needs with climate control.",
      features: ["Climate controlled", "24/7 security", "Flexible terms", "Easy access"],
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Disposal Services",
      description: "Responsible disposal and recycling of unwanted items during your move.",
      features: [
        "Eco-friendly disposal",
        "Furniture removal",
        "Electronic recycling",
        "Document shredding",
      ],
    },
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "5000+", label: "Happy Customers" },
    { icon: <Award className="h-6 w-6" />, value: "15+", label: "Years Experience" },
    { icon: <Truck className="h-6 w-6" />, value: "100%", label: "Success Rate" },
    { icon: <Star className="h-6 w-6" />, value: "4.9/5", label: "Customer Rating" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="bg-grid-pattern absolute inset-0 opacity-5" />
          <div className="absolute top-20 left-10 h-72 w-72 animate-pulse rounded-full bg-blue-300 opacity-20 mix-blend-multiply blur-xl filter" />
          <div className="absolute top-40 right-10 h-72 w-72 animate-pulse rounded-full bg-purple-300 opacity-20 mix-blend-multiply blur-xl filter delay-1000" />
          <div className="absolute bottom-20 left-20 h-72 w-72 animate-pulse rounded-full bg-indigo-300 opacity-20 mix-blend-multiply blur-xl filter delay-2000" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-7xl">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Roger&#39;s Moving Service JP
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-gray-700 md:text-2xl">
              Whether you are planning to move across town or to a neighboring region, our dedicated
              team is here to make your transition{" "}
              <span className="font-semibold text-blue-600">smooth and hassle-free</span>.
            </p>
            <p className="mx-auto mb-12 max-w-3xl text-lg text-gray-600 md:text-xl">
              A new location brings new opportunities, and we understand the excitement and
              challenges that come with it.
            </p>

            <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="group flex transform items-center rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="rounded-full border-2 border-blue-600 px-8 py-4 text-lg font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white">
                Learn More
              </button>
            </div>
          </div>

          {/* Animated Truck */}
          <div className="relative">
            <div className="animate-bounce-slow">
              <Truck className="mx-auto h-24 w-24 text-blue-600 opacity-80" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group text-center transition-transform duration-300 hover:scale-105"
              >
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-blue-600 p-3 transition-colors group-hover:bg-blue-500">
                    {stat.icon}
                  </div>
                </div>
                <div className="mb-2 text-3xl font-bold">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl leading-tight font-bold md:text-4xl">
                Ready to Start a New Chapter?
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-300">
                <p>A change of scenery can open up fresh opportunities and new experiences.</p>
                <p>
                  If you&#39;re planning a move and want a seamless transition, our team is here to
                  help make it stress-free.
                </p>
                <p>
                  With a commitment to personalized service and meticulous attention to detail, we
                  ensure that your belongings are transported safely to your new home.
                </p>
                <p className="font-semibold text-blue-400">
                  Let us handle the complexities of moving, so you can enjoy the excitement of your
                  new beginning.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-16 aspect-h-10 overflow-hidden rounded-2xl shadow-2xl">
                <div className="flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-8">
                  <div className="text-center">
                    <Package className="mx-auto mb-4 h-24 w-24 text-white/80" />
                    <h3 className="mb-2 text-2xl font-bold">Professional Moving</h3>
                    <p className="text-white/80">Expert handling of your belongings</p>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 h-20 w-20 animate-pulse rounded-full bg-blue-400 opacity-60" />
              <div className="absolute -bottom-4 -left-4 h-16 w-16 animate-pulse rounded-full bg-purple-400 opacity-60 delay-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Our Services</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Comprehensive moving solutions tailored to your needs in Tokyo and surrounding areas
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="group">
                <div className="h-full transform rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    {service.icon}
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">{service.title}</h3>
                  <p className="mb-6 leading-relaxed text-gray-600">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moving with Ease Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl shadow-2xl">
                <div className="flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 p-8">
                  <div className="text-center text-white">
                    <Truck className="mx-auto mb-4 h-32 w-32 opacity-80" />
                    <h3 className="mb-2 text-2xl font-bold">Professional Fleet</h3>
                    <p className="opacity-80">Modern trucks for safe transport</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Moving with Ease</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                <p>
                  <span className="font-semibold text-blue-600">
                    No job is too small or too big for us.
                  </span>{" "}
                  Roger&#39;s Moving Company is your trusted partner for all your moving needs in
                  Tokyo and surrounding areas.
                </p>
                <p>
                  Whether you&#39;re moving within Tokyo or to a neighboring region, our experienced
                  team is here to make your move smooth and hassle-free.
                </p>
                <p>
                  We offer a range of services including packing, unpacking, and quick moving
                  services. Our goal is to be the English-speaking moving company of choice for
                  residents in Tokyo.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center rounded-full bg-blue-50 px-4 py-2">
                  <Shield className="mr-2 h-5 w-5 text-blue-600" />
                  <span className="font-medium text-blue-800">Insured & Licensed</span>
                </div>
                <div className="flex items-center rounded-full bg-green-50 px-4 py-2">
                  <Clock className="mr-2 h-5 w-5 text-green-600" />
                  <span className="font-medium text-green-800">On-Time Service</span>
                </div>
                <div className="flex items-center rounded-full bg-purple-50 px-4 py-2">
                  <Zap className="mr-2 h-5 w-5 text-purple-600" />
                  <span className="font-medium text-purple-800">Quick Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Solutions Section */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 space-y-6 md:order-1">
              <h2 className="text-3xl font-bold md:text-4xl">Storage Solutions</h2>
              <p className="text-lg leading-relaxed text-gray-300">
                Store your belongings at our warehouse for as long as you need. Whether you&#39;re
                downsizing, in need of extra space, or temporarily leaving the country, our storage
                services are here to help.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="rounded-xl bg-gray-800 p-4 text-center">
                  <Shield className="mx-auto mb-2 h-8 w-8 text-blue-400" />
                  <div className="text-sm font-medium">24/7 Security</div>
                </div>
                <div className="rounded-xl bg-gray-800 p-4 text-center">
                  <Home className="mx-auto mb-2 h-8 w-8 text-green-400" />
                  <div className="text-sm font-medium">Climate Control</div>
                </div>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl shadow-2xl">
                <div className="flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-8">
                  <div className="text-center text-white">
                    <Package className="mx-auto mb-4 h-32 w-32 opacity-80" />
                    <h3 className="mb-2 text-2xl font-bold">Secure Storage</h3>
                    <p className="opacity-80">Climate-controlled warehouse</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disposal Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl shadow-2xl">
                <div className="flex items-center justify-center bg-gradient-to-br from-orange-400 to-red-500 p-8">
                  <div className="text-center text-white">
                    <Package className="mx-auto mb-4 h-32 w-32 opacity-80" />
                    <h3 className="mb-2 text-2xl font-bold">Eco-Friendly Disposal</h3>
                    <p className="opacity-80">Responsible waste management</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Disposal Services</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Dispose of unwanted items with ease. Our team will handle the disposal process
                efficiently and responsibly, giving you peace of mind.
              </p>

              <div className="space-y-3">
                {[
                  "Eco-friendly disposal methods",
                  "Electronics recycling",
                  "Furniture removal service",
                  "Document shredding available",
                ].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <Check className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">Ready to Make Your Move?</h2>
          <p className="mb-8 text-xl opacity-90 md:text-2xl">
            Contact us today for a free quote and let us handle your next move with care and
            professionalism.
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="group flex transform items-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </button>
            <button className="flex items-center rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-600">
              <Mail className="mr-2 h-5 w-5" />
              Email Quote
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 text-sm opacity-80 sm:flex-row">
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              Tokyo & Surrounding Areas
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              Available 7 Days a Week
            </div>
            <div className="flex items-center">
              <Shield className="mr-2 h-4 w-4" />
              Fully Insured & Licensed
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center">
                <Truck className="mr-2 h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Roger&#39;s Moving JP</span>
              </div>
              <p className="leading-relaxed text-gray-400">
                Your trusted moving partner in Tokyo, providing professional and reliable moving
                services.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-blue-400">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Residential Moving</li>
                <li>Storage Solutions</li>
                <li>Disposal Services</li>
                <li>Packing Services</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-blue-400">Areas</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Tokyo Metropolitan</li>
                <li>Kanagawa Prefecture</li>
                <li>Saitama Prefecture</li>
                <li>Chiba Prefecture</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-blue-400">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>+81-XX-XXXX-XXXX</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>info@rogermovingservice.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Tokyo, Japan</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Roger&#39;s Moving Service JP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
