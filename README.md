# Coding Challenge
This repository contains the solution to a coding challenge I completed for a Developer role I applied for.

## Live Site
You can view the live site here: https://skin-blond.vercel.app/

## Technologies Used
- Next.js
- Tailwind CSS
- Swiper.js
  
## Features Implemented
### Header
- Sticky header with show/hide behavior on scroll.

### Hero Banner
- Accessible Carousel using Swiper.js.
- Cards are fully tabbable for improved accessibility.
- Default browser active styles applied (no custom overrides).
#### Carousel Notes
- Swiper.js was used, though it presented some challenges in Next.js.
- Workarounds were applied for issues such as flashing and excess padding under the carousel, but further optimization or a different package might be needed for full compatibility.

### Custom Fonts
- Custom fonts are implemented throughout the site.

### Hover Effects
- Basic hover effects applied to links and buttons.
- Carousel cards also feature hover effects.
  
## Known Issues
- The carousel may flash or show excess padding under it due to challenges with the Swiper.js package. I believe I've found some workarounds, but further tweaks or an alternative package might be needed to fully resolve these issues in Next.js.
- The design is not fully responsive and only built for a laptop screen, so it may not display correctly on smaller or larger screens.
