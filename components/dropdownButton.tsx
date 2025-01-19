import { usePathname } from "next/navigation"
import { useEffect } from "react";

interface functionProps {
    classFetch: (pathname: string) => string;
}

export const DropdownButton = ( {props}: {props: functionProps}) => {
    // const path = usePathname();

    // useEffect(() => {
    //     import("flowbite");
    // }, [path]);

    return <>
        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className={`flex items-center ${props.classFetch("/services")}`}>
            <span>Services</span>
            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
        </button>
        <div id="dropdownNavbar" className="z-50 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
            <li>
                <a href="/services/tourist-visa" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tourist Visa</a>
            </li>
            <li>
                <a href="/services/study-visa" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Study Visa</a>
            </li>
            <li>
                <a href="/services/spouse-visa" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Spouse Visa</a>
            </li>
            </ul>
        </div>
    </>
}