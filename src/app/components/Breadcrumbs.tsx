import React from "react";
import Link from "next/link";
import { VscChevronRight } from "react-icons/vsc";
interface Breadcrumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <>
      <nav className="flex items-center">
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            {index > 0 && <VscChevronRight className="w-6 h-6 text-gray-500" />}

            <Link href="/" className="text-lg">
              <span
                className={
                  " hover:underline " +
                  (index === 0 ? "text-[#B57A50]" : "text-gray-400")
                }
              >
                {breadcrumb.label}
              </span>
            </Link>
          </React.Fragment>
        ))}
      </nav>
      <h2 className="text-2xl m-5 tracking-widest">{breadcrumbs[breadcrumbs.length - 1].label}</h2>
    </>
  );
};

export default Breadcrumbs;
