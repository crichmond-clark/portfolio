---
title: "Business Finder"
description: "Internal automation tool for discovering small businesses with missing or weak websites, scoring opportunities, and exporting qualified leads."
tech: ["Python", "FastAPI", "SQLite", "Turso", "Google Places API"]
github: "https://github.com/crichmond-clark/business-finder"
featured: true
---

Internal automation tool for discovering small businesses with missing or weak websites. Built with Python, FastAPI, SQLite/Turso, and Google Places API, with scoring, filtering, and export workflows for lead qualification.

**Features:**
- CLI scanning with configurable pages and location filters
- FastAPI dashboard for browsing scan results
- Website quality scoring (missing, broken, or weak sites)
- Export leads by priority or scan
- Supports local SQLite or Turso (libSQL) database