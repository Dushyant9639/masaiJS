function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Fetched data successfully!");
      } else {
        reject("Network error or server failure.");
      }
    }, 1000); 
  });
}
async function fetchDataHandler() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
fetchDataHandler();

