export async function createUser(payload) {
  const response = await fetch('https://fullstack-test-navy.vercel.app/api/users/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
}
