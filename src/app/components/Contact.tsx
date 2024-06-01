'use client'
import { FormData } from "../../../utils/types";
import { useForm, SubmitHandler } from 'react-hook-form';

export default function Contact() {
    const { register, handleSubmit } = useForm<FormData>({
        defaultValues: {
            name: '',
            email: '',
            message: ''
        },
    });

    async function submitForm(data: any) {
      const json = JSON.stringify(data);
  
      const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: json
      });
  
      const result = await response.json();
  
      if (result.success) {
          console.log(result);
      } else {
          throw new Error(result.message || 'Form submission failed');
      }
  }
  
    
    
    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
        try {
          console.log(data)
            await submitForm(data);
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit the form.');
        }
    };


    return (
        <div id="Contact" className="flex flex-col justify-center items-center h-5/6 bg-black text-white p-10">
            <div className="mb-2">Contact Us</div>
            <div className="mb-2">For job opportunities, please send your resume to zalabrador@gmail.com</div>
            <div>For all other inquiries, send us a message via the form below and we’ll get back to you as soon as possible.</div>

            <form onSubmit={handleSubmit(onSubmit)} className='mt-5 w-full md:w-1/2'>
                <div className='mb-5'>
                    <label
                        htmlFor='name'
                        className='mb-1 block text-base font-medium text-white'
                    >
                        Full Name
                    </label>
                    <input
                        type='text'
                        placeholder='Full Name'
                        className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none'
                        {...register('name', { required: true })}
                    />
                </div>
                <div className='mb-5'>
                    <label
                        htmlFor='email'
                        className='mb-1 block text-base font-medium text-white'
                    >
                        Email Address
                    </label>
                    <input
                        type='email'
                        placeholder='example@domain.com'
                        className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none'
                        {...register('email', { required: true })}
                    />
                </div>
                <div className='mb-5'>
                    <label
                        htmlFor='message'
                        className='mb-1 block text-base font-medium text-white'
                    >
                        Message
                    </label>
                    <textarea
                        rows={4}
                        placeholder='Type your message'
                        className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none'
                        {...register('message', { required: true })}
                    ></textarea>
                </div>
                <div>
                    <button type='submit' className='hover:shadow-form rounded-md bg-white py-3 px-8 text-base font-semibold text-black outline-none'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
