import * as React from "react";
import Grid from "@mui/material/Grid";
import NextLink from "next/link";
import SimpleFileUploader from "@/components/Forms/FileUploader/SimpleFileUploader";
import MultipleFileUploader from "@/components/Forms/FileUploader/MultipleFileUploader";
import SimpleImageUploader from "@/components/Forms/FileUploader/SimpleImageUploader";
import MultipleImageUploader from "@/components/Forms/FileUploader/MultipleImageUploader";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>File Uploader</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Forms</li>
          <li>File Uploader</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <SimpleFileUploader />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <MultipleFileUploader />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <SimpleImageUploader />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <MultipleImageUploader />
        </Grid>
      </Grid>
    </>
  );
}
