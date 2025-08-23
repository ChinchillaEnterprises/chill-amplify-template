"use client";

import * as React from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const HeroBanner: React.FC = () => {
  return (
    <>
      <Box
        className="fp-banner-area"
        sx={{
          mb: { xs: "60px", sm: "60px", md: "80px", lg: "100px", xl: "150px" },
        }}
      >
        <Box
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "720px",
              md: "960px",
              lg: "1140px",
              xl: "1320px",
            },
            mx: "auto",
            px: "12px",
            position: "relative",
            zIndex: "1",
          }}
        >
          <Box
            className="fp-banner-content"
            sx={{
              mx: "auto",
              textAlign: "center",
            }}
          >
            <h1>Build Anything with AI + Components</h1>
            <p>
              Tell Claude what you want to build. Watch it assemble 45+ ready-made
              components into your vision. Blog, dashboard, e-commerce – it's all possible.
            </p>

            <Link href="/admin" className="fp-banner-button">
              <i className="material-symbols-outlined">dashboard</i>
              Explore Components
            </Link>
          </Box>

          <div className="banner-image text-center">
            <Image
              src="/images/front-pages/dashboard.png"
              alt="dashboard-image"
              width={848}
              height={585}
            />
          </div>

          {/* Shape Images */}
          <div className="shape1">
            <Image
              src="/images/front-pages/shape3.png"
              alt="shape3"
              width={685}
              height={685}
            />
          </div>
          <div className="shape2">
            <Image
              src="/images/front-pages/shape2.png"
              alt="shape2"
              width={447}
              height={453}
            />
          </div>
          <div className="shape3">
            <Image
              src="/images/front-pages/shape4.png"
              alt="shape4"
              width={171}
              height={171}
            />
          </div>
          <div className="shape4">
            <Image
              src="/images/front-pages/shape5.png"
              alt="shape5"
              width={658}
              height={656}
            />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default HeroBanner;