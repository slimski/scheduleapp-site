import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import Head from 'next/head';
import Link from 'next/link';

export default function Privacy() {
  return (<>
    <Head>
        <title>Don&apos;t Miss Next Match</title>
        <meta
          name="description"
          content="Stay up-to-date with your favorite soccer team's schedule and scores."
        />
      </Head>
      <Header />
    <main>
        <Container className="max-w-xl my-20"><div className=''>
          <h2 className="text-4xl mt-10 mb-10">Privacy Information</h2>

        <p className='my-5'>Our mobile app is designed to protect your privacy. We do not collect any information about you or your device. We do not track your location, your browsing history, your contacts, or any other personal information. <strong>We do not use cookies</strong>, analytics tools, or any other technologies that can track your behavior or preferences.</p>

        <p className='my-5'>We respect your right to privacy and we will never sell, rent, or share your information with any third party. We do not display any ads or promotions in our app, and we do not use any third-party services that might collect data about you.</p>

        <p className='my-5'>If you have any questions or concerns about our privacy practices, please contact us at <Link href="mailto:privacy@dontmissnextgame.com" className='underline font-mono'>privacy@dontmissnextgame.com</Link>.</p></div>
      </Container>
      </main>
    <Footer />
  </>
    )
}
