// TODO(client-data): real client testimonials only. Never seed this with
// invented quotes or names — the Testimonials component hides itself
// entirely when this array is empty, which is the correct behavior until
// real reviews exist.
export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  project: string;
};

export const TESTIMONIALS: Testimonial[] = [];
