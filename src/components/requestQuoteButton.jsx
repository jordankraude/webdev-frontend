'use client'

import { useRouter } from 'next/navigation';

const RequestQuoteButton = () => {
  const router = useRouter();

  const handleFeedbackClick = () => {
    // Redirect to the desired path on button click
    router.push('/Contact/Quote');
  };

  return (
    <div className='text-center mt-20'>
      <button className="text-black bg-cyan-300 rounded-sm" onClick={handleFeedbackClick}>
        Request a Quote
      </button>
    </div>
  );
};

export {RequestQuoteButton};