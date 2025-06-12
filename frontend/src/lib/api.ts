export const getHealthStatus = async () => {
  const response = await fetch('http://localhost:4000/api/health');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
