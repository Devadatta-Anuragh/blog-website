import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="bg-white">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:flex-row-reverse md:justify-between">
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-2 text-sm font-semibold text-gray-900 uppercase">
                Company
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-normal">
                <li class="mb-1">
                  <Link to="/about" class="hover:underline">
                    About{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-2 text-sm font-semibold text-gray-900 uppercase">
                Content & Service
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-normal">
                <li class="mb-1">
                  <Link to="/finance" class="hover:underline">
                    Finance{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/health" class="hover:underline">
                    Health{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-2 text-sm font-semibold text-gray-900 uppercase">
                Help & Support{" "}
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-normal">
                <li class="mb-1">
                  <Link to="/terms-and-conditions" class="hover:underline">
                    Terms &amp; Conditions{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" class="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://heisenblogz.in/" class="hover:underline">
              HeisenBlogz™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
