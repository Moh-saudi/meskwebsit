import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Section3 from '../components/section3';
import Section4 from '../components/section4';
import Section5 from '../components/section5';
import Section6 from '../components/section6';
import Section7 from '../components/section7';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </main>
    </div>
  );
}

