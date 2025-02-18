/**
 * This file contains code for a SelectComponent that displays a dropdown with options to select.
 * This component can be used anywhere in the app where you need to display a dropdown with options to select.
 * The props required by this component are:
 * 1. options: an array of objects that will be displayed as options in the dropdown
 * 2. field: the field object from Formik
 * 3. form: the form object from Formik
 * 4. label: the label for the dropdown
 * 5. placeholder: the placeholder for the dropdown
 * 6. containerSizeClasses: the size classes for the dropdown container
 * 7. buttonSizeClasses: the size classes for the dropdown button
 * 8. buttonPositionClasses: the position classes for the dropdown button
 * 9. buttonBorderClasses: the border classes for the dropdown button
 * 10. optionPositionClasses: the position classes for the dropdown options
 * 11. error: the error state of the dropdown
 */
import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { IconDropdownOutline } from '../icons';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const SelectComponent = ({
  options,
  field,
  form,
  label,
  placeholder,
  containerSizeClasses = 'w-[484px] h-[69px]',
  buttonSizeClasses = 'w-[484px] h-[37px]',
  buttonPositionClasses = 'top-[32px] left-[0px]',
  buttonBorderClasses = 'border-[1px] border-solid border-dimgray-401',
  optionPositionClasses = 'top-[69px]',
  error = false,
}) => {
  const selectedOption =
    options.find(option => option.value === field.value) || '';

  const handleSelectedChange = value => {
    form.setFieldValue(field.name, value);
  };

  return (
    <Listbox value={selectedOption} onChange={handleSelectedChange}>
      {({ open }) => (
        <div
          className={classNames(
            containerSizeClasses,
            'relative text-base text-black'
          )}
        >
          <Listbox.Button
            className={classNames(
              buttonPositionClasses,
              buttonSizeClasses,
              buttonBorderClasses,
              'absolute rounded-lg box-border bg-white overflow-hidden flex flex-row py-2 px-3'
            )}
          >
            <span
              className={classNames(
                selectedOption ? '' : 'text-silver',
                'text-left text-sm font-poppins block truncate',
                error ? 'text-error' : ''
              )}
            >
              {selectedOption ? selectedOption.name : placeholder}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-3">
              <IconDropdownOutline className="h-6 w-6" />
            </span>
          </Listbox.Button>
          {label && (
            <div
              className={classNames(
                'absolute top-[0%] left-[0%] font-medium',
                error ? 'text-error' : ''
              )}
            >
              {label}
            </div>
          )}
          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={classNames(
                optionPositionClasses,
                'absolute z-10 left-0 max-h-44 my-0 px-0 py-1 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm list-none'
              )}
            >
              {options.map(option => (
                <Listbox.Option
                  key={option.value}
                  className={({ active }) =>
                    classNames(
                      active
                        ? 'bg-primaryblue-500 text-white'
                        : 'text-gray-900',
                      'relative cursor-default select-none px-4 py-2'
                    )
                  }
                  value={option.value}
                >
                  {({ selected }) => (
                    <div className="flex items-center">
                      <span
                        className={classNames(
                          selected ? 'font-semibold' : 'font-normal',
                          'text-left text-sm font-poppins block truncate'
                        )}
                      >
                        {option.name}
                      </span>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};

export default SelectComponent;
