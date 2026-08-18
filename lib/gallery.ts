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
    image: "/gallery/seawall-dock-boatlift-finished-01.jpg",
    caption: "Completed seawall, dock, and boat lift install, Pinellas County waterfront.",
    category: "Seawalls",
  },
  {
    image: "/gallery/seawall-dock-boatlift-01.jpg",
    caption: "New seawall pour, dock, and boat lift install, Pinellas County waterfront.",
    category: "Seawalls",
  },
  {
    image: "/gallery/crew-seawall-cap-pour-01.jpg",
    caption: "Crew forming and pouring a new seawall cap on-site.",
    category: "Seawalls",
  },
  {
    image: "/gallery/seawall-repair-skidsteer-01.jpg",
    caption: "Seawall cap replacement and dock rebuild underway, waterfront condo property.",
    category: "Seawalls",
  },
  {
    image: "/gallery/seawall-cap-repair-01.jpg",
    caption: "Seawall cap repair and riprap placement along a residential canal.",
    category: "Seawalls",
  },
  {
    image: "/gallery/dock-reconstruction-01.jpg",
    caption: "Full dock reconstruction, seawall demo and rebuild, and boat lift service in progress.",
    category: "Docks",
  },
  {
    image: "/gallery/marina-dock-collage-01.jpg",
    caption: "Marina dock decking, commercial waterfront maintenance, and boat lift work.",
    category: "Commercial",
  },
];
