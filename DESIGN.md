# Design system

## Overview

Uptime Monitor is a signal watch: a quiet observatory log that lets sample endpoint status read as a sequence of responses, not as a generic analytics dashboard.

## Colors

- Observatory navy: `#101C2C`
- Console paper: `#E8EDF1`
- Signal cyan: `#8BDAD1`
- Delay amber: `#F0B45F`
- Down red: `#EC6C5A`

## Typography

- Headline: `Iowan Old Style`, `Palatino Linotype`, Georgia.
- Values, labels, and status: system monospace for instrument readability.
- Supporting copy: Helvetica system sans.

## Layout

- Dark observatory hero with a hand-built beacon.
- Light signal console with range tabs, a metric band, and endpoint log.
- Mobile turns metric and endpoint columns into a deliberate vertical readout.

## Elevation & Depth

Depth comes from navy-to-paper field change and the beacon's line/glow. Metrics stay flat and tabular.

## Shapes

Square console, hairline rules, one geometric beacon. Status is a compact rectangular signal label.

## Components

- Signal watch bar
- Beacon marker
- Range tabs
- Metric band
- Endpoint log
- Sample-data note

## Do's and Don'ts

- Do label sample data at the point of use.
- Do let response state and timing be the strongest information.
- Don't imply live polling, alerting, or a production SLA.
- Don't use a generic rounded KPI-card grid.
