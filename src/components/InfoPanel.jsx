export default function InfoPanel({ data }) {
  if (!data) return null; // Conditional rendering

  const { ip, isp, location } = data;
  const { city, region, country, timezone } = location;

  return (
    <section className="info">
      <div>
        <p>IP Address</p>
        <span>{ip}</span>
      </div>

      <div>
        <p>Location</p>
        <span>{city}, {region}, {country}</span>
      </div>

      <div>
        <p>Timezone</p>
        <span>UTC {timezone}</span>
      </div>

      <div>
        <p>ISP</p>
        <span>{isp}</span>
      </div>
    </section>
  );
}