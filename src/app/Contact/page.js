import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function ContactUs() {
  return (
    <>
      <Navbar/>
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 text-gray-900">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-6 text-lg leading-8">
            Have any questions or inquiries? Reach out to us and we'll be happy
            to assist you.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="absolute left-0 top-1 h-10 w-10 text-blue-500"
                  aria-hidden="true"
                />
                Address
              </dt>
              <dd className="mt-2 text-base leading-7">
                123 Movie Street, Los Angeles, CA
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="absolute left-0 top-1 h-10 w-10 text-green-500"
                  aria-hidden="true"
                />
                Phone
              </dt>
              <dd className="mt-2 text-base leading-7">+1 (234) 567-890</dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute left-0 top-1 h-10 w-10 text-red-500"
                  aria-hidden="true"
                />
                Email
              </dt>
              <dd className="mt-2 text-base leading-7">
                contact@movievault.com
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <Footer/>
    </>
  );
}
