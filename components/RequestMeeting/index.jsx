import { AiOutlineClose } from "react-icons/ai";
import { Fragment, useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

import Form from "./Form";

export default function RequestMeeting() {
  let [isOpen, setIsOpen] = useState(false);

  let submitButtonRef = useRef(null);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <button onClick={openModal} className="btn-secondary">
        REQUEST A MEETING
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          initialFocus={submitButtonRef}
          as="div"
          className="relative z-10"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="flex w-full items-center justify-between"
                  >
                    <span className="text-lg font-bold">Meeting Request</span>
                    <AiOutlineClose
                      onClick={closeModal}
                      className="cursor-pointer"
                      size={20}
                    />
                  </Dialog.Title>
                  <Form
                    closeModal={closeModal}
                    initialFocus={submitButtonRef}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
