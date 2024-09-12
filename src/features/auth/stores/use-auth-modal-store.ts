import { create } from 'zustand';
import { AuthModalContent } from '@/features/auth/types/auth-modal-content';

/**
 * Defines the object shape of the authentication modal store.
 */
interface AuthModalStore {

    // The modal state.
    modalOpen: boolean

    // The modal content to display.
    modalContent: AuthModalContent

    // Set the content of the modal.
    setModalContent: (content: AuthModalContent) => void

    // Toggle the modal open state.
    toggleModal: () => void

}

/**
 * This is a zustand global store for managing the state of the authentication modal.
 * Useful helper functions are provided to set the content of the modal and toggle the 
 * modal open state on a global level where needed.
 */
const useAuthModalStore = create<AuthModalStore>()(set => ({

    modalOpen: false,

    modalContent: 'signin',

    setModalContent: (content: AuthModalContent) => set({ modalContent: content }),

    toggleModal: () => set((state) => ({ modalOpen: !state.modalOpen})),
}));

export default useAuthModalStore;