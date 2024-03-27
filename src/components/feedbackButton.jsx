'use client'

import { useRouter } from 'next/navigation';

const FeedbackButton = () => {
  const router = useRouter();

  const handleFeedbackClick = () => {
    // Redirect to the desired path on button click
    router.push('/Contact/Feedback');
  };

  return (
    <div className='text-center mt-20'>
      <button className="text-black bg-cyan-300 rounded-sm" onClick={handleFeedbackClick}>
        Leave Some Feedback
      </button>
    </div>
  );
};

export {FeedbackButton};