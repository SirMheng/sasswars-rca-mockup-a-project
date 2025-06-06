import React from "react";
import OrganizationCardNav from "./OrganizationCardNav";
import OrganizationsCard from "./testArtOrg";
// import OrganizationsCard from "./OrganizationsCard";

const ArtOrganizations = () => {
  return (
    <div className="relative h-[490px] w-[1200px] flex flex-col justify-center mx-auto">
      <OrganizationCardNav />
      <OrganizationsCard />
    </div>
  );
};

export default ArtOrganizations;
