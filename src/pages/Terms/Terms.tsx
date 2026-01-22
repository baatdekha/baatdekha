import {
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaGavel,
  FaInfoCircle,
  FaShieldAlt,
} from "react-icons/fa";

export const Terms = () => {
  return (
    <div className="font-poppins bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden">
        {/* Header Header */}
        <div className="bg-gray-900 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <FaGavel className="text-emerald-400" />
            <span className="uppercase tracking-widest text-sm font-semibold text-gray-400">
              Legal Policy
            </span>
          </div>
          <h1 className="text-3xl font-bold">Terms and Conditions</h1>
        </div>

        <div className="p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">
          {/* Welcome Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to BaatDekha.com!
            </h2>
            <p className="mb-4">
              These terms and conditions outline the rules and regulations for
              the use of Baatdekha.com's Website, located at
              <a
                href="https://baatdekha.com"
                className="text-emerald-600 hover:underline inline-flex items-center gap-1 font-medium"
              >
                https://baatdekha.com <FaExternalLinkAlt size={12} />
              </a>
              .
            </p>
            <p className="bg-emerald-50 border-l-4 border-emerald-500 p-4 italic text-gray-800">
              By accessing this website, we assume you accept these terms and
              conditions. Do not continue to use BaatDekha.com if you do not
              agree to take all of the terms and conditions stated on this page.
            </p>
          </section>

          {/* Privacy Note (Replacing Cookies) */}
          <section>
            <div className="flex items-center gap-2 mb-3 text-gray-900">
              <FaShieldAlt className="text-emerald-500" />
              <h3 className="text-xl font-bold">Privacy & Data:</h3>
            </div>
            <p>
              Your privacy is important to us. Please note that 
              <strong>BaatDekha.com does not use cookies</strong> to track your
              browsing behavior or collect personal data for marketing purposes.
              We believe in a clean, private browsing experience for all our
              local users.
            </p>
          </section>

          {/* License Section */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3 underline decoration-emerald-500 decoration-2 underline-offset-4">
              License:
            </h3>
            <p className="mb-4">
              Unless otherwise stated, Baatdekha.com and/or its licensors own
              the intellectual property rights for all material on
              BaatDekha.com. All intellectual property rights are reserved.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <p className="font-semibold mb-3">You must not:</p>
              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                <li>Copy or republish material from BaatDekha.com</li>
                <li>Sell, rent, or sub-license material from BaatDekha.com</li>
                <li>
                  Reproduce, duplicate or copy material from BaatDekha.com
                </li>
                <li>Redistribute content from BaatDekha.com</li>
              </ul>
            </div>
          </section>

          {/* User Comments */}
          <section className="border-t border-gray-100 pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              User Comments & Contributions:
            </h3>
            <p className="mb-4">
              Parts of this website offer users an opportunity to post and
              exchange opinions. Baatdekha.com does not filter or review
              Comments before their presence on the website.
            </p>
            <div className="space-y-3 bg-blue-50/50 p-6 rounded-lg">
              <p className="text-sm font-bold uppercase text-blue-600 tracking-wide">
                You warrant that:
              </p>
              <ul className="list-inside list-none space-y-2">
                <li className="flex gap-2">
                  <span>•</span> You are entitled to post the Comments and have
                  all necessary licenses.
                </li>
                <li className="flex gap-2">
                  <span>•</span> The Comments do not invade any intellectual
                  property right of any third party.
                </li>
                <li className="flex gap-2">
                  <span>•</span> The Comments do not contain defamatory or
                  unlawful material.
                </li>
              </ul>
            </div>
          </section>

          {/* Hyperlinking */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Hyperlinking to our Content:
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              The following organizations may link to our Website without prior
              approval:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <span className="p-2 bg-gray-100 rounded">
                Government agencies
              </span>
              <span className="p-2 bg-gray-100 rounded">Search engines</span>
              <span className="p-2 bg-gray-100 rounded">
                News organizations
              </span>
              <span className="p-2 bg-gray-100 rounded">
                Online directory distributors
              </span>
            </div>
          </section>

          {/* Disclaimer / Liability */}
          <section className="bg-orange-50 border border-orange-100 p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-3 text-orange-800">
              <FaExclamationTriangle />
              <h3 className="text-xl font-bold text-gray-900">
                Disclaimer & Liability:
              </h3>
            </div>
            <p className="text-sm text-orange-900/80 mb-4 leading-relaxed">
              To the maximum extent permitted by law, we exclude all
              representations and warranties relating to our website. Nothing in
              this disclaimer will limit liability for death, personal injury,
              or fraud.
            </p>
            <p className="text-gray-900 font-bold text-center border-t border-orange-200 pt-4">
              As long as the website and its services are provided free of
              charge, we will not be liable for any loss or damage of any
              nature.
            </p>
          </section>
        </div>

        {/* Footer info */}
        <div className="bg-gray-50 p-6 text-center border-t border-gray-200">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <FaInfoCircle /> If you have questions about these terms, please
            contact us via our official website.
          </p>
        </div>
      </div>
    </div>
  );
};

