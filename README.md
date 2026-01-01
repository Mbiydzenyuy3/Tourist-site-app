# WanderLogic – Smart Local Discovery Engine

![WanderLogic Logo](public/assets/logo.png)

**Version:** 1.0  
**Repository:** [git@github.com:Mbiydzenyuy3/Tourist-site-app.git](git@github.com:Mbiydzenyuy3/Tourist-site-app.git)

## Overview

WanderLogic is a high-utility travel companion designed to solve the "logistical headache" of sightseeing. It provides an offline-first experience with real-time viability calculations for tourist attractions, helping travelers maximize their limited time in cities. Whether you're an international traveler or a local tourist, WanderLogic ensures you discover accessible sites efficiently.

**Note:** This repository currently contains a web-based prototype built with React and Vite. The full application is planned to be transformed into a React Native (Expo) mobile app for native mobile experiences.

## Key Features

### Functional Requirements

- **Geospatial Discovery (FR-1):** Display tourist sites on an interactive map based on the user's current GPS coordinates.
- **Viability Engine (FR-2):** Calculate if a user can reach a site before closing time using current distance and walking speed.
- **Offline Persistence (FR-3):** Browse previously loaded city data without an active internet connection.
- **Dynamic Search (FR-4):** Filter sites by category (e.g., Museum, Park, Historic) and simulated "Crowd Density."

### User Stories

- **US.1:** As a traveler, I want to see which sites are within a 15-minute walk to maximize my limited time in a city.
- **US.2:** As a traveler, I want to save a city's data while at the hotel Wi-Fi to avoid high roaming charges while exploring.
- **US.3:** As a traveler, I want the app to warn me if a museum is closing soon to avoid walking to a locked destination.
- **US.4:** As a solo explorer, I want to find "Hidden Gems" with low crowd density for a more authentic and quiet experience.

### Non-Functional Requirements

- **Performance:** Map markers render in under 200ms.
- **Availability:** 100% core functionality (viewing saved sites) while offline.
- **Scalability:** Architecture supports adding new cities via JSON/Cloud configuration.

## How It Works

WanderLogic leverages a "Viability" algorithm to determine site accessibility:

\[ T*{\text{arrival}} = T*{\text{now}} + \left( \frac{\text{Distance}}{\text{Speed}\_{\text{avg}}} \right) \]

If \( T*{\text{arrival}} < (T*{\text{closing}} - \text{Buffer}) \), the site is marked as "Viable."

The app uses local SQLite storage for offline data and integrates with APIs like Supabase and OpenWeather for real-time updates.

## Tech Stack

### Planned Mobile App (React Native)

- **Frontend:** React Native (Expo)
- **State Management:** Zustand
- **Database:** SQLite (via expo-sqlite)
- **API Layer:** TanStack Query (for Supabase/OpenWeather)
- **Styling:** NativeWind (Tailwind CSS for React Native)

### Current Web Prototype

- **Frontend:** React 19
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **Forms:** Formik with Yup validation
- **Linting:** ESLint

## Data Schema

The local SQLite database includes the following table:

```sql
CREATE TABLE tourist_sites (
  id INTEGER PRIMARY KEY,
  name TEXT,
  latitude REAL,
  longitude REAL,
  closing_time TEXT,
  category TEXT,
  is_hidden_gem BOOLEAN,
  last_updated DATETIME
);
```

## Component Architecture (Planned)

```
App.js (Navigation Container)
├── MainTabNavigator
    ├── MapScreen (Google Maps Integration)
    ├── ListScreen (Filtering & Sorting Logic)
    ├── DetailScreen (Offline-cached images and descriptions)
    └── Settings (Offline data management)
```

## Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Clone the Repository

```bash
git clone git@github.com:Mbiydzenyuy3/Tourist-site-app.git
cd Tourist-site-app
```

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Build for Production

```bash
npm run build
npm run preview
```

## Usage

1. **Browse Sites:** View tourist attractions on an interactive map.
2. **Filter & Search:** Use dynamic filters for categories and crowd density.
3. **Offline Mode:** Access saved data without internet.
4. **Viability Check:** Get real-time alerts on site accessibility.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request.

### Development Guidelines

- Follow ESLint rules.
- Write clear commit messages.
- Test your changes thoroughly.

## Future Plans

- Transform the web prototype into a full React Native mobile app.
- Integrate Google Maps for geospatial features.
- Implement the Viability Engine with real GPS data.
- Add offline caching for images and descriptions.
- Expand to support multiple cities via cloud configuration.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please open an issue on GitHub or contact the maintainers.

---

_WanderLogic: Your smart companion for seamless sightseeing._
