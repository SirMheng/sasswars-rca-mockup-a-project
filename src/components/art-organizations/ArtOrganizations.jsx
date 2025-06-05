import React from "react";
import OrganizationCardNav from "./OrganizationCardNav";
import OrganizationsCard from "./OrganizationsCard";

const ArtOrganizations = () => {
  return (
    <div className="h-[682px] w-full bg-black">
      <OrganizationCardNav />
      <OrganizationsCard />
    </div>
  );
};

export default ArtOrganizations;
