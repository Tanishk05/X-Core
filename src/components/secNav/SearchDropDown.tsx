"use client";
import { useState, useRef, useEffect } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/react";
import { useRouter } from "next/navigation";

function SearchDropDown({ options, nextPage }: any) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const router = useRouter();

  const filteredOptions = query
    ? options.filter((option: any) =>
        option.toLowerCase().includes(query.toLowerCase())
      )
    : options;

  useEffect(() => {
    if (open) {
      inputRef.current.focus();
    }
  }, [open]);

  const handleSelect = (option: any) => {
    // Handle selected option
    setQuery(option);
    setOpen(false);
    router.push(nextPage)
  };

  return (
    <Combobox
      as="div"
      value={query}
      onChange={handleSelect}
      className={"w-full"}
    >
      <div className="relative">
        <ComboboxInput
          as="input"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black"
          placeholder="Search..."
          onChange={(event: any) => setQuery(event.target.value)}
          displayValue={(option: any) => option}
          ref={inputRef}
        />
        <ComboboxButton
          className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10  
 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </ComboboxButton>
      </div>

      <ComboboxOptions className="absolute z-10 mt-2 max-h-60 overflow-auto rounded-md shadow-lg bg-white">
        {filteredOptions.length === 0 ? (
          <div className="px-4 py-2 text-black">No results found</div>
        ) : (
          filteredOptions.map((option: any) => (
            <ComboboxOption
              key={option}
              value={option}
              className={({ active }: any) =>
                `cursor-default select-none py-2 pl-4 pr-8 ${
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                }`
              }
            >
              {option}
            </ComboboxOption>
          ))
        )}
      </ComboboxOptions>
    </Combobox>
  );
}

export default SearchDropDown;
