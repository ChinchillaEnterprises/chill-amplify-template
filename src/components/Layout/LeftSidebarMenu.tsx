// File path: /styles/left-sidebar-menu.scss

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Box, Typography } from "@mui/material";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#3a4252" : "#f6f7f9",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    // marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

interface LeftSidebarProps {
  toggleActive: () => void;
}

const LeftSidebarMenu: React.FC<LeftSidebarProps> = ({ toggleActive }) => {
  const pathname = usePathname();
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      <Box className="leftSidebarDark hide-for-horizontal-nav">
        <Box className="left-sidebar-menu">
          <Box className="logo">
            <Link href="/admin">
              <Typography component={"span"} sx={{ fontSize: '1.5rem', mr: 1 }}>🎨</Typography>
              <Typography component={"span"}>Chill Components</Typography>
            </Link>
          </Box>

          <Box className="burger-menu" onClick={toggleActive}>
            <Typography component={"span"} className="top-bar"></Typography>
            <Typography component={"span"} className="middle-bar"></Typography>
            <Typography component={"span"} className="bottom-bar"></Typography>
          </Box>

          <Box className="sidebar-inner">
            <Box className="sidebar-menu">
              <Typography
                className="sub-title"
                sx={{
                  display: "block",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  mt: 2
                }}
              >
                COMPONENTS
              </Typography>

              {/* Getting Started */}
              <Accordion
                expanded={expanded === "panel0"}
                onChange={handleChange("panel0")}
                className="mat-accordion"
              >
                <AccordionSummary
                  className="mat-summary"
                  aria-controls="panel0d-content"
                  id="panel0d-header"
                >
                  <i className="material-symbols-outlined">school</i>
                  <Typography component={"span"} className="title">
                    Getting Started
                  </Typography>
                </AccordionSummary>

                <AccordionDetails className="mat-details">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/introduction"
                        className={`sidemenu-link ${
                          pathname === "/admin/introduction" ? "active" : ""
                        }`}
                      >
                        Introduction
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/installation"
                        className={`sidemenu-link ${
                          pathname === "/admin/installation" ? "active" : ""
                        }`}
                      >
                        Installation
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/theme-setup"
                        className={`sidemenu-link ${
                          pathname === "/admin/theme-setup" ? "active" : ""
                        }`}
                      >
                        Theme Setup
                      </Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>

              {/* Basic Components */}
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                className="mat-accordion"
              >
                <AccordionSummary
                  className="mat-summary"
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <i className="material-symbols-outlined">widgets</i>
                  <Typography component={"span"} className="title">
                    Basic Components
                  </Typography>
                </AccordionSummary>

                <AccordionDetails className="mat-details">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/components/buttons"
                        className={`sidemenu-link ${
                          pathname === "/admin/components/buttons" ? "active" : ""
                        }`}
                      >
                        Buttons
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/components/typography"
                        className={`sidemenu-link ${
                          pathname === "/admin/components/typography" ? "active" : ""
                        }`}
                      >
                        Typography
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/components/colors"
                        className={`sidemenu-link ${
                          pathname === "/admin/components/colors" ? "active" : ""
                        }`}
                      >
                        Colors
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/components/icons"
                        className={`sidemenu-link ${
                          pathname === "/admin/components/icons" ? "active" : ""
                        }`}
                      >
                        Icons
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/components/badges"
                        className={`sidemenu-link ${
                          pathname === "/admin/components/badges" ? "active" : ""
                        }`}
                      >
                        Badges
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/components/chips"
                        className={`sidemenu-link ${
                          pathname === "/admin/components/chips" ? "active" : ""
                        }`}
                      >
                        Chips
                      </Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>

              {/* Form Components */}
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                className="mat-accordion"
              >
                <AccordionSummary
                  className="mat-summary"
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <i className="material-symbols-outlined">edit_note</i>
                  <Typography component={"span"} className="title">
                    Form Components
                  </Typography>
                </AccordionSummary>

                <AccordionDetails className="mat-details">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/components/text-fields"
                        className={`sidemenu-link ${
                          pathname === "/admin/components/text-fields" ? "active" : ""
                        }`}
                      >
                        Text Fields
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/components/select"
                        className={`sidemenu-link ${
                          pathname === "/admin/components/select" ? "active" : ""
                        }`}
                      >
                        Select
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/components/checkbox"
                        className={`sidemenu-link ${
                          pathname === "/admin/components/checkbox" ? "active" : ""
                        }`}
                      >
                        Checkbox
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/components/radio"
                        className={`sidemenu-link ${
                          pathname === "/admin/components/radio" ? "active" : ""
                        }`}
                      >
                        Radio
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/components/switch"
                        className={`sidemenu-link ${
                          pathname === "/admin/components/switch" ? "active" : ""
                        }`}
                      >
                        Switch
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/components/slider"
                        className={`sidemenu-link ${
                          pathname === "/admin/components/slider" ? "active" : ""
                        }`}
                      >
                        Slider
                      </Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>

              {/* Data Display */}
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                className="mat-accordion"
              >
                <AccordionSummary
                  className="mat-summary"
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <i className="material-symbols-outlined">table_chart</i>
                  <Typography component={"span"} className="title">
                    Data Display
                  </Typography>
                </AccordionSummary>

                <AccordionDetails className="mat-details">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/components/tables"
                        className={`sidemenu-link ${
                          pathname === "/admin/components/tables" ? "active" : ""
                        }`}
                      >
                        Tables
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/components/lists"
                        className={`sidemenu-link ${
                          pathname === "/admin/components/lists" ? "active" : ""
                        }`}
                      >
                        Lists
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/components/cards"
                        className={`sidemenu-link ${
                          pathname === "/admin/components/cards" ? "active" : ""
                        }`}
                      >
                        Cards
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/components/accordion"
                        className={`sidemenu-link ${
                          pathname === "/admin/components/accordion" ? "active" : ""
                        }`}
                      >
                        Accordion
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/components/tabs"
                        className={`sidemenu-link ${
                          pathname === "/admin/components/tabs" ? "active" : ""
                        }`}
                      >
                        Tabs
                      </Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>

              {/* Feedback */}
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                className="mat-accordion"
              >
                <AccordionSummary
                  className="mat-summary"
                  aria-controls="panel4d-content"
                  id="panel4d-header"
                >
                  <i className="material-symbols-outlined">warning</i>
                  <Typography component={"span"} className="title">
                    Feedback
                  </Typography>
                </AccordionSummary>

                <AccordionDetails className="mat-details">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/components/alerts"
                        className={`sidemenu-link ${
                          pathname === "/admin/components/alerts" ? "active" : ""
                        }`}
                      >
                        Alerts
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/components/dialogs"
                        className={`sidemenu-link ${
                          pathname === "/admin/components/dialogs" ? "active" : ""
                        }`}
                      >
                        Dialogs
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/components/snackbars"
                        className={`sidemenu-link ${
                          pathname === "/admin/components/snackbars" ? "active" : ""
                        }`}
                      >
                        Snackbars
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/components/progress"
                        className={`sidemenu-link ${
                          pathname === "/admin/components/progress" ? "active" : ""
                        }`}
                      >
                        Progress
                      </Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>

              {/* Charts */}
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
                className="mat-accordion"
              >
                <AccordionSummary
                  className="mat-summary"
                  aria-controls="panel5d-content"
                  id="panel5d-header"
                >
                  <i className="material-symbols-outlined">show_chart</i>
                  <Typography component={"span"} className="title">
                    Charts
                  </Typography>
                </AccordionSummary>

                <AccordionDetails className="mat-details">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/charts/line"
                        className={`sidemenu-link ${
                          pathname === "/admin/charts/line" ? "active" : ""
                        }`}
                      >
                        Line Charts
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/charts/area"
                        className={`sidemenu-link ${
                          pathname === "/admin/charts/area" ? "active" : ""
                        }`}
                      >
                        Area Charts
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/charts/column"
                        className={`sidemenu-link ${
                          pathname === "/admin/charts/column" ? "active" : ""
                        }`}
                      >
                        Column Charts
                      </Link>
                    </li>
                    <li className="sidemenu-item">
                      <Link
                        href="/admin/charts/pie"
                        className={`sidemenu-link ${
                          pathname === "/admin/charts/pie" ? "active" : ""
                        }`}
                      >
                        Pie Charts
                      </Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LeftSidebarMenu;