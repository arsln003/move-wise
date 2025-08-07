
# MoveWise

MoveWise is a MERN-based transportation app designed to help users search for and favorite transport locations. It uses geocoding and mapping services to provide an interactive experience with features like location search, distance-based filtering, and favorite tracking.

## Features

-  User Authentication using Passport.js (Local Strategy)
-  Location-based transport search with Mapbox
-  Geocoding with OpenCage API
-  Mark and view favorite transport spots
-  Interactive map interface (Mapbox GL JS)
-  Haversine formula for distance calculation

## Technologies Used

- **Frontend:** React, Tailwind CSS, React Router
- **Backend:** Node.js, Express.js, MongoDB, Passport.js
- **APIs:** Mapbox, OpenCage Data API

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB (running locally or via Atlas)
- Mapbox Access Token
- OpenCage API Key

### Installation

1. Clone the repository:

```bash
git clone https://github.com/arsln003/move-wise.git
cd move-wise
```

2. Install dependencies:

```bash
npm install
cd client
npm install
cd ..
```

3. Create a `.env` file in the root folder and add the following:

```bash
MONGO_URL=your_mongodb_connection_string
MAPBOX_TOKEN=your_mapbox_token
OPEN_CAGE_API_KEY=your_opencage_key
SESSION_SECRET=your_session_secret
```

4. Run the server:

```bash
nodemon app.js
```

5. Run the React client:

```bash
cd client
npm start
```

### Directory Structure

```
move-wise/
│
├── app.js                  # Main Express server entry point
├── routes/                 # Express routes
│   ├── authRoutes.js
│   ├── transportRoutes.js
│   └── favoritesRoutes.js
├── controllers/            # Route controllers
├── models/                 # Mongoose models
├── middleware/             # Custom middleware (e.g., authentication)
├── client/                 # React frontend app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
├── .env                    # Environment variables (not uploaded)
└── README.md               # Project documentation
```

[Arsalan (arsln003)](https://github.com/arsln003)
