export default function Footer() {
  return (
    <footer className="border-t hairline px-6 py-14 sm:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold tracking-tight">
            REGRESSIVE
            <span className="text-ivory-dim"> ENTERPRISES</span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-ivory-dim">
            Coastal property and marine infrastructure work across
            Pinellas, Hillsborough, Pasco, and Manatee counties.
          </p>
        </div>

        <div className="flex flex-col gap-1 text-sm text-ivory-dim sm:items-end">
          <span>Clearwater, Florida</span>
          <span>Since 2011</span>
          <span className="mt-3 text-xs uppercase tracking-[0.25em]">
            The standards stay.
          </span>
        </div>
      </div>
    </footer>
  );
}
