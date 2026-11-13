const EXPERIENCE_API_URL = "https://api.timezone.io/v1/timezones/America/Los_Angeles";

async function fetchProjectExperience() {
  const token = process.env.BEARER_TOKEN;

  if (!token) {
    throw new Error("BEARER_TOKEN is not configured in .env.local");
  }

  const response = await fetch(EXPERIENCE_API_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Experience API request failed: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}

 const User_time = fetchProjectExperience() 




export default async function ProjectExperience() {
  let data;

  try {
    data = await fetchProjectExperience();
  } catch (error) {
    console.error(error);

    return (
      <section aria-labelledby="experience-heading">
        <h2 id="experience-heading">Project experience</h2>
        <p>Project experience is temporarily unavailable.</p>
      </section>
    );
  }


// We will set the variable of the time

const currentTime = data.meta.generated_at;



  return (
    <section aria-labelledby="experience-heading">



      <h2 id="experience-heading">Project experience</h2>
      <pre>{JSON.stringify(data.meta, null, 2)}</pre>


    <p>  {currentTime}</p>

   
      
    </section>
  );
}
