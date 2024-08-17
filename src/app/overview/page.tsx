import React from "react";
import CustomCard from "@/components/custom/CardCustom";

function page() {
  const colDefs: any = [];
  const rowData: any = [];

  return (
    <div className="flex min-h-screen w-full flex-col dark:text-primary-foreground">
      <CustomCard
        title="Your pantry"
        description="All the makings of a tasy treat"
        colDefs={colDefs}
        rowData={rowData}
      ></CustomCard>
    </div>
  );
}

export default page;
