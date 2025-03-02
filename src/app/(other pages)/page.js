
// client request
// Home page.js is a SERVER-SIDE COMPONENT
// GOOD for SEO
// for Next.js SERVER-SIDE the full URL must be added =>   const result = await fetch('http://localhost:3000/api/post/all', {}
// not like this =>   const result = await fetch('/api/post/all', {}



import Feed from '@/components/Feed';
import Input from '@/components/Input';

export default async function Home() {

  let data = null;

  try {
    // const result = await fetch(process.env.URL + '/api/post/all', {     original
    const result = await fetch('http://localhost:3000/api/post/all', {
      // он сказал почему не стал исользовать GET 3:04:00 для получения всех постов
      // тк Динамически данные в реальном времени должны отображаться поэтому POST
      method: 'POST',
      cache: 'no-store',
    });

    data = await result.json();
    console.log(data)

  } catch (error) {
    console.error('Error fetching posts:', error);
  }

  return (
    <div className='min-h-screen max-w-xl mx-auto border-r border-l'>
      <div className='py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
        <h2 className='text-lg sm:text-xl font-bold'>Home</h2>
      </div>

      <Input />

      <Feed data={data} />
      
    </div>
  );
}
