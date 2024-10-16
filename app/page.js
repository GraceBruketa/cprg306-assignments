import Link from 'next/link';
export default function Page() {
    return (
      <main>
        <h1 className= "text-4x1 font-bold mb-2">CPRG 306: Web Development 2 - Assignments</h1>
        <p>
          <Link href="http://localhost:3000/week-2" target="_blank">
            week-2
          </Link>
        </p>
        <p>
          <Link href= "http://localhost:3000/week-3">
            week-3
          </Link>
        </p>
        <p>
          <Link href= "http://localhost:3000/week-4">
            week-4
          </Link>
        </p>
        <p>
          <Link href= "http://localhost:3000/week-5">
            week-5
          </Link>
        </p>
      </main>
    );
}
