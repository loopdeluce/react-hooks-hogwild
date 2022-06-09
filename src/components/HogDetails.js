
function HogDetails ({specialty, greased, weight, medal}) {
  const greasedWording = greased ? 'Yes' : 'No';

  return (
    <>
      <h3>Specialty: <span>{specialty}</span></h3>
      <h3>Greased: <span>{greasedWording}</span></h3>
      <h3>Weight: <span>{weight}</span></h3>
      <h3>Medal: <span>{medal}</span></h3>
    </>
  );
}

export default HogDetails;