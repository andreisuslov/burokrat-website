import { Link } from "@remix-run/react";
import clsx from "~/utils/shared/ClassesUtils";

export default function SaasRockUpdateButton({ hasUpdate }: { hasUpdate: boolean }) {
  return (
    <>
      {hasUpdate && (
        <div className="hidden divide-x divide-gray-300 rounded-sm shadow-none lg:inline-flex">
          <div className="relative z-0 inline-flex rounded-full text-xs shadow-none sm:text-sm">
            <Link
              to={"/admin/version"}
              className={clsx(
                "relative inline-flex items-center space-x-1 rounded-md border border-gray-100 bg-gray-50 p-2 font-medium text-gray-500 shadow-inner hover:bg-teal-50 hover:text-teal-800 focus:z-10 focus:bg-teal-100 focus:text-teal-900 focus:outline-none",
                " border-green-200 bg-green-50 text-green-800 hover:bg-green-100 hover:text-green-900 focus:z-10 focus:bg-green-100 focus:text-green-900 focus:outline-none"
              )}
              aria-haspopup="listbox"
              aria-expanded="true"
              aria-labelledby="listbox-label"
            >
              <div>
                <span>Update available</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}