async function fetchData() {

    const result = await fetch("https://api.timezone.io/v1/timezones")


    if(!result.ok)
    {
        throw new Error("failded to fetch data");

    }
    return result.json();

}



const data = await fetchData();


return (
    <div>

<p> ${data} </p>


    </div>




)