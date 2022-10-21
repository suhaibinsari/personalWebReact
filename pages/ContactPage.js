import React from 'react'

export default function ContactPage() {
  return (
    
    <div class="p-6 border border-gray-300 sm:rounded-md">
      <form method="POST" action="https://herotofu.com/start">
        <label class="block mb-6">
          <span class="text-gray-700">Your name</span>
          <input
            type="text"
            name="name"
            class="
              block
              w-full
              mt-1
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
            placeholder="Joe Bloggs"
          />
        </label>
        <label class="block mb-6">
          <span class="text-gray-700">Email address</span>
          <input
            name="email"
            type="email"
            class="
              block
              w-full
              mt-1
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
            placeholder="joe.bloggs@example.com"
            required
          />
        </label>
        <label class="block mb-6">
          <span class="text-gray-700">Message</span>
          <textarea
            name="message"
            class="
              block
              w-full
              mt-1
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
            rows="3"
            placeholder="Tell us what you're thinking about..."
          ></textarea>
        </label>
        <div class="mb-6">
          <button
            type="submit"
            class="
              h-10
              px-5
              text-indigo-100
              bg-indigo-700
              rounded-lg
              transition-colors
              duration-150
              focus:shadow-outline
              hover:bg-indigo-800
            "
          >
            Contact Us
          </button>
        </div>
      </form>
    </div>
  )
}
