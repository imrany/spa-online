// @flow strict

export const Header= () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <header className="bg-purple-500 text-white h-8 md:px-16 max-md:textxsm text-sm flex justify-between items-center">
        <a href="tel:+254734720752" target="_blank">
          <i className="ri-phone-line"></i>
          <span>+254734720752</span>
        </a>

        <p>
          Get 50% off on the selected items | Shop Now
        </p>

        <details>
          <summary className="cursor-pointer">Location</summary>
          <ul className="z-14 fixed top-8 right-8 py-4 px-8 text-base bg-purple-400">
            <li className="py-2">Mombasa</li>
            <li className="py-2">Nairobi</li>
            <li className="py-2">Kisumu</li>
            <li className="py-2">Nakuru</li>

          </ul>
        </details>
      </header>
    </div>
  )
}