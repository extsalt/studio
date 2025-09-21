"use client";

import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { contactData } from "@/lib/data";

export default function MapComponent() {
  // IMPORTANT: You need to add your Google Maps API key to your environment variables.
  // Create a .env.local file in the root of your project and add:
  // NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="YOUR_API_KEY"
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex items-center justify-center bg-muted h-full rounded-lg">
        <p className="text-center text-muted-foreground p-4">
          Google Maps API Key is missing.
          <br />
          Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your environment variables.
        </p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        defaultCenter={contactData.map.center}
        defaultZoom={contactData.map.zoom}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId="acme-school-map"
        className="rounded-lg"
      >
        <AdvancedMarker position={contactData.map.center} />
      </Map>
    </APIProvider>
  );
}
