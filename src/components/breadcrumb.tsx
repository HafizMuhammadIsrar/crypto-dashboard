"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BreadcrumbNav = () => {
  const pathname = usePathname();

  // Convert pathname to breadcrumb parts
  const paths = pathname.split("/").filter((p) => p);

  const breadcrumbs = paths.map((segment, index) => {
    const href = "/" + paths.slice(0, index + 1).join("/");
    const isLast = index === paths.length - 1;
    const label = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize

    return (
      <BreadcrumbItem key={href}>
        {isLast ? (
          <BreadcrumbPage>{label}</BreadcrumbPage>
        ) : (
          <BreadcrumbLink asChild>
            <Link href={href}>{label}</Link>
          </BreadcrumbLink>
        )}
      </BreadcrumbItem>
    );
  });

  return (
    <Breadcrumb>
      <BreadcrumbList className=" !gap-1 " >
        {breadcrumbs.map((crumb, index) => (
          <div key={index} className="flex items-center">
            {index === 1 ? (
              ""
            ) : (
              <div className="flex items-center gap-[2px] " >
                {" "}
                {crumb}
                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </div>
            )}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbNav;
