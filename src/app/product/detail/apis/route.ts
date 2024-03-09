export const dynamic = 'force-dynamic'; // defaults to auto
export async function GET(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
