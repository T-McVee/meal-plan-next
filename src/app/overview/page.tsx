import React from "react";
import CustomCard from "@/components/custom/CardCustom";

function page() {
  const colDefs: any = [];
  const rowData: any = [];

  return (
    <div className="flex flex-row min-h-screen w-full dark:text-primary-foreground">
      <CustomCard
        title="Your pantry"
        description="All the makings of a tasy treat"
        colDefs={colDefs}
        rowData={rowData}
      ></CustomCard>
      <CustomCard
        title="Cookbook"
        description="Recipes"
        width="2/5"
        colDefs={[]}
        rowData={[]}
      ></CustomCard>
    </div>
  );
}

export default page;
