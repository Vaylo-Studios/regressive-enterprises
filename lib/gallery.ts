// TODO(client-data): real project photos only. Each entry needs an image in
// public/gallery/, a short caption, and ideally a location + year. The
// Gallery page renders a "coming soon" state gracefully when this is empty
// rather than shipping stock or placeholder imagery.
export type GalleryProject = {
  image: string;
  caption: string;
  category: "Seawalls" | "Docks" | "Boat Lifts" | "Storm Repair" | "Commercial";
  location?: string;
  year?: string;
};

export const GALLERY: GalleryProject[] = [
  {
    image: "/gallery/seawall-dock-boatlift-01.jpg",
    caption: "New seawall pour, dock, and boat lift install, Pinellas County waterfront.",
    category: "Seawalls",
  },
];
